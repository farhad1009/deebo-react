import React from 'react';

export default function Work() {
    return (
        <>
            {/* Section Work */}
            <section id="work" class="section_work">
                <div class="container">
                    <div class="work_title">
                        <h3>Featured Projects</h3>
                    </div>
                    <div class="work_content">
                        <div class="work_content_left_bar">
                            <h2>Deduma</h2>
                            <p class="about_deduma">Online platform for distance learning.</p>
                            <p class="goal_deduma">web, mobile, online</p>
                        </div>
                        <div class="work_content_right_bar">
                            <div class="right_bar_wrapper">
                                <div class="deduma_image" style={{"backgroundImage":"url(img/about/1.jpg)"}}></div>
                                <img src="img/thumb/square.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Work */}
        </>
    );
}
