import React from 'react';

export default function About() {
  return (
    <>
      {/* Section About */}
      <section id="about" class="section_about">
        <div class="container narrow">
          <div class="about_me">
            <div class="about_me_text">
              <p>A creative person with solid design and development expertise. I build readymade websites, mobile applications, and elaborate online business services.
              </p>
            </div>
            <div class="about_me_more">
              <ul>
                <li>
                  <a href="#" target="_blank" title="twitter.com">
                    <img class="fn__svg" src="svg/twitter.svg" alt="twitter.com" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="facebook.com">
                    <img class="fn__svg" src="svg/facebook-logo.svg" alt="facebook.com" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="instagram.com">
                    <img class="fn__svg" src="svg/instagram.svg" alt="instagram.com" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="printerest.com">
                    <img class="fn__svg" src="svg/pinterest.svg" alt="printerest.com" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="youtube.com">
                    <img class="fn__svg" src="svg/youtube.svg" alt="youtube.com" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /Section About */}
    </>
  );
}

