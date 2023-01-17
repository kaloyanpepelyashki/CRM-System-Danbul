import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function CreateApplicantFormPage() {
  const collectionRef = collection(db, "applicants");

  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [start, setStart] = useState("");
  //"DTE" stands for "Desired type of education"
  const [dte, setDET] = useState("");

  const handleCommit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collectionRef, {
        name: name,
        telNumber: number,
        email: email,
        OnBoardingstart: start,
        DesiredTypeOfEducation: dte,
      });
    } catch (err) {
      console.error("The data sending was impossible due to:", err);
    }
  };
  return (
    <>
      <div className="create-applicant-form-page-container">
        <div className="create-applicant-form-holder">
          <form className="create-applicant-form">
            {/* //<--- -- Personal Data part -- --->  */}
            <div className="create-applicant-form-personal-data">
              <div className="applicant-form-personal-left-side">
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
              <h2 className="applicant-form-heading">Education</h2>
              <div
                onChange={(event) => {
                  setDET(event.target.value);
                }}
                className="applicant-form-items-flex"
              >
                <div className="applicant-form-item" value="Ap Degree">
                  <p className="applicant-form-item-heading">AP Degree</p>
                </div>
                <div className="applicant-form-item">
                  <p className="applicant-form-item-heading">Top-up Degree</p>
                </div>
                <div className="applicant-form-item">
                  <p className="applicant-form-item-heading">
                    Bachelor's Degree
                  </p>
                </div>
              </div>
              <select className="applicant-form-select">
                <option value="Automotive Technology">
                  Automotive Technology
                </option>
                <option value="Branding and Marketing Management">
                  Branding and Marketing Management
                </option>
                <option value="Comerce Management">
                  Comassable Management
                </option>
                <option value="Computer Science">Computer Science</option>
              </select>

              <select
                className="applicant-form-select"
                placeholder="University"
              >
                <option value="Dania Academy">Dania Academy</option>
                <option value="VIA University College">
                  VIA University College
                </option>
                <option value="Business Academy Aarhus">
                  Business Academy Aarhus
                </option>
                <option value="International Business Academy">
                  International Business Academy
                </option>
              </select>
              <input
                type="number"
                className="applicant-form-personal-right-side add-english-hours"
                placeholder="Add English Hours"
              />
            </div>
            <div className="language-certif-data">
              <h2 className="applicant-form-heading">English Certificate</h2>
              <div className="applicant-form-items-flex applicant-form-flex-2">
                <div className="applicant-form-item" value="Ap Degree">
                  <p className="applicant-form-item-heading">Needs OPT</p>
                </div>
                <div className="applicant-form-item" value="Ap Degree">
                  <p className="applicant-form-item-heading">Passed OPT</p>
                </div>
                <div className="applicant-form-item" value="Ap Degree">
                  <p className="applicant-form-item-heading">Has other</p>
                </div>
                <div className="applicant-form-item" value="Ap Degree">
                  <p className="applicant-form-item-heading">Needs other</p>
                </div>
              </div>
            </div>
            <button onClick={handleCommit}>Commit</button>
          </form>
        </div>
      </div>
    </>
  );
}
