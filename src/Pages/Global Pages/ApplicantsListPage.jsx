//Importing React router hooks
import { useParams } from "react-router-dom";

//Importin React hooks
import { useState, useEffect } from "react";

//Importing firebase and firebase methods
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing components
import RemindersBar from "../../Components/Global Components/RemindersBar";
import ApplicantListPageMainContent from "../../Components/Small components/applicantsListPageMainContent";
import NavBar from "../../Components/Global Components/NavigationBar";

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

  const params = useParams();
  const currentProjectId = params.projectId;

  return (
    <>
      <NavBar />
      <div className="applicatns-page-content-wrapper page-content-wrapper">
        <RemindersBar />
        <ApplicantListPageMainContent
          projectId={currentProjectId}
          applicants={applicants}
        />
      </div>
    </>
  );
}
