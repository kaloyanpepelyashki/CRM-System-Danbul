//Importing components

import { useParams } from "react-router-dom";
import ApplicantCard from "./applicantProfileItemcardApplicantsListpage";

export default function GridLayout({ applicants, projectId }) {
  const Applicants = applicants;

  const params = useParams();
  const currentProjectId = params.projectId;

  const applicantsFiltered = Applicants.filter(
    (applicant) => applicant.ProjectId === currentProjectId
  );

  console.log(applicants);
  return (
    <>
      <div className="applicants-grid-center">
        <div className="applicants-grid-holder">
          {applicantsFiltered.lenght == 0
            ? "There is nothing to show, try adding a new candidate"
            : applicantsFiltered.map((applicant) => (
                <div>
                  <ApplicantCard applicant={applicant} key={applicant.id} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
