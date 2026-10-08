import React from "react";

const AuthOverlay = ({ isSignUp }) => {
    return (
        <div
            className={`auth_overlay ${
                isSignUp ? "auth_overlay_signup" : ""
            }`}
        >
            <div className="auth_overlay_inner">
                <div
                    className="overlay_content overlay_login"
                    aria-hidden={isSignUp}
                >
                    <span className="overlay_brand">LUXORA</span>

                    <h2>
                        Welcome <em>back.</em>
                    </h2>

                    <p>
                        Your stays, bookings and experiences are exactly
                        where you left them.
                    </p>
                </div>

                <div
                    className="overlay_content overlay_signup"
                    aria-hidden={!isSignUp}
                >
                    <span className="overlay_brand">LUXORA</span>

                    <h2>
                        Start your <em>journey.</em>
                    </h2>

                    <p>
                        Create your account and discover a more personal
                        hotel experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthOverlay;