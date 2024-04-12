from flask import Flask, flash, redirect, render_template, request
from moviepy.editor import VideoFileClip
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import librosa
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.mixture import GaussianMixture
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from keras.models import Sequential
from keras.layers import Dense
import joblib
import os
from sklearn.preprocessing import StandardScaler
import pickle

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = 'static/Uploaded'
os.listdir('static/Uploaded')

@app.route('/Upload',methods=["GET","POST"])
def backend():
    if request.method == "POST":
        global aud1
        aud1 = request.files.getlist("aud1")
        for files in aud1: 
            files.save(os.path.join(os.path.abspath(os.path.dirname(__file__)),app.config['UPLOAD_FOLDER'],secure_filename(files.filename)))
            print('File uploaded Successfully')
        input_directory = 'static/Uploaded'
        output_directory = 'static/converted/set1'

        os.makedirs(output_directory, exist_ok=True)

        for root, dirs, files in os.walk(input_directory):
            for file in files:
                if file.endswith('.avi'):
                    input_file_path = os.path.join(root, file)

                    output_file_name = os.path.splitext(file)[0] + ".wav"
                    output_file_path = os.path.join(output_directory, output_file_name)

                    video = VideoFileClip(input_file_path)
                    audio = video.audio
                    audio.write_audiofile(output_file_path, codec='pcm_s16le')
    return render_template('downloading.html')
@app.route('/features',methods=["GET","POST"])
def extract_features1():
    if request.method == "POST" : 
        audio_file = request.files["audio"]
        print(audio_file)
        def extract_hnr(audio, threshold=0.1):
            harmonics = np.abs(np.fft.fft(audio))
            noise = np.sum(harmonics[int(threshold * len(harmonics)):])
            harmonic = np.sum(harmonics[:int(threshold * len(harmonics))])
            hnr = harmonic / noise
            return hnr
        def extract_teo(audio):
            teo = np.sum(audio[1:-1]**2 - audio[:-2] * audio[2:])
            return teo
        audio, sr = librosa.load(audio_file, sr=None)
        mfcc = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=39)
        mfcc_mean = mfcc.mean(axis=1)
        hnr = extract_hnr(audio)  
        zcr = librosa.feature.zero_crossing_rate(audio).mean()
        teo = extract_teo(audio)  
        numpy_value = np.concatenate([mfcc_mean, [hnr, zcr, teo]])
        print(numpy_value)
        data = numpy_value.reshape(1,-1)
        standard_scaler = joblib.load('./standard_scaler.pkl')
        scale = standard_scaler.transform(data)
        knn = joblib.load('./knn_model1.pkl')
        pred = knn.predict(scale)
    return render_template('feature.html',pred=pred)

if __name__ == "__main__":
    app.run(debug=True)







