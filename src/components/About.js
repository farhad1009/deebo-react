import React from 'react';
import {SVG_Twitter, SVG_Facebook, SVG_Instagram, SVG_Pinterest, SVG_Youtube} from '../../public/svg/svg'

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
                    <SVG_Twitter/>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="facebook.com">
                    <SVG_Facebook/>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="instagram.com">
                    <SVG_Instagram/>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="printerest.com">
                    <SVG_Pinterest/>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="youtube.com">
                    <SVG_Youtube/>
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

