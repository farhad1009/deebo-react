import React from 'react';

export default function ModalBox() {
    return (
        <>
            {/* MODALBOX  */}
            <div class="deebo_fn_modalbox">
                <a class="extra_closer" href="#"></a>
                <div class="box_inner">
                    <a class="closer" href="#"><span></span></a>
                    <div class="modal_content">

                        <div class="modal_in">
                            {/* Content comes from JS  */}
                        </div>

                        <div class="fn__nav" data-from="" data-index="">
                            <a href="#" class="prev">
                                <span class="text">Prev</span>
                                <span class="arrow_wrapper"><span class="arrow"></span></span>
                            </a>
                            <a href="#" class="next">
                                <span class="text">Next</span>
                                <span class="arrow_wrapper"><span class="arrow"></span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /MODALBOX   */}
        </>
    );
}
