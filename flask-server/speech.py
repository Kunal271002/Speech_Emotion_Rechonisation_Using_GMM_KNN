import pyaudio
import wave

def record_audio(WAVE_OUTPUT_FILENAME="Recording.wav", RECORD_SECONDS=5, CHANNELS=1, RATE=44100, CHUNK=1024):
    FORMAT = pyaudio.paInt16  
    p = pyaudio.PyAudio()

    stream = p.open(format=FORMAT, channels=CHANNELS,
                    rate=RATE, input=True,
                    frames_per_buffer=CHUNK)

    print(f"* Recording audio for {RECORD_SECONDS} seconds")

    frames = []

    for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
        data = stream.read(CHUNK)
        frames.append(data)

    print("* Done recording")
    stream.stop_stream()
    stream.close()
    p.terminate()

    wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))
    wf.close()

    print(f"File saved: {WAVE_OUTPUT_FILENAME}")

record_audio()
