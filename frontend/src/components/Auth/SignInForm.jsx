import React, { useState } from "react";

const SignInForm = ({ onSwitch }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Backend login API will be connected here later.
    };

    return (
        <div className="auth_form_wrapper">
            <div className="auth_form_heading">
                <span className="auth_brand">LUXORA</span>
                <h2>Sign in</h2>
                <p>Welcome back. Please enter your details.</p>
            </div>

            <form className="auth_form" onSubmit={handleSubmit}>
                <div className="auth_input_group">
                    <label htmlFor="signin-email">Email address</label>

                    <input
                        id="signin-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="auth_input_group">
                    <label htmlFor="signin-password">Password</label>

                    <input
                        id="signin-password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                    />
                </div>

                <div className="auth_form_options">
                    <label className="remember_option">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                        />

                        <span>Keep me signed in</span>
                    </label>

                    <button
                        type="button"
                        className="forgot_password_button"
                    >
                        Forgot password?
                    </button>
                </div>

                <button type="submit" className="auth_submit_button">
                    Sign in
                </button>
            </form>

            <p className="auth_switch_text">
                New to LUXORA?

                <button
                    type="button"
                    className="auth_switch_button"
                    onClick={onSwitch}
                >
                    Create an account
                </button>
            </p>
        </div>
    );
};

export default SignInForm;