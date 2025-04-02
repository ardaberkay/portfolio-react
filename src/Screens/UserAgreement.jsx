import React from "react";
import "./UserAgreement.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

const UserAgreement = () => {
  return (
    <div className="user-agreement">
      <Link to="/" className='go-back'><FiArrowLeft className="back-icon" />Return Back</Link>
      <h1>Terms Of Service</h1>
      <p>
        <h4>Last Updated: 04.02.2025</h4> <br />
        Welcome to Arda Berkay Bagim’s Portfolio Website. By accessing or using
        this Website, you agree to be bound by the following Terms of Service.
        If you do not agree with any part of these Terms, please do not use this
        Website.
        <br />
        <br />
        <h2>1. Use of the Website</h2>
        <br />
        This Website is intended to showcase my portfolio and provide ways to
        contact me. You agree to use this Website lawfully and respectfully,
        without engaging in any malicious activities such as hacking, spamming,
        or unauthorized access.
        <br />
        <br />
        <h2>2. Email Subscription & Contact Form</h2>
        <br />
        When you submit your email via the subscription form, you consent to
        receiving occasional emails regarding updates, news, or other relevant
        content. You can unsubscribe at any time by following the unsubscribe
        link in the email. If you use the contact form, you agree to provide
        accurate and non-misleading information. Your submitted data will be
        used solely for communication purposes and will not be shared with third
        parties without your consent.
        <br />
        <br />
        <h2>3. Intellectual Property</h2>
        <br />
        All content, including but not limited to text, images, graphics, and
        design, is owned by Arda Berkay Bagim unless otherwise stated.
        Unauthorized reproduction, copying, or redistribution of any content is
        prohibited without written permission.
        <br />
        <br />
        <h2>4. Third-Party Links</h2>
        <br />
        This Website may contain links to third-party websites. I do not control
        or take responsibility for the content, privacy policies, or practices
        of these websites. Visiting third-party websites is at your own risk.
        <br />
        <br />
        <h2>5. Limitation of Liability</h2>
        <br />
        I am not responsible for any direct or indirect damages arising from
        your use of this Website. This Website is provided "as is" without any
        warranties of any kind.
        <br />
        <br />
        <h2>6. Changes to These Terms</h2>
        <br />
        I reserve the right to modify or update these Terms at any time. Any
        changes will be posted on this page with an updated date.
        <br />
        <br />
        <h2>7. Contact Information</h2>
        <br />
        For any questions regarding these Terms, please contact me at
        ardabeb@hotmail.com.
        <br />
        By using this Website, you acknowledge that you have read, understood,
        and agreed to these Terms of Service.
      </p>
    </div>
  );
};

export default UserAgreement;
