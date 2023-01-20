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
  const [uni, setUni] = useState("");
  const [program, setProgram] = useState("");

  const handleCommit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collectionRef, {
        name: name,
        telNumber: number,
        email: email,
        OnBoardingstart: start,
        DesiredTypeOfEducation: dte,
        university: uni,
        StudyProgram: program,
      });
    } catch (err) {
      console.error("The data sending was impossible due to:", err);
    }
  };

  const [choiceProgram, setChoiceProgram] = useState(0);
  const [choiceENGCert, setChoiceENGCert] = useState(0);

  const setProgramColor = (index) => {
    setChoiceProgram(index);
  };
  const setCertificateColor = (index) => {
    setChoiceENGCert(index);
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
                <option
                  onClick={() => setProgramColor(1)}
                  className={
                    choiceProgram === 1
                      ? "applicant-form-item applicant-form-item-active"
                      : "applicant-form-item"
                  }
                  value="Ap Degree"
                >
                  <p className="applicant-form-item-heading">AP Degree</p>
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
                  <p className="applicant-form-item-heading">Top-up Degree</p>
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
                  <p className="applicant-form-item-heading">
                    Bachelor's Degree
                  </p>
                </option>
              </div>

              <select
                onChange={(event) => {
                  setProgram(event.target.value);
                }}
                className="applicant-form-select"
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
              <h2 className="applicant-form-heading">English Certificate</h2>
              <div className="applicant-form-items-flex applicant-form-flex-2">
                <option
                  onClick={() => setCertificateColor(1)}
                  className={
                    choiceENGCert === 1
                      ? "applicant-form-item-active applicant-form-item"
                      : "applicant-form-item"
                  }
                  value="Ap Degree"
                >
                  <p className="applicant-form-item-heading">Needs OPT</p>
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
                  <p className="applicant-form-item-heading">Passed OPT</p>
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
                  <p className="applicant-form-item-heading">Has other</p>
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
                  <p className="applicant-form-item-heading">Needs others</p>
                </option>
              </div>
            </div>
            <button className="commit-button" onClick={handleCommit}>
              Commit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
