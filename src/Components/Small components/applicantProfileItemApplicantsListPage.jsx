//Importing the Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect } from "react";

export default function ApplicantProfile({ applicant }) {
  const deleteApplicant = async (id) => {
    const applicantDoc = doc(db, "applicants", id);
    await deleteDoc(applicantDoc);
  };

  return (
    <>
      <div className="applicant-profile-item-outter">
        <div className="applicant-profile-item-inner">
          <img
            src="https://assets.citynavigator.nl/thumb/p3tsSJLLYpsERDYz8kA1puN81iy5OB_1v71l2zLtD-c/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9rdW1hLWl0Yy91cGxvYWRzL21lZGlhLzYxNmVjOWNjZGJjNjAvc2h1dHRlcnN0b2NrLWdlc3BpZWdlbGQuanBn.jpg"
            className="applicant-profile-item-picture"
          />
          <div className="applicant-profile-item-main-content-holder">
            <h4 className="applicant-profile-item-name">{applicant.name}</h4>
            <div className="applicant-profile-item-specifications-holder">
              <p className="applicant-profile-item-specification-item">
                MMD-BAA
              </p>
              <p className="applicant-profile-item-specification-item">Paid</p>
              <p className="applicant-profile-item-specification-item">
                12.12.2022
              </p>
            </div>
          </div>
          <div className="applicant-profile-item-icons-holder">
            <FontAwesomeIcon
              className="applicant-profile-item-icon"
              icon={faPenToSquare}
            />
            <p>
              <FontAwesomeIcon
                className="applicant-profile-item-icon"
                icon={faTrash}
                onClick={() => {
                  deleteApplicant(applicant.id);
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
