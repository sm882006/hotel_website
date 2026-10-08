import React, { useState } from "react";

const SignUpForm = ({ onSwitch }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
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

        if (formData.password !== formData.confirmPassword) {
            return;
        }

        // Backend registration API will be connected here later.
    };

    return (
        <div className="auth_form_wrapper">
            <div className="auth_form_heading">
                <span className="auth_brand">LUXORA</span>
                <h2>Create account</h2>
                <p>Enter your details to begin your journey.</p>
            </div>

            <form className="auth_form" onSubmit={handleSubmit}>
                <div className="auth_input_group">
                    <label htmlFor="signup-name">Full name</label>

                    <input
                        id="signup-name"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="auth_input_group">
                    <label htmlFor="signup-email">Email address</label>

                    <input
                        id="signup-email"
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
                    <label htmlFor="signup-password">Password</label>

                    <input
                        id="signup-password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        autoComplete="new-password"
                        minLength="8"
                        required
                    />
                </div>

                <div className="auth_input_group">
                    <label htmlFor="signup-confirm-password">
                        Confirm password
                    </label>

                    <input
                        id="signup-confirm-password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Enter your password again"
                        autoComplete="new-password"
                        minLength="8"
                        required
                    />
                </div>

                <label className="terms_option">
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        required
                    />

                    <span>I agree to the terms and privacy policy</span>
                </label>

                <button type="submit" className="auth_submit_button">
                    Create account
                </button>
            </form>

            <p className="auth_switch_text">
                Already have an account?

                <button
                    type="button"
                    className="auth_switch_button"
                    onClick={onSwitch}
                >
                    Sign in
                </button>
            </p>
        </div>
    );
};

export default SignUpForm;