import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <head>
        <title>Privacy Policy - GlucoWise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div className="container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> [Insert Date]</p>
        <p>
          At <strong>GlucoWise</strong>, your privacy is our priority. This Privacy Policy explains how we collect,
          use, protect, and share your information when you use our diabetes lifestyle management system. By using the
          GlucoWise app, you agree to the practices described below.
        </p>

        <h2>Data Collection</h2>
        <p>We collect both personal and non-personal information to provide and improve our services:</p>

        <h3>Account Information</h3>
        <ul>
          <li>Name, email address, and optional profile picture or other details provided during sign-up or login.</li>
        </ul>

        <h3>Health and Activity Data</h3>
        <ul>
          <li>Blood glucose readings logged by you or synced via HealthKit.</li>
          <li>Meals and dietary data, including glycemic index values.</li>
          <li>Physical activity synced from Apple HealthKit (e.g., steps, exercise duration).</li>
          <li>HBA1c levels and related metrics.</li>
        </ul>

        <h3>App Usage Data</h3>
        <ul>
          <li>Pages visited and features used.</li>
          <li>User patterns for meal logging, activity tracking, and progress monitoring.</li>
          <li>Task completion rates and feedback on recommendations.</li>
        </ul>

        <h2>HealthKit Integration</h2>
        <p>Glucowise uses Apple’s HealthKit framework to access and store your health data locally on your device and, with your permission, read or write data to the Health app. </p>
        <p>
          This data is used to power GlucoWise’s core features such as personalized meal recommendations, health trend insights, and goal tracking. For example, your glucose patterns and activity levels help generate smarter, safer food suggestions tailored to your current condition.
        </p>
        <p>
          We never use HealthKit data for advertising purposes, nor do we share it with third parties without your consent.
        </p>

        <h2>How We Use Your Data</h2>
        <ul>
          <li><strong>Authentication & Account Management:</strong> To create, secure, and manage your account.</li>
          <li><strong>Personalized Recommendations:</strong> Analyzing health and activity data (including HealthKit) to offer customized meal and lifestyle suggestions.</li>
          <li><strong>Service Improvement:</strong> Using aggregated, anonymized data to enhance features and performance.</li>
          <li><strong>Communication:</strong> Sending relevant tips, critical health alerts, or updates (opt-out options available).</li>
        </ul>

        <h2>Data Security Measures</h2>
        <ul>
          <li><strong>Encryption:</strong> All user data is encrypted in transit and at rest.</li>
          <li><strong>Secure Authentication:</strong> Password and token-based login security.</li>
          <li><strong>Protected Storage:</strong> Photos and personal records stored using secure cloud standards.</li>
          <li><strong>Supabase:</strong> Secure authentication, authorization, and database protection.</li>
        </ul>

        <h2>Use of Device Capabilities</h2>
        <ul>
          <li><strong>Camera:</strong> To take a profile picture directly within the app.</li>
          <li><strong>Photo Library:</strong> To optionally select images from your device.</li>
          <li><strong>HealthKit Access:</strong> To read fitness and health metrics for enhanced tracking and meal insights.</li>
          <li><strong>Permission Control:</strong> You can modify app permissions at any time in your iOS settings.</li>
        </ul>

        <h2>Data Sharing and Third-Party Services</h2>
        <p>We do <strong>not</strong> sell or trade your data. Limited sharing with trusted services includes:</p>
        <ul>
          <li><strong>Supabase:</strong> For authentication, real-time data sync, and secure storage.</li>
          <li><strong>Generative AI Models:</strong> Used to generate meal suggestions and glucose forecasts based on your health inputs.</li>
          <li><strong>Analytics Services:</strong> Aggregated, anonymized behavior analytics for feature refinement.</li>
        </ul>

        <h2>Compliance with Data Protection Laws</h2>
        <ul>
          <li><strong>GDPR (EU):</strong> You can request access, correction, or deletion of your personal data at any time.</li>
          <li><strong>CCPA (California):</strong> Right to know, delete, or opt out of data sharing as applicable.</li>
        </ul>

        <h2>Your Rights and Choices</h2>
        <ul>
          <li><strong>Access & Update:</strong> Modify your profile and health data via app settings.</li>
          <li><strong>Data Portability:</strong> Export your data in structured formats.</li>
          <li><strong>Delete Account:</strong> Request permanent account deletion through our support team.</li>
        </ul>

{/*         <p>Contact us at: <a href="mailto:support@glucowise.com">support@glucowise.com</a></p> */}

        <footer>&copy; 2025 GlucoWise. All rights reserved.</footer>
      </div>

      <style jsx>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: #f9f9f9;
          color: #333;
          margin: 0;
          padding: 0 15px;
          line-height: 1.6;
        }

        .container {
          max-width: 900px;
          margin: 40px auto;
          background: #fff;
          padding: 30px 40px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding-top: 100px; 
        }

        h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5em;
          color: #6cab9d;
        }

        h2 {
          font-size: 1.5rem;
          margin-top: 1.8em;
          margin-bottom: 0.5em;
          color: #6cab9d;
        }

        h3 {
          font-size: 1.2rem;
          margin-top: 1.4em;
          color: #6cab9d;
        }

        p,
        ul {
          font-size: 1rem;
          margin-bottom: 1em;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 0.5em;
        }

        footer {
          margin-top: 50px;
          font-size: 0.9rem;
          color: #666;
          text-align: center;
        }

        a {
          color: #2a7ade;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicy;
