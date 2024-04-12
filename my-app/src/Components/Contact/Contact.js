import React from 'react'
import './Contact.css'
import './nicepage.css'
export default function Contact() {
  return (
    <div>
      <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <meta name="keywords" content="About Work" />
  <meta name="description" content="" />
  <title>Home</title>
  <link rel="stylesheet" href="nicepage.css" media="screen" />
  <link rel="stylesheet" href="Contact.css" media="screen" />
  <meta name="generator" content="Nicepage 6.5.3, nicepage.com" />
  <meta name="referrer" content="origin" />
  <link
    id="u-theme-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
  />
  <link
    id="u-page-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700"
  />
  <meta name="theme-color" content="#478ac9" />
  <meta property="og:title" content="Home" />
  <meta property="og:type" content="website" />
  <meta data-intl-tel-input-cdn-path="intlTelInput/" />
  <header className="u-clearfix u-header u-header" id="sec-b0da">
    <div className="u-clearfix u-sheet u-sheet-1" />
  </header>
  <section
    className="u-align-center u-clearfix u-valign-top-md u-white u-section-1"
    id="carousel_4b5c"
  >
    <div className="u-black u-border-2 u-border-black u-expanded-width u-shape u-shape-rectangle u-shape-1" />
    <div className="u-container-style u-group u-group-1">
      <div className="u-container-layout u-valign-bottom-xs u-valign-top-sm u-container-layout-1">
        <div className="u-align-center u-container-style u-group u-white u-group-2">
          <div className="u-container-layout u-container-layout-2">
            <h2 className="u-custom-font u-font-oswald u-text u-text-1">
              Contact Us
            </h2>
            <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
              <form
                // method='post'
                // action="http://localhost/contact/contact.php"
                className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                style={{ padding: 10 }}
                source="email"
                name="form"
              >
                <div className="u-form-group u-form-name">
                  <label
                    htmlFor="name-5a14"
                    className="u-form-control-hidden u-label"
                    wfd-invisible="true"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    id="name-5a14"
                    name="name"
                    className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                    required=""
                  />
                </div>            
                <div className="u-form-email u-form-group">
                  <label
                    htmlFor="email-5a14"
                    className="u-form-control-hidden u-label"
                    wfd-invisible="true"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter a valid email address"
                    id="email-5a14"
                    name="email"
                    className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                    required=""
                  />
                </div>
                <div className="u-form-group u-form-message">
                  <label
                    htmlFor="message-5a14"
                    className="u-form-control-hidden u-label"
                    wfd-invisible="true"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    rows={4}
                    cols={50}
                    id="message-5a14"
                    name="message"
                    className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="u-align-center u-form-group u-form-submit">
                  <a
                    href="http://localhost/contact/contact.php"
                    className="u-black u-btn u-btn-submit u-button-style u-btn-1"
                  >
                    Submit
                  </a>
                  <input
                    type="submit"
                    defaultValue="submit"
                    className="u-form-control-hidden"
                    wfd-invisible="true"
                    action='../C:/xampp/htdocs/Contact/contact.php'
                    method='post'
                  />
                </div>
                <div
                  className="u-form-send-message u-form-send-success"
                  wfd-invisible="true"
                >
                  Thank you! Your message has been sent.
                </div>
                <div
                  className="u-form-send-error u-form-send-message"
                  wfd-invisible="true"
                >
                  Unable to send your message. Please fix errors then try again.
                </div>
                <input
                  type="hidden"
                  defaultValue=""
                  name="recaptchaResponse"
                  wfd-invisible="true"
                />
                <input
                  type="hidden"
                  name="formServices"
                  defaultValue="c51a6762-14f9-80d7-301e-44cb082ef871"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}
