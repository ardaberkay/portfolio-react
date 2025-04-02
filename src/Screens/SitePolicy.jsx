import React from "react";
import "./SitePolicy.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

const SitePolicy = () => {
  return (
    <div className="site-policy">
      <Link to="/" className='go-back'><FiArrowLeft className="back-icon" />Return Back</Link>
      <h1>Privacy Policy</h1>
      <p>
        <h4>Last Updated: 04.02.2025</h4> <br />
        Welcome to Arda Berkay Bağım’s Portfolio Website. This
        Privacy Policy explains how I collect, use, and protect your information
        when you visit this Website.
        <br /><br />
        <h2>1. Information Collected</h2>
        <br />
        <h4>I may collect the following types of information:</h4>
        <br />
        Personal Information: When you submit your email via the subscription
        form or use the contact form, I collect your name and email address.
        <br />
        Automatically Collected Data: This Website may collect anonymized data
        such as IP addresses, browser type, and pages visited for analytics
        purposes.
        <br /><br />
        <h2>2. How Your Information is Used</h2>
        <br />
        Your information is used only for the following purposes:
        <br />
        To send you updates or newsletters if you have subscribed.
        <br />
        To respond to inquiries submitted through the contact form.
        <br />
        To improve the Website's functionality and user experience.
        <br /><br />
        <h2>3. Data Protection</h2>
        <br />
        I take reasonable security measures to protect your data from
        unauthorized access, disclosure, or misuse. However, no method of
        transmission over the internet is 100% secure.
        <br /><br />
        <h2>4. Third-Party Services</h2>
        <br />
        This Website may use third-party services (such as Google Analytics) to
        analyze traffic and improve user experience. These services have their
        own privacy policies, which you should review.
        <br /><br />
        <h2>5. Cookies</h2>
        <br />
        This Website may use cookies to enhance your experience. You can disable
        cookies through your browser settings if you prefer.
        <br /><br />
        <h2>6. Your Rights</h2>
        <br />
        You can request access to or deletion of your personal data at any time.
        <br /><br />
        <h2>7. Changes to This Policy</h2>
        <br />
        I reserve the right to update this Privacy Policy at any time. Changes
        will be posted on this page with an updated date.
        <br /><br />
        <h2>8. Contact Information</h2>
        <br />
        If you have any questions regarding this Privacy Policy, please contact
        me at ardabeb@hotmail.com.
        <br />
        By using this Website, you acknowledge that you have read, understood,
        and agreed to this Privacy Policy.
        <br />
      </p>
    </div>
  );
};

export default SitePolicy;
