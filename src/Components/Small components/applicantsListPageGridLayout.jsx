//Importing components

import ApplicantCard from "./applicantProfileItemcardApplicantsListpage";

export default function GridLayout({ applicants }) {
  const Applicants = applicants;

  console.log(applicants);
  return (
    <>
      <div className="applicants-grid-center">
        <div className="applicants-grid-holder">
          {Applicants.lenght == 0
            ? "There is nothing to show, try adding a new candidate"
            : applicants.map((applicant) => (
                <div>
                  <ApplicantCard applicant={applicant} key={applicant.id} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
