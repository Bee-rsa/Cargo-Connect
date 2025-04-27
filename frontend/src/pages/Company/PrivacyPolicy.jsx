import React from 'react';

const Policy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-gray-100">

      <div className="container mx-auto px-4 py-12 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Updated Table of Contents */}
        <nav className="md:col-span-1 sticky top-16 h-auto shadow-lg rounded-lg p-4 max-h-screen overflow-y-auto border-2 bg-gray-200 border-custom-blue font-poppins">
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 pb-2">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#information" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">1. Information We Collect</a></li>
            <li><a href="#usage" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">2. How We Use Information</a></li>
            <li><a href="#legal-basis" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">3. Legal Basis for Processing</a></li>
            <li><a href="#disclosure" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">4. Information Disclosure</a></li>
            <li><a href="#international" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">5. International Transfers</a></li>
            <li><a href="#security" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">6. Data Security</a></li>
            <li><a href="#retention" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">7. Data Retention</a></li>
            <li><a href="#rights" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">8. Your Rights</a></li>
            <li><a href="#cookies" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">9. Cookies & Tracking</a></li>
            <li><a href="#third-party" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">10. Third-Party Services</a></li>
            <li><a href="#children" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">11. Children&apos;s Privacy</a></li>
            <li><a href="#changes" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">12. Policy Changes</a></li>
            <li><a href="#contact" className="text-black hover:no-underline hover:text-custom-blue transition duration-200 font-poppins">13. Contact Us</a></li>
          </ul>
        </nav>

        {/* Enhanced Main Content */}
        <div className="md:col-span-2 max-h-screen overflow-y-auto pr-4">
          <h1 className="text-3xl font-bold mb-6 font-poppins">Privacy Policy for Cargo Connect</h1>
          <p className="mb-4"><strong>Effective Date:</strong> [26 November 2024]</p>
          <p className="mb-4">
            Cargo Connect (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates in compliance with the Protection of Personal Information Act (POPIA) and other applicable data protection laws. This Privacy Policy governs the processing of personal information through our digital platforms and services.
          </p>

          <h2 id="information" className="text-2xl font-bold mb-4 mt-8 font-poppins">1. Information We Collect</h2>
          <p className="mb-4">
            We collect various types of information to provide and improve our services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Identity Data:</strong> Full name, government ID numbers (where required), date of birth</li>
            <li><strong>Contact Data:</strong> Email, phone number, physical address, business registration details</li>
            <li><strong>Financial Data:</strong> Bank account details, payment card information, transaction history</li>
            <li><strong>Technical Data:</strong> IP addresses, device information, browser type, login data</li>
            <li><strong>Usage Data:</strong> Service interaction patterns, preferences, feedback</li>
            <li><strong>Location Data:</strong> GPS data from mobile devices, IP-based location information</li>
            <li><strong>Special Categories:</strong> Biometric data for identity verification (where applicable)</li>
          </ul>

          <h2 id="usage" className="text-2xl font-bold mb-4 mt-8 font-poppins">2. How We Use Information</h2>
          <p className="mb-4">
            We process personal information for the following lawful purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service provision and account management</li>
            <li>Fraud prevention and security monitoring</li>
            <li>Regulatory compliance and legal obligations</li>
            <li>Business analytics and service improvement</li>
            <li>Personalized marketing (with opt-out options)</li>
            <li>Dispute resolution and customer support</li>
          </ul>

          <h2 id="legal-basis" className="text-2xl font-bold mb-4 mt-8 font-poppins">3. Legal Basis for Processing</h2>
          <p className="mb-4">
            We rely on the following legal grounds for processing personal data:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Contractual Necessity:</strong> Processing required to fulfill service agreements</li>
            <li><strong>Legal Obligation:</strong> Compliance with financial, tax, and transportation regulations</li>
            <li><strong>Legitimate Interest:</strong> Business operations, fraud prevention, and service improvement</li>
            <li><strong>Consent:</strong> For optional processing like marketing communications</li>
          </ul>

          <h2 id="disclosure" className="text-2xl font-bold mb-4 mt-8 font-poppins">4. Information Disclosure</h2>
          <p className="mb-4">
            We may disclose information to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Verified logistics partners for service fulfillment</li>
            <li>Payment processors and financial institutions</li>
            <li>Government authorities as required by law</li>
            <li>Professional advisors (lawyers, auditors)</li>
            <li>Business transferees in mergers/acquisitions</li>
          </ul>
          <p className="mb-4">
            All third-party disclosures are governed by strict data processing agreements.
          </p>

          <h2 id="international" className="text-2xl font-bold mb-4 mt-8 font-poppins">5. International Data Transfers</h2>
          <p className="mb-4">
            Data may be transferred to and processed in countries outside South Africa. We implement:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Standard contractual clauses</li>
            <li>Adequacy decisions where applicable</li>
            <li>Additional safeguards for sensitive data</li>
          </ul>

          <h2 id="security" className="text-2xl font-bold mb-4 mt-8 font-poppins">6. Data Security</h2>
          <p className="mb-4">
            We implement enterprise-grade security measures:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>256-bit SSL encryption for data in transit</li>
            <li>AES-256 encryption for data at rest</li>
            <li>Regular security audits and penetration testing</li>
            <li>Multi-factor authentication for system access</li>
            <li>Strict access controls and monitoring</li>
          </ul>
          <p className="mb-4">
            Despite these measures, absolute security cannot be guaranteed. Users must protect their account credentials.
          </p>

          <h2 id="retention" className="text-2xl font-bold mb-4 mt-8 font-poppins">7. Data Retention</h2>
          <p className="mb-4">
            We retain personal data only as long as necessary:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Active accounts: Until deletion request</li>
            <li>Financial records: 5 years (per tax laws)</li>
            <li>Transaction data: 3 years post-service</li>
            <li>Marketing data: Until consent withdrawal</li>
          </ul>

          <h2 id="rights" className="text-2xl font-bold mb-4 mt-8 font-poppins">8. Your Rights</h2>
          <p className="mb-4">
            Under POPIA and other regulations, you have rights to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Object to processing</li>
            <li>Request deletion (with exceptions)</li>
            <li>Withdraw consent</li>
            <li>Lodge complaints with regulators</li>
          </ul>
          <p className="mb-4">
            Requests must be submitted in writing to our Information Officer.
          </p>

          <h2 id="cookies" className="text-2xl font-bold mb-4 mt-8 font-poppins">9. Cookies & Tracking</h2>
          <p className="mb-4">
            We use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential cookies for platform functionality</li>
            <li>Analytics cookies (Google Analytics)</li>
            <li>Advertising cookies (with consent)</li>
          </ul>
          <p className="mb-4">
            Users can manage preferences via browser settings.
          </p>

          <h2 id="third-party" className="text-2xl font-bold mb-4 mt-8 font-poppins">10. Third-Party Services</h2>
          <p className="mb-4">
            Our platform integrates with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Payment processors (PayGate, PayPal)</li>
            <li>Mapping services (Google Maps)</li>
            <li>Analytics providers</li>
          </ul>
          <p className="mb-4">
            These services have their own privacy policies.
          </p>

          <h2 id="children" className="text-2xl font-bold mb-4 mt-8 font-poppins">11. Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our services are not directed at children under 18. We do not knowingly collect data from minors without parental consent.
          </p>

          <h2 id="changes" className="text-2xl font-bold mb-4 mt-8 font-poppins">12. Policy Changes</h2>
          <p className="mb-4">
            We will notify users of material changes via:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email notifications</li>
            <li>Platform announcements</li>
            <li>Updated effective dates</li>
          </ul>

          <h2 id="contact" className="text-2xl font-bold mb-4 mt-8 font-poppins">13. Contact Us</h2>
          <p className="mb-4">
            <strong>Information Officer:</strong> [Name]<br />
            <strong>Physical Address:</strong> [Registered Address]<br />
            <strong>Email:</strong> privacy@cargoconnect.com<br />
            <strong>Phone:</strong> [Official Contact Number]<br />
            <strong>POPIA Registration Number:</strong> [If applicable]
          </p>
        </div>
      </div>

    </div>
  );
};

export default Policy;