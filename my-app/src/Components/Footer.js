import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="kunal my-5">
      <footer className="py-5 container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3 mx-5">
            <h5>Speech Emotion Recognition</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary kunal">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary kunal">
                  <button
                    className="btn btn-dark dropdown-toggle kunal"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    margin-right="100px"
                  >
                    Featrues
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark container">
                    <li>
                      <a className="dropdown-item" href="#">
                        Extracting Audio from Video
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Converting Any Formats to (.WAV) file.
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Detecting Emotions
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary kunal">
                  <Link to="InputFile">.AVI to .WAV</Link>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary kunal">
                  <Link to="Contact">Contact</Link>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary kunal">
                  <Link to="About">About</Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-3 mb-3">
            <form>
              <h5>Subscribe to our Speech Emotion Recognition</h5>
              <p>
                To detect the emotions based on the audio file that is in .WAV
                file
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Group 7. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="/twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="/instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="/facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
