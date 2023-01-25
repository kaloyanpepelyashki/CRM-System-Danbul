//Importing react hooks
import { useNavigate } from "react-router-dom";

//Importing components
import ApplicantProfile from "../../Components/Small components/applicantProfileItemApplicantsListPage";

export default function ListLayout({ applicants }) {
  const navigate = useNavigate();
  const Applicants = applicants;

  const handleTransfer = () => {
    navigate("/applicantProfile");
  };
  return (
    <div className="applicants-list-holder">
      <button onClick={handleTransfer}>Go to applicant ApplicantProfile</button>
      {Applicants.lenght == 0
        ? "There is nothing to show, try adding a reminder"
        : applicants.map((applicant) => (
            <ApplicantProfile applicant={applicant} key={applicant.id} />
          ))}
    </div>
  );
}
