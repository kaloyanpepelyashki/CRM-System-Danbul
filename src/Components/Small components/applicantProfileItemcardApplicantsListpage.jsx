//Importing React router hooks
import { useNavigate } from "react-router-dom";

export default function ApplicantCard({ applicant }) {
  const navigate = useNavigate();

  const handleTransfer = (applicant) => {
    navigate("/applicantProfile", {
      state: {
        id: applicant.id,
        name: applicant.name,
        StudyProgram: applicant.StudyProgram,
        tel: applicant.telNumber,
        email: applicant.email,
        university: applicant.university,
        DET: applicant.DesiredTypeOfEducation,
        projectId: applicant.ProjectId,
        onBoardingDate: applicant.OnBoardingstart,
      },
    });
  };
  return (
    <>
      <div
        className="applicant-card-outter"
        onClick={() => handleTransfer(applicant)}
      >
        <div className="applicant-card-inner">
          <div className="applicant-card-top">
            <img
              src="https://assets.citynavigator.nl/thumb/p3tsSJLLYpsERDYz8kA1puN81iy5OB_1v71l2zLtD-c/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9rdW1hLWl0Yy91cGxvYWRzL21lZGlhLzYxNmVjOWNjZGJjNjAvc2h1dHRlcnN0b2NrLWdlc3BpZWdlbGQuanBn.jpg"
              className="applicant-card-image"
              alt="Profile picture of"
            />
            <p className="applicant-card-applicant-name">{applicant.name}</p>
          </div>
          <div className="applicant-card-bottom">
            <p className="applicant-card-applicant-program">
              {applicant.StudyProgram}
            </p>
            <div className="applicant-card-onboarding-specific">
              <p className="applicant-card-payment">Contributions</p>
              <p className="applicant-card-date">{applicant.onBoardingstart}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
