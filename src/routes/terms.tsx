import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions - Local Biz Ninja" },
      { name: "description", content: "The terms and conditions that govern your use of Local Biz Ninja." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      updated="Last updated: July 14, 2026"
      sections={[
        {
          heading: "1. License Grant & Restrictions",
          body: "Subject to these Terms, Local Biz Ninja grants you a limited, non-exclusive, non-transferable, revocable license to access and use the platform for your internal business purposes. You may not reproduce, duplicate, copy, sell, resell, reverse-engineer, decompile, disassemble, scrape, mine data from, or create derivative works based on the platform, its features, interfaces, layouts, workflows, or any underlying technology. You may not use the platform to develop, operate, or promote a competing product or service, or to benchmark, test, or evaluate the platform for competitive purposes without our prior written consent. All rights not expressly granted are reserved by Local Biz Ninja.",
        },
        {
          heading: "2. Limitation of Liability & Indemnification",
          body: (
            <>
              <p>
                The Local Biz Ninja platform and all related services are provided "as is" and "as available" without warranties of any kind, either express or implied. To the maximum extent permitted by law, Local Biz Ninja and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, missed calls, missed leads, communication downtime, reputational harm, or business interruption, arising out of or in connection with your use of or inability to use the platform. In no event shall our total liability exceed the amount paid by you to Local Biz Ninja in the twelve months preceding the event giving rise to liability.
              </p>
              <p className="mt-4">
                You agree to defend, indemnify, and hold harmless Local Biz Ninja from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the platform's communication features.
              </p>
            </>
          ),
        },
        {
          heading: "3. Acceptable Use, Carrier Regulations, & Marketing Compliance",
          body: "You are solely responsible for all communications initiated through the platform. By using Local Biz Ninja to send calls, text messages, emails, or other communications, you certify that you have obtained all necessary express written consents and permissions from each contact in compliance with applicable laws, including the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and all applicable anti-spam and consumer protection regulations. Furthermore, you agree to comply with all mobile carrier guidelines, including A2P 10DLC registration requirements. You assume 100% liability for any claims, carrier-imposed fines, penalties, or damages arising from your failure to obtain proper consent, your marketing practices, or non-compliance with carrier regulations. Local Biz Ninja may immediately suspend or terminate accounts used to send unlawful, harassing, misleading, or unsolicited communications.",
        },
        {
          heading: "4. Account Termination",
          body: "We reserve the right to suspend, restrict, or terminate your account, with or without notice, if we believe you are abusing the platform, violating these Terms, using the platform to harm others or our systems, or investigating, reverse-engineering, or copying the platform for competitive purposes. Upon termination, your right to use the platform will immediately cease, and you remain liable for any outstanding fees or damages incurred prior to termination. Sections of these Terms that by their nature should survive termination shall remain in effect.",
        },
        {
          heading: "5. Changes to These Terms",
          body: "We may update these Terms from time to time. The most current version will always be posted on this page with the \"Last Updated\" date. Continued use of the platform after any changes constitutes your acceptance of the revised Terms.",
        },
        {
          heading: "6. Contact Us",
          body: "Questions about these Terms may be sent to support@localbizninja.com.",
        },
      ]}
    />
  ),
});
