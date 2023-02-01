//Importing React hooks
import { useState } from "react";

//Importing React router hooks
import { useParams } from "react-router-dom";

//Importing firebase and firebase methods
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing components
import PopUpMessage from "../../Components/Small components/pop-upMessageComponent";

export default function CreateApplicantFormPage() {
  const params = useParams();
  const collectionRef = collection(db, "applicants");
  //Getting the data from the input fields
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [start, setStart] = useState("");
  //"DTE" stands for "Desired type of education"
  const [dte, setDET] = useState("");
  const [uni, setUni] = useState("");
  const [program, setProgram] = useState("");

  const handleCommit = async (e) => {
    e.preventDefault();
    try {
      //Uploading the data in the database (using a firebas addDoc method)
      await addDoc(collectionRef, {
        name: name,
        telNumber: number,
        email: email,
        OnBoardingstart: start,
        DesiredTypeOfEducation: dte,
        university: uni,
        StudyProgram: program,
        ProjectId: params.projectId,

        //Closing the Pop-up message.
      }).then(() => setToggleUpUpdate(false));
    } catch (err) {
      console.error("The data sending was impossible due to:", err);
    }
  };

  //Marking up the activated box from the choice boxes on the page
  const [choiceProgram, setChoiceProgram] = useState(0);
  const [choiceENGCert, setChoiceENGCert] = useState(0);

  const setProgramColor = (index) => {
    setChoiceProgram(index);
  };
  const setCertificateColor = (index) => {
    setChoiceENGCert(index);
  };

  //Triggering the pop-up message
  const [toggleUpUpdate, setToggleUpUpdate] = useState(true);

  return (
    <>
      <div className="create-applicant-form-page-container">
        <div className="create-applicant-form-holder">
          <form className="create-applicant-form">
            {/* //<--- -- Personal Data part -- --->  */}

            <div className="create-applicant-form-personal-data">
              <div className="applicant-form-personal-left-side">
                <h2 className="applicant-form-heading font-heading">Personal data</h2>
                <input
                  type="text"
                  className="applicant-form-personal-field"
                  placeholder="Add full name of the applicant..."
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <input
                  type="number"
                  className="applicant-form-personal-field"
                  placeholder="Add telephone number..."
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                />
                <input
                  type="text"
                  className="applicant-form-personal-field"
                  placeholder="Add email address..."
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="applicant-form-personal-right-side">
                <div className="applicant-form-personal-right-side-empty"></div>
                <input
                  type="date"
                  className="applicant-form-personal-field"
                  placeholder="Date of start"
                  onChange={(event) => {
                    setStart(event.target.value);
                  }}
                />
              </div>
            </div>
            {/* //<--- -- Education Data part -- --->  */}
            <div className="applicant-form-education-data">
              <h2 className="applicant-form-heading font-heading">Education</h2>
              <div
                onChange={(event) => {
                  setDET(event.target.value);
                }}
                className="applicant-form-items-flex"
              >
                <option
                  onClick={() => setProgramColor(1)}
                  className={
                    choiceProgram === 1
                      ? "applicant-form-item applicant-form-item-active"
                      : "applicant-form-item"
                  }
                  value="Ap Degree"
                >
                  <p className="applicant-form-item-heading font-paragraph-bigger">AP Degree</p>
                </option>
                <option
                  onClick={() => setProgramColor(2)}
                  className={
                    choiceProgram === 2
                      ? "applicant-form-item applicant-form-item-active"
                      : "applicant-form-item"
                  }
                  value="Top-up Degree"
                >
                  <p className="applicant-form-item-heading font-paragraph-bigger">Top-up Degree</p>
                </option>
                <option
                  onClick={() => setProgramColor(3)}
                  className={
                    choiceProgram === 3
                      ? "applicant-form-item applicant-form-item-active"
                      : "applicant-form-item"
                  }
                  value="Bachelor degree"
                >
                  <p className="applicant-form-item-heading font-paragraph-bigger">
                    Bachelor's Degree
                  </p>
                </option>
              </div>

              <select
                onChange={(event) => {
                  setProgram(event.target.value);
                }}
                className="applicant-form-select font-paragraph"
              >
                <option value="AT">Automotive Technology</option>
                <option value="BMM">Branding and Marketing Management</option>
                <option value="CM">Comassable Management</option>
                <option value="CS">Computer Science</option>
              </select>

              <select
                className="applicant-form-select"
                placeholder="University"
                onChange={(event) => {
                  setUni(event.target.value);
                }}
              >
                <option value="DA">Dania Academy</option>
                <option value="VIA">VIA University College</option>
                <option value="BAA">Business Academy Aarhus</option>
                <option value="IBA">International Business Academy</option>
              </select>
              <input
                type="number"
                className="applicant-form-personal-right-side add-english-hours"
                placeholder="Add English Hours"
              />
            </div>
            <div className="language-certif-data">
              <h2 className="applicant-form-heading font-heading">English Certificate</h2>
              <div className="applicant-form-items-flex applicant-form-flex-2">
                <option
                  onClick={() => setCertificateColor()}
                  className={
                    choiceENGCert === 1
                      ? "applicant-form-item-active applicant-form-item"
                      : "applicant-form-item"
                  }
                  value="Ap Degree"
                >
                  <p className="applicant-form-item-heading font-paragraph-bigger">Needs OPT</p>
                </option>
                <option
                  onClick={() => setCertificateColor(2)}
                  className={
                    choiceENGCert === 2
                      ? "applicant-form-item-active applicant-form-item"
                      : "applicant-form-item"
                  }
                  value="Ap Degree"
                >
                  <p className="applicant-form-item-heading font-paragraph-bigger">Passed OPT</p>
                </option>
                <option
                  onClick={() => setCertificateColor(3)}
                  className={
                    choiceENGCert === 3
                      ? "applicant-form-item-active applicant-form-item"
                      : "applicant-form-item"
                  }
                  value="Ap Degree"
                >
                  <p className="applicant-form-item-heading font-paragraph-bigger">Has other</p>
                </option>
                <option
                  onClick={() => setCertificateColor(4)}
                  className={
                    choiceENGCert === 4
                      ? "applicant-form-item-active applicant-form-item"
                      : "applicant-form-item"
                  }
                  value="Ap Degree"
                >
                  <p className="applicant-form-item-heading font-paragraph-bigger">Needs others</p>
                </option> 
              </div>
            </div>

              {/* Final details data part */}

              <div className="final-details-data" >
               <h2 className="applicant-form-heading font-heading">Final details</h2>
                <div className="applicant-form-final-data-left-side">
                    <select
                      className="applicant-form-select font-paragraph font-paragraph">
                      <option value="DA">Dania Academy</option>
                      <option value="VIA">VIA University College</option>
                      <option value="BAA">Business Academy Aarhus</option>
                      <option value="IBA">International Business Academy</option>
                  </select>
                  <input
                    type="text"
                    className="applicant-form-final-data"
                    placeholder="Upload files..."/>
                    
                    <input
                    type="text"
                    className="applicant-form-final-data-math"
                    placeholder="Math B..."/>
                </div>
             
              <div className="applicant-form-final-data-right-side" >
              <div className="applicant-form-final-data-right-side-empty"></div>
              <input
                type="number"
                className="applicant-form-final-data-right-side GPA"
                placeholder="Predicted GPA"
              />
              <input
                type="number"
                className="applicant-form-final-data-right-side GPA"
                placeholder="Final GPA"
              />
              </div>
              </div>
            <div className="buttons-holder">
              <button
                className="commit-button font-paragraph-bigger"
                onClick={() => setToggleUpUpdate(true)}
              >
                Commit
              </button>
              <button
                onClick={() => setToggleUpUpdate(false)}
                className="cancel-button font-paragraph-bigger"
              >
                Cancel
              </button>
            </div>
            <PopUpMessage
              stateUpdate={setToggleUpUpdate}
              toggleUp={toggleUpUpdate}
            >
              <div className="popup-message-buttons-holder">
                <button className="commit-button2" onClick={handleCommit}>
                  Commit
                </button>
                <button
                  onClick={() => setToggleUpUpdate(false)}
                  className="cancel-button2"
                >
                  Cancel
                </button>
              </div>
            </PopUpMessage>
          </form>
        </div>
      </div>
    </>
  );
}
