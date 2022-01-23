import React from 'react';
import {useEffect, useState } from "react";


export default function Nav() {
  return(
   <>
   {/* Navigation */}
			<div class="navigation">
				<div class="container">
					<div class="nav_wrapper">
						<div class="left_nav">
							<a href="index.html">
								<img src="img/logo/logo.png" alt="logo" />
							</a>
						</div>
						<div class="right_bar_animation">
							<a href="#">
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

