//Importing react hooks
import { useNavigate, useParams } from "react-router-dom";

//Importing components
import ApplicantProfile from "../../Components/Small components/applicantProfileItemApplicantsListPage";

export default function ListLayout({ applicants }) {
  const navigate = useNavigate();
  const Applicants = applicants;

  const params = useParams();
  const currentProjectId = params.projectId;

  const applicantsFiltered = Applicants.filter(
    (applicant) => applicant.ProjectId === currentProjectId
  );

  return (
    <div className="applicants-list-holder">
      {applicantsFiltered.lenght == 0
        ? "There is nothing to show, try creating a new record..."
        : applicantsFiltered.map((applicant) => (
            <ApplicantProfile applicant={applicant} key={applicant.id} />
          ))}
    </div>
  );
}
