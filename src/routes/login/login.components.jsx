import React from "react";
import "./login.styles.css";

import { ReactComponent as LogoImg } from "../../assets/48x48-netflix-logo.svg";
import { useState } from "react";

const Login = () => {
	const [signIn, setSignIn] = useState(false);
	return (
		<div className="login">
			<div className="login__background">
				<LogoImg className="login__logo" />
				<button className="login__button" onClick={() => setSignIn(true)}>
					Sign In
				</button>
				<div className="login__gradient"></div>
			</div>
			<div className="login__body">
				{signIn ? (
					<SignIn />
				) : (
					<>
						<h1>Unlimited fims, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className="login__input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button
									className="login__getStarted"
									onClick={() => setSignIn(true)}
								>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Login;
