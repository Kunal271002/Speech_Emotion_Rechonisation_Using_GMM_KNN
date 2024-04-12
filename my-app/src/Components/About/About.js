import React from "react";
import "./nicepage.css";
import img1 from "./images/AboutImage.png";
import "./About.css";
export default function About() {
  return (
    <div>
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="About Work" />
        <meta name="description" content="" />
        <title></title>
        <link rel="stylesheet" href="nicepage.css" media="screen" />
        <link rel="stylesheet" href="About.css" media="screen" />
        <meta name="generator" content="Nicepage 6.5.3, nicepage.com" />
        <link
          id="u-theme-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
        />
        <link
          id="u-page-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        />
        <meta name="theme-color" content="#478ac9" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="website" />
        <meta data-intl-tel-input-cdn-path="intlTelInput/" />
        <header className="u-clearfix u-header u-header" id="sec-b0da">
          <div className="u-clearfix u-sheet u-sheet-1" />
        </header>
        <div
          className="u-align-left u-clearfix u-section-1"
          id="carousel_f9c2"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                      <h2 className="u-custom-font u-font-montserrat u-text u-text-default u-text-1">
                        <strong>About Emotion Based Recogition</strong>
                      </h2>
                      <p className="u-custom-font u-font-montserrat u-text u-text-2">
                        Emotion recognition, also known as emotion detection or
                        sentiment analysis, is a field of study within computer
                        science and psychology that focuses on identifying human
                        emotions from various sources such as text, speech,
                        facial expressions, physiological signals, and more.
                        Emotion recognition technology aims to understand and
                        interpret human emotions to improve human-computer
                        interaction, develop empathetic AI systems, enhance
                        customer experience, and provide insights for various
                        applications
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-xl u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-2">
                      <img
                        className="u-image u-image-default u-image-1"
                        src={img1}
                        alt=""
                        data-image-width={1248}
                        data-image-height={1080}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
