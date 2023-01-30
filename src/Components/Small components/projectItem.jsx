//Importing React hooks
import { NavLink, useNavigate } from "react-router-dom";

//Importing firebase and firebase methods
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing the Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ProjectItem({ project }) {
  const navigate = useNavigate();
  const deleteProject = async (id) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
  };
  const projectId = project.projectId;

  const handleTransfer = (id) => {
    navigate(`/Dashboard/${id}`);
  };
  return (
    <div className="project-item-outter">
      <div className="project-item-inner">
        <NavLink
          className="project-item-outter"
          to={`/Dashboard/${projectId}`}
          state={{ projectID: projectId }}
        >
          <div className="project-item-icons-holder">
            <FontAwesomeIcon
              className="project-item-icon"
              icon={faTrash}
              onClick={() => {
                deleteProject(project.id);
              }}
            />
            <FontAwesomeIcon
              className="project-item-icon"
              icon={faPenToSquare}
            />
          </div>
          <p className="project-item-year">{project.YearOfCreation}</p>
          <p className="project-item-title">{project.title}</p>
          <p className="project-item-description">{project.description}</p>
        </NavLink>
      </div>
    </div>
  );
}
