import React from "react";
export default function InputFile() {
  return (
    <div>
      <>
      <div className="container my-3">
        <div className="container">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Choose the .AVI file to convert into (.WAV)
            </label>
            <form method="Post" action="/Upload" enctype="multipart/form-data">
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="aud1"
                multiple="multiple"
                accept=".avi"
              />
              <button
                className="btn btn-primary my-3 container kunal"
                type="submit"
                id="formFile"
                name="submit"
              >
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>

          <form method="Post" action="/features" enctype="multipart/form-data">
          <div className="mb-3">
            <label
              htmlFor="formFileMultiple"
              className="form-label"
              style={{ marginleft: "90px" }}
            >
              Choose file to detect Emotions
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple=""
              accept=".wav"
              name="audio"
            />
            <button
              className="btn btn-primary my-3 container kunal"
              type="submit"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
          </form>
        </div>
      </div>
      </>
    </div>
  );
}
