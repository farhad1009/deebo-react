import React from 'react';

export default function Skills() {
    return (

        <>
            {/* Section Scills */}
            <section id="scills" class="section_scills">
                <div class="scills_wrapper">
                    <div class="container narrow">
                        <div class="scills_title">
                            <h3>Knowledge &amp; Skills</h3>
                        </div>
                        <div class="scills_about">
                            <p>For over a decade, I've helped businesses to craft honest, emotional experiences through strategy, brand development, graphic design, and web design. </p>
                        </div>
                    </div>
                    <div class="container narrow2">
                        <div class="fn_cs_progress_bar">
                            <div class="progress_item" data-value="90">
                                <div class="item_in">
                                    <h3 class="progress_title">Adobe Photoshop</h3>
                                    <span class="progress_percent"></span>
                                    <div class="progress_bg"></div>
                                </div>
                            </div>

                            <div class="progress_item" data-value="95">
                                <div class="item_in">
                                    <h3 class="progress_title">HTML5 &amp; CSS3</h3>
                                    <span class="progress_percent"></span>
                                    <div class="progress_bg"></div>
                                </div>
                            </div>

                            <div class="progress_item" data-value="80">
                                <div class="item_in">
                                    <h3 class="progress_title">WordPress</h3>
                                    <span class="progress_percent"></span>
                                    <div class="progress_bg"></div>
                                </div>
                            </div>

                            <div class="progress_item" data-value="85">
                                <div class="item_in">
                                    <h3 class="progress_title">Adobe Illustrator</h3>
                                    <span class="progress_percent"></span>
                                    <div class="progress_bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Scills */}
        </>);
}
