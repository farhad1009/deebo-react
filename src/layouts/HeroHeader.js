import React from 'react';

export default function HeroHeader() {
    return (
        <>
            {/* Hero Header */}
            <section id="hero-header" class="section_header">
                <div class="container">
                    <div class="content">
                        <div class="left_hero_header">
                            <div class="circle">
                                <div class="bg_img" data-bg-img="img/header/1.jpg"></div>
                                <img src="img/thumb/square.jpg" alt="" />
                                <div class="circle_holder_blue"><span></span></div>
                                <div class="circle_holder_orange"><span></span></div>
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#" class="person_info"><img src="svg/stick-man.svg" alt="" class="fn__svg" /></a>
                            </div>
                        </div>
                        <div class="right_hero_header">
                            <div class="my_self">
                                <h4>Hello! I Am</h4>
                                <h2>
                                    {/* - It is animation title. You can change animation variation by changing extra class to one of next classes: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push. cd-headline class can not be removed.  */}
                                    <span class="cd-headline clip">
                                        <span class="cd-words-wrapper">
                                            <b class="is-visible">Designer</b>
                                            <b>Developer</b>
                                            <b>Freelancer</b>
                                        </span>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -/ Hero Header */}
        </>
    )

}
