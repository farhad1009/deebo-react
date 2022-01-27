import React from 'react';

export default function RightBar({toggleTrueFalse}) {
    return (
        <>
            {/* Right Bar  */}
            <div class="deebo_right_bar">
                <div class="right_container">
                    <div class="right_bar_clother">
                        <a onClick={toggleTrueFalse} href="#"></a>
                    </div>
                    <div class="traffic">
                        <h4>Menu</h4>
                        <ul>
                            <li><a onClick={toggleTrueFalse} href="#hero-header">Home</a></li>
                            <li><a onClick={toggleTrueFalse} href="#about">About</a></li>
                            <li><a onClick={toggleTrueFalse} href="#scills">Portfolio</a></li>
                            <li><a onClick={toggleTrueFalse} href="#services">Services</a></li>
                            <li><a onClick={toggleTrueFalse} href="#tips">News &amp; Tips</a></li>
                            <li><a onClick={toggleTrueFalse} href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="deebo_email">
                        <div class="email">
                            <p>Email</p>
                            <a href="mailto:flabteam@gmail.com">flabteam@gmail.com</a>
                        </div>
                        <div class="copyright">
                            <p>Copyright</p>
                            <a href="https://frenify.com/" target="_blank">Developed by Frenify</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Right Bar  */}
        </>
    );
}
