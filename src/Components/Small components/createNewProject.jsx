//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//importing React hooks
import { useState } from "react";

//Importing firebase and firebase methids
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing toast components from react Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateNewProjectCard(props) {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const collectionRef = collection(db, "projects");

  const handleCommit = async (e) => {
    e.preventDefault();
    const setuniqueProjectId = () => {
      let uniqueProjectKey = "";
      const today = new Date();
      const currentHour = today.getHours().toString();
      const currentMinute = today.getMinutes().toString();
      const currentYear = today.getFullYear().toString();
      const currentDate = today.getDate().toString();
      const currentMonth = today.getMonth().toString();

      const randomNumberSelect = () => {
        const randomDigits = [
          334553, 985325, 536638, 303204, 643204, 342354, 123862, 575700,
          923134, 99988, 214336, 121212, 812735, 336421,
        ];
        let randomNumber = Math.floor(Math.random() * randomDigits.length);
        return randomDigits[randomNumber];
      };
      const selctedRandomNumber = randomNumberSelect();

      return (uniqueProjectKey =
        currentDate +
        currentMonth +
        currentYear +
        currentHour +
        currentMinute +
        selctedRandomNumber);
    };
    try {
      const projectYear = new Date().getFullYear();

      await addDoc(collectionRef, {
        title: projectTitle,
        description: projectDescription,
        YearOfCreation: projectYear,
        projectId: projectYear + setuniqueProjectId(),
      })
        .then(() => {
          toast.success("Sending data...", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setProjectTitle("");
          setProjectDescription("");
        })
        .then(() => {
          setTimeout(() => {
            props.stateUpdate(false);
          }, 4000);
        });
    } catch (err) {
      console.error("The data sending was impossible due to:", err);
      toast("It was impossible to commit the changes", { type: "error" });
    }
  };

  handleCommit();

  return props.toggleUp ? (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        theme="colored"
      />
      <div className="project-item-outter create-project-card-anim create-project-card-anim-exit">
        <div className="project-item-inner create-project-card-inner">
          <FontAwesomeIcon
            icon={faXmark}
            className="create-project-card-close-btn"
            onClick={() => {
              props.stateUpdate(false);
              setProjectTitle("");
              setProjectDescription("");
            }}
          />
          <input
            type="text"
            className="project-item-title project-item-input"
            placeholder="Project title..."
            autoFocus
            onChange={(event) => setProjectTitle(event.target.value)}
          />
          <input
            type="text"
            className="project-item-description project-item-input"
            placeholder="More..."
            onChange={(event) => setProjectDescription(event.target.value)}
          />
          <div className="create-progect-card-buttons-holder">
            <button
              className="commit-button2 button-create-project"
              onClick={handleCommit}
            >
              Commit
            </button>
            <button
              className="cancel-button2 button-create-project"
              onClick={() => {
                props.stateUpdate(false);
                setProjectTitle("");
                setProjectDescription("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
