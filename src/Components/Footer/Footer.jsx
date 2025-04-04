import { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logoben.png";
import user from "../../assets/user_icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState("");


    const handleSubscribe = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Error: Please enter a valid email.");
            setTimeout(() => 3000);
            return;
        }

        const formData = new FormData();
        formData.append("access_key", "acdf42b7-0f11-44b3-a50c-6e962ab4fbfc");
        formData.append("email", email);
        formData.append("subject", "Yeni Abonelik");
        formData.append("message", `Yeni abone: ${email}`);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                alert("Successfully subscribed!");
                setEmail("");
                setTimeout(() => 3000);
            } else {
                alert(data.message || "Something went wrong.");
            }
        } catch (error) {
            alert("Error: Failed to subscribe.");
            console.error("Fetch error:", error);
        }
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="logo" />
                    <p>I'm a frontend developer from Istanbul/Turkey.</p>
                </div>
                <div className="footer-top-right">
                    <form onSubmit={handleSubscribe} className="footer-email-form">
                        <div className="footer-email-input">
                            <img src={user} alt="user-icon" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="footer-subscribe">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Arda Berkay Bağım</p>
                <div className="footer-bottom-right">
                    <Link to="/user-agreement" className="agreement">Terms of Services</Link>
                    <Link to="/site-policy" className="policy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
