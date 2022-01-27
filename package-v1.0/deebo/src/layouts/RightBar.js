import React from 'react';

export default function RightBar({toggleTrueFalse}) {
    return (
        <>
            {/* Right Bar  */}
            <div className="deebo_right_bar">
                <div className="right_container">
                    <div className="right_bar_clother">
                        <a onClick={toggleTrueFalse} href="#"></a>
                    </div>
                    <div className="traffic">
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
                    <div className="deebo_email">
                        <div className="email">
                            <p>Email</p>
                            <a href="mailto:flabteam@gmail.com">flabteam@gmail.com</a>
                        </div>
                        <div className="copyright">
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
