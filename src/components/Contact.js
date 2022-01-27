import React, { useState } from 'react';

export default function Contact() {
	const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
	const [active, setActive] = useState(null);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const { email, name, phone, msg } = form;
	const onSubmit = (e) => {
		e.preventDefault();
		if (email && name && phone && msg) {
			setSuccess(true);
			setTimeout(() => {
				setForm({ email: "", name: "", phone: "", msg: "" });
				setSuccess(false);
			}, 2000);
		} else {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		}
	};
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
							<form className="contact_form" onSubmit={(e) => onSubmit(e)} data-email="trendycoder.com@gmail.com">

								<div
									className="success"
									data-success="Your message has been received, we will contact you soon."
									style={{ display: success ? "block" : "none" }}
								>
									<span className="contact_success">
										Your message has been received, we will contact you soon.
									</span>
								</div>
								<div
									className="empty_notice"
									style={{ display: error ? "block" : "none" }}
								>
									<span>Please Fill Required Fields!</span>
								</div>


								<div class="items_wrap">
									<div class="items">
										<div class="item half">
											<div className={`input_wrapper ${active === "name" || name ? "active" : ""
												}`}>
												<input
													onFocus={() => setActive("name")}
													onBlur={() => setActive(null)}
													onChange={(e) => onChange(e)}
													value={name}
													name="name"
													id="name"
													type="text"
													placeholder="Name *"
												/>
											</div>
										</div>
										<div class="item half">
											<div
												className={`input_wrapper ${active === "email" || email ? "active" : ""
													}`}
											>
												<input
													onFocus={() => setActive("email")}
													onBlur={() => setActive(null)}
													onChange={(e) => onChange(e)}
													value={email}
													name="email"
													id="email"
													type="email"
													placeholder="Email *"
												/>
											</div>
										</div>
										<div class="item">
											<div
												className={`input_wrapper ${active === "phone" || phone ? "active" : ""
													}`}
											>
												<input
													onFocus={() => setActive("phone")}
													onBlur={() => setActive(null)}
													id="phone"
													onChange={(e) => onChange(e)}
													value={phone}
													name="phone"
													type="text"
													placeholder="Phone"
												/>
											</div>
										</div>
										<div class="item">
											<div
												className={`input_wrapper ${active === "message" || msg ? "active" : ""
													}`}
											>
												<textarea
													onFocus={() => setActive("message")}
													onBlur={() => setActive(null)}
													name="msg"
													onChange={(e) => onChange(e)}
													value={msg}
													id="message"
													placeholder="Message"
												/>
											</div>
										</div>
										<div class="item">
											<input
												className="a"
												type="submit"
												id="send_message"
												value="Send Message"
											/>
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
								<h4><a href="tel:+7068980751">(+880) 1674 052 925</a></h4>
							</div>
							<div class="address_footer">
								<a href="mailto:trendycoder.com@gmail.com">trendycoder.com@gmail.com</a>
							</div>
						</div>
					</div>
				</div>
			</section >
			{/* /Section Contact */}
		</>
	);
}
