import React, { useState } from "react";

import SignInForm from "../../components/Auth/SignInForm";
import SignUpForm from "../../components/Auth/SignUpForm";
import AuthOverlay from "../../components/Auth/AuthOverlay";

import "./AuthPage.css";

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const showSignUp = () => {
        setIsSignUp(true);
    };

    const showSignIn = () => {
        setIsSignUp(false);
    };

    return (
        <main className="auth_page">
            <div
                className={`auth_card ${
                    isSignUp ? "signup_active" : ""
                }`}
            >
                <div className="auth_forms">
                    <section className="auth_panel auth_signin_panel">
                        <SignInForm onSwitch={showSignUp} />
                    </section>

                    <section className="auth_panel auth_signup_panel">
                        <SignUpForm onSwitch={showSignIn} />
                    </section>
                </div>

                <AuthOverlay isSignUp={isSignUp} />
            </div>
        </main>
    );
};

export default AuthPage;