import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/Common/userNavbar";

const TermsAndConditionsTender = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (accepted) {
      navigate("/tenders");
    } else {
      alert("Please accept the terms and conditions before continuing.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-white">
      <UserNavbar />
      <div className="max-w-3xl mx-auto font-poppins p-6 bg-white shadow-md rounded-lg mt-12">
        <h2 className="text-l text-custom-blue font-semibold mb-4">
          Tender Submission Terms & Conditions
        </h2>

        <div className="space-y-3 text-gray-800 text-sm">
          <p>
            Cargo Connect provides a neutral platform for registered companies to submit freight transportation tenders and receive quotes from independent logistics providers. We do not engage in freight operations or act as a freight carrier.
          </p>

          <p>
            Cargo Connect assumes no responsibility for the accuracy, validity, performance, or outcome of any quotes, agreements, or shipments arranged through our platform. All negotiations, pricing, and contracts are handled solely between the business submitting the tender and the selected logistics company.
          </p>

          <p>
            By using this feature, you acknowledge that Cargo Connect is not liable for any financial loss, cargo damage, shipping delays, theft, contract disputes, or failure to deliver goods. You understand that all logistics operations are managed entirely by third-party companies, and your interactions with them are at your own risk.
          </p>

          <p>
            As the submitting company, you agree to provide truthful, complete, and up-to-date information about your cargo, delivery requirements, and company identity. You are solely responsible for vetting and selecting a suitable logistics provider and ensuring your operations comply with all relevant local and international transportation laws.
          </p>

          <p>
            Any agreements made after receiving quotes are independent contracts between your business and the service provider. Cargo Connect does not intervene in negotiations, payment processing, or dispute resolution.
          </p>

          <p>
            Tender submissions are limited to verified, registered businesses. Unauthorized use, fraudulent postings, or misrepresentation may result in account suspension and legal consequences.
          </p>

          <p>
            If you do not agree with any part of these terms, you should not proceed with submitting a transportation tender.
          </p>
        </div>

        <div className="mt-6">
          <label className="flex items-start gap-3 mt-6 bg-gray-100 p-4 rounded-md shadow-sm border border-gray-300 hover:border-custom-blue transition-all duration-300 cursor-pointer">
  <input
    type="checkbox"
    checked={accepted}
    onChange={(e) => setAccepted(e.target.checked)}
    className="w-5 h-5 text-blue-600 accent-custom-blue mt-1"
  />
  <span className="text-sm text-gray-800 leading-relaxed">
    I accept the <span className="font-semibold text-custom-blue">Terms & Conditions</span> for submitting a transportation tender.
  </span>
</label>


          <button
            onClick={handleContinue}
            className={`mt-4 w-full px-6 py-2 rounded-md text-white ${
              accepted
                ? "bg-blue-950 hover:bg-custom-blue"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!accepted}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsTender;
