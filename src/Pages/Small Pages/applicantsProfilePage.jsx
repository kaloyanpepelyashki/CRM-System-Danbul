//Importing components
import RemindersBar from "../../Components/Global Components/RemindersBar";
import { useNavigate} from 'react-router-dom';


export default function ApplicantInProfilePage() {

    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    }
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
                  <p className="in-applicants-profile-page-note-text font-paragraph">Note</p>
                </div>
                <div className="in-applicants-profile-page-note-item">
                  <p className="in-applicants-profile-page-note-text font-paragraph">Note</p>
                </div>
                <div className="in-applicants-profile-page-note-item">
                  <p className="in-applicants-profile-page-note-text font-paragraph">Note</p>
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
                  <p className="in-applicants-profile-page-information font-paragraph">Name:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Email:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Facebook profile:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Onboarding date start:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Phone:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Category:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Optagelse link:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Education:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">English hours:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Math B:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">English certificate:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Predicted GPA:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Final GPA:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">1st Wished university:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">1st Wished program:</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Accepted at:</p>
                </div>
                <div className="in-applicants-profile-page-information-holder-white-part">
                  <p className="in-applicants-profile-page-information font-paragraph">Svetlin Pepkov</p>
                  <p className="in-applicants-profile-page-information font-paragraph">svetlin.pepkov@gmail.com</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Facebook profile</p>
                  <p className="in-applicants-profile-page-information font-paragraph">01.01.2023</p>
                  <p className="in-applicants-profile-page-information font-paragraph">0877708063</p>
                  <p className="in-applicants-profile-page-information font-paragraph">-</p>
                  <p className="in-applicants-profile-page-information font-paragraph">https://opagelse.com</p>
                  <p className="in-applicants-profile-page-information font-paragraph">AP Degree</p>
                  <p className="in-applicants-profile-page-information font-paragraph">43</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Yes</p>
                  <p className="in-applicants-profile-page-information font-paragraph">Oxford certificate</p>
                  <p className="in-applicants-profile-page-information font-paragraph">5.76</p>
                  <p className="in-applicants-profile-page-information font-paragraph">5.76</p>
                  <p className="in-applicants-profile-page-information font-paragraph">BAA</p>
                  <p className="in-applicants-profile-page-information font-paragraph">MMD</p>
                  <p className="in-applicants-profile-page-information font-paragraph">_</p>
                </div>	
              </div>
              <button className="in-applicants-profile-page-back-button font-paragraph" onClick={goBack}>Back</button>	
          </div>
        </div>
      </div>
    </div>
    </>
    );
}
