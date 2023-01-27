//Importing components
import RemindersBar from "../../Components/Global Components/RemindersBar";

export default function ApplicantInProfilePage() {
  return (
    <>
    <div className="in-applicant-profile-page">
      <div className="in-applicant-profile-page-main-content-wrapper">
        <RemindersBar/>
        <div className="in-applicants-all-content-holder">
          <div className="in-applicants-page-inner-conntent">

          {/* <== Notes component ==>  */}

            <div className="in-applicants-page-notes-component">
              <div className="in-applicants-profile-page-notes-color"></div>
              <div className="in-applicants-profile-page-notes-items-holder">
                <div className="in-applicants-profile-page-note-item">
                  <p className="in-applicants-profile-page-note-text">Note</p>
                </div>
                <div className="in-applicants-profile-page-note-item">
                  <p className="in-applicants-profile-page-note-text">Note</p>
                </div>
                <div className="in-applicants-profile-page-note-item">
                  <p className="in-applicants-profile-page-note-text">Note</p>
                </div>
              </div>
            </div>
              <div className="in-applicants-profile-page-pic-holder">
              <img
              src="https://assets.citynavigator.nl/thumb/p3tsSJLLYpsERDYz8kA1puN81iy5OB_1v71l2zLtD-c/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9rdW1hLWl0Yy91cGxvYWRzL21lZGlhLzYxNmVjOWNjZGJjNjAvc2h1dHRlcnN0b2NrLWdlc3BpZWdlbGQuanBn.jpg" alt=""
              className="in-applicants-profile-pic"
              />
              </div>
              <div className="in-applicants-profile-page-information-holder-holder">
                <div className="in-applicants-profile-page-information-holder">
                  <p className="in-applicants-profile-page-information">Name:</p>
                  <p className="in-applicants-profile-page-information">Email:</p>
                  <p className="in-applicants-profile-page-information">Facebook profile:</p>
                  <p className="in-applicants-profile-page-information">Onboarding date start:</p>
                  <p className="in-applicants-profile-page-information">Phone:</p>
                  <p className="in-applicants-profile-page-information">Category:</p>
                  <p className="in-applicants-profile-page-information">Optagelse link:</p>
                  <p className="in-applicants-profile-page-information">Education:</p>
                  <p className="in-applicants-profile-page-information">English hours:</p>
                  <p className="in-applicants-profile-page-information">Math B:</p>
                  <p className="in-applicants-profile-page-information">English certificate:</p>
                  <p className="in-applicants-profile-page-information">Predicted GPA:</p>
                  <p className="in-applicants-profile-page-information">Final GPA:</p>
                  <p className="in-applicants-profile-page-information">1st Wished university:</p>
                  <p className="in-applicants-profile-page-information">1st Wished program:</p>
                  <p className="in-applicants-profile-page-information">Accepted at:</p>
                </div>
                <div className="in-applicants-profile-page-information-holder-white-part">
                  <p className="in-applicants-profile-page-information">Svetlin Pepkov</p>
                  <p className="in-applicants-profile-page-information">svetlin.pepkov@gmail.com</p>
                  <p className="in-applicants-profile-page-information">Facebook profile</p>
                  <p className="in-applicants-profile-page-information">01.01.2023</p>
                  <p className="in-applicants-profile-page-information">0877708063</p>
                  <p className="in-applicants-profile-page-information">-</p>
                  <p className="in-applicants-profile-page-information">https://opagelse.com</p>
                  <p className="in-applicants-profile-page-information">AP Degree</p>
                  <p className="in-applicants-profile-page-information">43</p>
                  <p className="in-applicants-profile-page-information">Yes</p>
                  <p className="in-applicants-profile-page-information">Oxford certificate</p>
                  <p className="in-applicants-profile-page-information">5.76</p>
                  <p className="in-applicants-profile-page-information">5.76</p>
                  <p className="in-applicants-profile-page-information">BAA</p>
                  <p className="in-applicants-profile-page-information">MMD</p>
                  <p className="in-applicants-profile-page-information">_</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
}
