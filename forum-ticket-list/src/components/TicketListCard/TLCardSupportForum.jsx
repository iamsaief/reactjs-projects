import React from 'react';

export default function TLCardSupportForum() {
	return (
		<div className="tl-card tl-card--support-forum tl-mb-40">
			<div className="tl-card__header tl-card__header--flex-between">
				<div className="tl-card__header--title tl-fw-7">Support Resources</div>
				<div className="tl-button-group">
					<button className="tl-button tl-button--link tl-button--lg" type="button">
						Need Help?
					</button>
					<button className="tl-button tl-button--primary tl-button--lg" type="button">
						Get Support
					</button>
				</div>
			</div>
			<div className="tl-card__body">
				<svg width={64} height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx={32} cy={32} fill="#333" r={32} />
					<g clipPath="url(#a)">
						<path
							d="M39.111 30.25V21.5c0-1.93-1.594-3.5-3.555-3.5h-16C17.594 18 16 19.57 16 21.5v8.75c0 1.93 1.594 3.5 3.556 3.5v2.964a.54.54 0 0 0 .86.427l4.6-3.396h10.54c1.96.005 3.555-1.564 3.555-3.495Zm5.333-3.5H40.89v3.5c0 2.893-2.395 5.25-5.333 5.25h-8.89V39c0 1.93 1.595 3.5 3.556 3.5h6.984l4.6 3.396a.54.54 0 0 0 .86-.427V42.5h1.778C46.406 42.5 48 40.93 48 39v-8.75c0-1.93-1.594-3.5-3.556-3.5Z"
							fill="#fff"
						/>
					</g>
					<defs>
						<clipPath id="a">
							<path fill="#fff" transform="translate(16 18)" d="M0 0h32v28H0z" />
						</clipPath>
					</defs>
				</svg>
				<h4 className="tl-fw-7 tl-fs-24 tl-mb-10 tl-primary-black">Support Forums</h4>
				<p className="tl-mb-6">Search the topic you need help with in our support forums.</p>
				<button className="tl-button tl-button--link tl-button--sm tl-button--has-icon" type="button">
					<span className="tl-bttuon__text">Browse Forums</span>
					<span className="tl-button__icon">
						<svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.673 6.588 7.354 1.27a.343.343 0 0 0-.136-.083.401.401 0 0 0-.15-.027c-.055 0-.11.01-.165.028a.544.544 0 0 0-.136.082l-.848.86a.52.52 0 0 0-.096.138.401.401 0 0 0-.027.15c0 .055.009.11.027.164.028.046.06.087.096.123l3.158 3.158H.573c-.1 0-.187.037-.26.11a.312.312 0 0 0-.109.246V7.53c0 .1.037.187.11.26.072.064.159.096.26.096h8.503L5.92 11.045a.523.523 0 0 0-.096.137.402.402 0 0 0-.027.15c0 .055.009.11.027.164.028.055.06.1.096.137l.848.848a.545.545 0 0 0 .136.082c.055.018.11.027.164.027.055 0 .105-.01.15-.027a.343.343 0 0 0 .137-.083l5.319-5.318a.364.364 0 0 0 .082-.123.365.365 0 0 0 .04-.164.287.287 0 0 0-.04-.15.343.343 0 0 0-.082-.137Z"
								fill="#286EF1"
							/>
						</svg>
					</span>
				</button>
				<div className="tl-form-group tl-form-group--radius tl-form-group--has-icon tl-mt-16">
					<input
						type="search"
						name="tl-support-forum-search"
						className="tl-form-control"
						placeholder="Search support forum"
					/>
				</div>
			</div>
		</div>
	);
}
