//Importing hooks
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//Importing firebase and firebase methods
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing components
import RemindersBar from "../../Components/Global Components/RemindersBar";
import ApplicantProfile from "../../Components/Small components/applicantProfileItemApplicantsListPage";
import ApplicantListPageMainContent from "../../Components/Small components/applicantsListPageMainContent";

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

  return (
    <>
      <div className="applicatns-page-content-wrapper page-content-wrapper">
        <RemindersBar />
        <ApplicantListPageMainContent applicants={applicants} />
      </div>
    </>
  );
}
