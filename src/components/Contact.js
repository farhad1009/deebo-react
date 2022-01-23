import React from 'react';

export default function Contact() {
  return (
  <>
  {/* Section Contact */}
				<section id="contact" class="section_contact">
					<div class="contact_title">
						<div class="container narrow">
							<div class="title">
								<h3>Get In Touch</h3>
							</div>
							<div class="subtitle">
								<p>Want to say hello? Want to know about me? Give me a call or drop me an email and I will get back to you as soon as I can.</p>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="contact_wrapper">
							<div class="contact_wrapper_form">
								<form class="contact_form" action="/" method="post" autoComplete="off" data-email="frenifyteam@gmail.com">

													
									<div class="success" data-success="Your message has been received, we will contact you soon."></div>
									<div class="empty_notice"><span>Please Fill Required Fields!</span></div>
									 

									<div class="items_wrap">
										<div class="items">
											<div class="item half">
												<div class="input_wrapper">
													<input id="name" type="text" placeholder="Name *" />
												</div>
											</div>
											<div class="item half">
												<div class="input_wrapper">
													<input id="email" type="email" placeholder="Email *" />
												</div>
											</div>
											<div class="item">
												<div class="input_wrapper">
													<input id="phone" type="text" placeholder="Phone" />
												</div>
											</div>
											<div class="item">
												<div class="input_wrapper">
													<textarea id="message" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="item">
												<a id="send_message" href="#">Send Message</a>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="contact_wrapper_address">
								<div class="address_header">
									<p>Address</p>
									<h4>69 Queen St, Melbourne Australia</h4>
								</div>
								<div class="address_middle">
									<p>Phone</p>
									<h4><a href="tel:+7068980751">(+706) 898-0751</a></h4>
								</div>
								<div class="address_footer">
									<a href="mailto:flabteam@gmail.com">flabteam@gmail.com</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* /Section Contact */}
  </>
    );
}
