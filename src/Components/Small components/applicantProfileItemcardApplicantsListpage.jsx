export default function ApplicantCard({ applicant }) {
  return (
    <>
      <div className="applicant-card-outter">
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
            <p className="applicant-card-applicant-program">MMD</p>
            <div className="applicant-card-onboarding-specific">
              <p className="applicant-card-payment">Contributions</p>
              <p className="applicant-card-date">22.09.2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
