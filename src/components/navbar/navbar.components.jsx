import React, { useEffect, useState } from "react";
import { debounce } from "../../utils/helpers";

import "./navbar.styles.css";

import { ReactComponent as LogoImg } from "../../assets/48x48-netflix-logo.svg";
import AvatarIcon from "../../assets/avatar-icon.png";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(false);

	// Debounce sets a limit on how often handleScroll fires (in ms)
	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos < currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos > 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 150);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<div className={`nav ${visible && "nav__black"}`}>
			<div className="nav__contents">
				<LogoImg className="nav__logo" alt="logo image" />
				<img src={AvatarIcon} className="nav__avatar" alt="avatar icon" />
			</div>
		</div>
	);
};

export default Navbar;
