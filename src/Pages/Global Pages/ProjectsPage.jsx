//Importing React hooks
import { useEffect, useNavigate, useState } from "react";

//Importing firebase and firebase methods
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//Importing components
import CreateNewProjectCard from "../../Components/Small components/createNewProject";
import ProjectItem from "../../Components/Small components/projectItem";

export default function ProjectsPage() {
  const collectionRef = collection(db, "projects");

  const [projects, setProjects] = useState([]);

  const [toggleUpdate, setToggleUpdate] = useState(false);
  //Fetching the date from firebase with "on snapshot method"
  useEffect(() => {
    const q = query(collectionRef, orderBy("title"));
    onSnapshot(q, (snapshot) => {
      const projectsI = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsI);
      console.log(projectsI);
    });
  }, []);

  console.log(projects);
  return (
    <>
      {/*  <---- |Page content starts here | ---->   */}

      <div className="projects-page-content-wrapper page-content-wrapper">
        <div className="projects-page-main-content-wrapper">
          {/*  <---- | Main section starts here | ---->   */}

          <div className="projects-page-main-content page-main-content">
            <div className="projects-page-top-bar">
              <FontAwesomeIcon
                icon={faPlus}
                className="plus-icon"
                onClick={() => setToggleUpdate(true)}
              />
            </div>
            <div className="project-page-page-center">
              <div className="projects-page-projects-items-holder">
                <CreateNewProjectCard
                  toggleUp={toggleUpdate}
                  stateUpdate={setToggleUpdate}
                />
                {projects.map((project) => (
                  <ProjectItem project={project} key={project.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
