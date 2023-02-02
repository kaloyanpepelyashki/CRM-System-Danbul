import { useEffect, useState } from "react";

//Importing the React router hooks
import { useParams } from "react-router-dom";

//Importing firebase and firebase methods
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing components
import NavBar from "../../Components/Global Components/NavigationBar";
import RemindersBar from "../../Components/Global Components/RemindersBar";
import PercentageBoxComponent from "../../Components/Small components/percentageBoxHomePage";
import StatCard from "../../Components/Small components/StatCardsHomePage";

export default function HomePage() {
  const params = useParams();
  const currentProjectIdparams = params.projectId;
  const collectionRef = collection(db, "applicants");

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const q = query(collectionRef, orderBy("onBoardingDate"));
    onSnapshot(q, (snapshot) => {
      const applicantsRaw = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApplicants(applicantsRaw);
    });
  }, []);

  const applicantsFiltered = applicants.filter(
    (applicant) => applicant.ProjectId == currentProjectIdparams
  );
  console.log(applicants);
  console.log(applicantsFiltered);
  return (
    <>
      {/*  <---- |Page content starts here | ---->   */}
      <NavBar projectIdParams={currentProjectIdparams} />
      <div className="home-page-content-wrapper page-content-wrapper">
        <div className="home-page-main-content-wrapper">
          <RemindersBar />

          {/*  <---- | Main section starts here | ---->   */}

          {/* <==== */}
          <div className="home-page-main-content page-main-content">
            <div className="home-page-stat-cards-holder">
              <div className="home-page-stat-card-top-holder">
                <StatCard Color={"#01575C"} />
              </div>
              <div className="home-page-stat-cards-bottom-holder">
                <StatCard Color={"#59BA89"} />
                <StatCard Color={"#BCD98C"} />
                <StatCard Color={"#E1F396"} />
              </div>
            </div>
            <PercentageBoxComponent />
          </div>
          {/* <==== */}
        </div>
      </div>
    </>
  );
}
