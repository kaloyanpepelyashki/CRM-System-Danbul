//importing React hooks
import { useEffect, useNavigate, useState } from "react";

//Importing components
import RemindersBar from "../../Components/Global Components/RemindersBar";
import ProjectItem from "../../Components/Small components/projectItem";

//Importing firebase and firebase methids
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function ProjectsPage() {
  const collectionRef = collection(db, "projects");

  const [projects, setProjects] = useState([]);
  //Fetching the date from firebase with "on snapshot method"
  useEffect(() => {
    const q = query(collectionRef, orderBy("CreatedAt", "year"));
    onSnapshot(q, (snapshot) => {
      const projects = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    setProjects(projects);
    console.log(projects);
  }, []);
  return (
    <>
      {/*  <---- |Page content starts here | ---->   */}

      <div className="projects-page-content-wrapper page-content-wrapper">
        <div className="projects-page-main-content-wrapper">
          <RemindersBar />

          {/*  <---- | Main section starts here | ---->   */}

          <div className="projects-page-main-content page-main-content">
            <div className="project-page-page-center">
              <div className="projects-page-projects-items-holder">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
