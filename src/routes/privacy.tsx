import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Local Biz Ninja" },
      { name: "description", content: "How Local Biz Ninja collects, uses, and protects your information." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated: July 14, 2026"
      sections={[
        {
          heading: "1. Information We Collect",
          body: "We collect information necessary to provide and operate the Local Biz Ninja platform. This includes account information such as your business name, email address, phone number, billing details, and login credentials; team member and contact information you add to your account; and data from linked platforms or integrations you choose to connect, which is required to execute automations such as scheduling, messaging, and reputation management. We also collect usage data and communications sent through the platform to deliver, support, and improve our services.",
        },
        {
          heading: "2. How Data Is Processed and Protected",
          body: (
            <>
              <p>
                Local Biz Ninja uses secure, industry-standard infrastructure to route, store, and process your communications and business data. To safeguard the personal and sensitive data we collect (including data accessed via third-party APIs), we implement robust technical, administrative, and physical security measures, including:
              </p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li>
                  <strong>Encryption in Transit:</strong> All sensitive data transmitted between your browser, our servers, and connected third-party platforms is encrypted using Secure Sockets Layer (SSL) and Transport Layer Security (TLS 1.2 or higher) protocols.
                </li>
                <li>
                  <strong>Encryption at Rest:</strong> Sensitive user data, authentication tokens, and credentials stored within our databases are encrypted using Advanced Encryption Standard (AES-256) encryption.
                </li>
                <li>
                  <strong>Access Control:</strong> Access to your data is strictly limited to authorized personnel who require it to operate, maintain, and improve the platform, enforced via strict access control policies and multi-factor authentication.
                </li>
              </ul>
              <p>
                We process data only to operate, maintain, and improve the platform, and to provide customer support. We do not sell, rent, or share your personal data, customer data, or sensitive integration data with third parties for their own marketing purposes.
              </p>
            </>
          ),
        },
        {
          heading: "3. Carrier Compliance for SMS",
          body: "By providing your mobile phone number and opting in to SMS features through Local Biz Ninja, you consent to receive text messages related to your account and services. Text messaging originator opt-in data and consent will absolutely not be shared with any third parties or affiliates under any circumstances. This includes mobile phone numbers, opt-in records, and any related consent metadata collected by Local Biz Ninja. We use SMS carriers solely to deliver the messages you initiate, and we comply with applicable messaging standards, A2P 10DLC requirements, and carrier guidelines. Message and data rates may apply. You may opt out at any time by replying STOP to any message.",
        },
        {
          heading: "4. Data Sharing & Disclosure",
          body: "We do not sell your data. We may share information only with trusted service providers who perform functions on our behalf, such as hosting, payment processing, and customer support, and only to the extent necessary to provide the platform. All sharing is subject to strict confidentiality agreements and data protection standards. We may also disclose information if required by law, to protect our rights, or to respond to a legal process.",
        },
        {
          heading: "5. Data Retention",
          body: "We retain your information for as long as your account is active or as needed to provide you with the platform and comply with legal obligations. You may request deletion of your account and associated data by contacting us at the email address below. Some data may be retained as required by law or for legitimate business purposes such as fraud prevention, billing records, or dispute resolution.",
        },
        {
          heading: "6. Your Privacy Choices",
          body: "You may access, update, or delete certain account information through your account settings. If you have questions about your data, wish to exercise privacy rights, or want to opt out of marketing communications, please contact us at support@localbizninja.com.",
        },
        {
          heading: "7. Changes to This Policy",
          body: "We may update this Privacy Policy from time to time. The most current version will always be posted on this page with the \"Last Updated\" date. We encourage you to review the policy periodically.",
        },
        {
          heading: "8. Contact Us",
          body: "Questions about this Privacy Policy may be sent to support@localbizninja.com.",
        },
      ]}
    />
  ),
});
