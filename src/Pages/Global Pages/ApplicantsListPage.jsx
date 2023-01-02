//Importing hooks
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//Importing firebase and firebase methods
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//Importing components
import RemindersBar from "../../Components/Global Components/RemindersBar";
import ApplicantProfile from "../../Components/Small components/applicantProfileItemApplicantsListPage";

export default function ApplicantsListPage() {
  //Fetching data from firebase
  const [applicants, setApplicants] = useState([]);
  const collectionRef = collection(db, "applicants");

  useEffect(() => {
    const getApplicants = async () => {
      const data = await getDocs(collectionRef);
      setApplicants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApplicants();
  }, []);

  //Setting navigation to create applicant page
  const navigate = useNavigate();
  const handleTransfer = () => {
    navigate("/createApplicantForm");
  };

  return (
    <>
      <div className="applicatns-page-content-wrapper page-content-wrapper">
        <RemindersBar />
        <div className="applicants-page-main-content">
          <FontAwesomeIcon
            icon={faPlus}
            className="applicants-page-plus-icon plus-icon"
            onClick={handleTransfer}
          />

          <div className="applicants-page-center">
            <div className="applicants-list-holder">
              {applicants.map((applicant) => (
                <ApplicantProfile applicant={applicant} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
