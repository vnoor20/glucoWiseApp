import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-10 text-gray-800 pt-20">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy - GlucoWise</h1>
      <p>
        <strong>Effective Date:</strong> August 16, 2025
      </p>

      <p className="mt-4">
        At GlucoWise, your privacy is very important to us. This Privacy Policy
        explains how we collect, use, and safeguard your information when you
        use our application.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Data Collection</h2>
      <p>
        GlucoWise integrates with Apple HealthKit to provide health-related
        features. With your explicit consent, we may collect and store data such
        as:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Blood glucose readings</li>
        <li>Dietary and activity data</li>
        <li>Basic health metrics (age, weight, height, etc.)</li>
      </ul>
      <p className="mt-2">
        We also collect limited account information (such as name, email, and
        profile details) to personalize your experience. Data related to meals,
        activity logs, and progress may be securely stored in our database
        powered by Supabase.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Data Usage</h2>
      <p>
        The collected data is used solely to provide insights, personalized
        recommendations, and improve your experience with GlucoWise. We do not
        use your health data for advertising or sell it to third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Storage</h2>
      <p>
        Your health data remains stored securely on your device and, if you
        choose, in your iCloud account. Data stored on our servers (via
        Supabase) is encrypted and protected with industry-standard
        security measures. Sensitive HealthKit data is never uploaded without
        your explicit permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Sharing of Information
      </h2>
      <p>
        GlucoWise does not share your personal or health data with third
        parties. If data export is enabled by you, it will only be shared with
        your chosen healthcare providers or exported manually by you.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p>
        You have full control over your data. You can revoke HealthKit
        permissions, request deletion of your account data stored in Supabase,
        or uninstall the app at any time to stop data collection.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Children’s Privacy</h2>
      <p>
        GlucoWise is not intended for use by individuals under the age of 13. We
        do not knowingly collect data from children. If we become aware that we
        have collected personal information from a child, we will take steps to
        delete it promptly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, you may
        contact us at:
      </p>
      <p className="mt-2 font-medium">support@glucowiseapp.com</p>
    </div>
  );
};

export default PrivacyPolicy;
