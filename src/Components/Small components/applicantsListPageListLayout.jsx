//Importing components
import ApplicantProfile from "../../Components/Small components/applicantProfileItemApplicantsListPage";

export default function ListLayout({ applicants }) {
  const Applicants = applicants;
  return (
    <div className="applicants-list-holder">
      {Applicants.lenght == 0
        ? "There is nothing to show, try adding a reminder"
        : applicants.map((applicant) => (
            <ApplicantProfile applicant={applicant} key={applicant.id} />
          ))}
    </div>
  );
}
