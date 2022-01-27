import React from 'react';

export default function Services() {
    return(
        <>
            {/* Section Services */}
            <secton id="services" class="section_services">
                <div class="container">
                    <div class="services_wrapper">
                        <div class="services_title">
                            <h3>Amazing Services</h3>
                        </div>
                        <div class="services_content">
                            <div class="service_direct">
                                <ul>
                                    <li>
                                        <div class="direct_wrapper">
                                            <div class="service_direct_left_bar">
                                                <div class="img_wrapper">
                                                    <div class="abs_img" style={{"backgroundImage":"url(img/service/service1.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="service_direct_right_bar">
                                                <h2>Websites &amp; platforms</h2>
                                                <p class="start_from">Starts from</p>
                                                <p class="price">$500</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="direct_wrapper">
                                            <div class="service_direct_left_bar">
                                                <div class="img_wrapper">
                                                    <div class="abs_img" style={{"backgroundImage":"url(img/service/service2.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="service_direct_right_bar">
                                                <h2>Mobile applications</h2>
                                                <p class="start_from">Starts from</p>
                                                <p class="price">$450</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="direct_wrapper">
                                            <div class="service_direct_left_bar">
                                                <div class="img_wrapper">
                                                    <div class="abs_img" style={{"backgroundImage":"url(img/service/service3.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="service_direct_right_bar">
                                                <h2>Strategy &amp; branding</h2>
                                                <p class="start_from">Starts from</p>
                                                <p class="price">$500</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="direct_wrapper">
                                            <div class="service_direct_left_bar">
                                                <div class="img_wrapper">
                                                    <div class="abs_img" style={{"backgroundImage":"url(img/service/service4.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="service_direct_right_bar">
                                                <h2>Design conspect</h2>
                                                <p class="start_from">Starts from</p>
                                                <p class="price">$450</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </secton>
            {/* /Section Services */}
        </>
    );
}
