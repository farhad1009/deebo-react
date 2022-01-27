import React from 'react';
import {useEffect, useState } from "react";
import Link from 'next/link';


export default function Nav({toggleTrueFalse}) {
	const [scroll, setScroll] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 100);
      });
   }, [scroll]);
   
  return(
   <>
   {/* Navigation */}
			<div class={`navigation ${scroll ? "scrolled" : ""}`}>
				<div class="container">
					<div class="nav_wrapper">
						<div class="left_nav">
							<Link href="/"><a>
								<img src="img/logo/logo.png" alt="logo" />
							</a>
							</Link>
						</div>
						<div class="right_bar_animation">
							<a onClick={toggleTrueFalse}>
								<div class="right_nav">
									<p>Menu</p>
									<ul>
										<li><span></span></li>
										<li><span></span></li>
										<li><span></span></li>
									</ul>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>			
			{/* /Navigation */}
  </>
  )
}

