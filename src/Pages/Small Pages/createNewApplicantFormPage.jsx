import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function CreateApplicantFormPage() {
  const collectionRef = collection(db, "applicants");

  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  const handleCommit = async () => {
    try {
      await addDoc(collectionRef, {
        name: name,
        telNumber: number,
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
            <div className="create-applicant-form-first-part">
              <div className="create-applicant-form-first-part-left create-applicant-form-left">
                <input
                  type="text"
                  className="create-applicant-form-first-part-inut-field"
                  placeholder="Applicant's full name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}

                  
                />
                <input
                  type="number"
                  className="create-applicant-form-first-part-inut-field"
                  placeholder="Applicant's telephone number"
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                />
                <input
                  type="text"
                  className="create-applicant-form-first-part-inut-field"
                  placeholder="Applicant's email address"
                />
              </div>

              <input
                type="date"
                className="create-applicant-form-first-part-input-right"
                placeholder="Onboarding date"
              />
            </div>
            <div className="create-applicant-form-secon-part">
              <div className="create-applicant-form-first-part-left create-applicant-form-left">
                <select placeholder="Education type">
                  <option></option>
                  <option value="AP Degree">AP Degree</option>
                  <option value="Top-up Degree">Top-up Degree</option>
                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Masters Degree">Masters Degree</option>
                </select>
                <select>
                  <option></option>
                  <option value="MMD-BAA">Multi Media Design (BAAA)</option>
                  <option value="MB-BAA">Marketing and Business (BAAA)</option>
                </select>
                <select>
                  <option></option>
                  <option value="Has English Cerificate">Yes</option>
                  <option value="Does not have English Certificate">No</option>
                </select>
              </div>
            </div>
            <button onClick={handleCommit}>Commit Applicant</button>
          </form>
        </div>
      </div>
    </>
  );
}
