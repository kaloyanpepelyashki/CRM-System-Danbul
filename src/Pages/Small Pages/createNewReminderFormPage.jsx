//Importing React hooks
import { useState } from "react";

//Importing React router dom essentials
import { useNavigate } from "react-router-dom";

//Importing firebase and firebase methods
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing toast components from react Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateReminderForm() {
  const navigate = useNavigate();

  const day = new Date();
  const currentTime = day.getHours() + ":" + day.getMinutes();

  //Setting the collection refference
  const collectionRef = collection(db, "reminders");

  //Setting the states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    //#################

    //TO DO:
    //TO BE FIXED, NEEDS TO THROW A TOAS MESSAGE WHEN SENDS THE FUNCTION

    //#################

    const sendData = async () => {
      await addDoc(collectionRef, {
        title: title,
        description: description,
        priority: priority,
      });
      toast.success("Does it workkkkkk", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    };
    if (!title || !description) {
      alert("Please fill out the form");
    } else {
      //Testing a new structure for the teast message
      try {
        sendData();
      } catch (err) {
        console.error("The data sending was impossible due to:", err);
        toast.error("An error occured while uploading! Try Again", {
          position: "top-center",
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "colored",
        });
      }
    }
  };

  //Just a test

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="create-reminder-form-page-container">
        <div className="create-reminder-form-holder">
          <form className="create-reminder-form">
            <div className="create-reminder-form-first-part">
            <h4 className="create-reminder-title">Create reminder</h4>
              <input
                type="text"
                className="create-reminder-first-part-input
                create-reminder-top-input"
                placeholder="Add title..."
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              <input
                type="text"
                className="create-reminder-first-part-input create-reminder-middle-input"
                placeholder="Add Description..."
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
              <input
                type="text"
                className="create-reminder-first-part-input create-reminder-bottom-input"
                placeholder="URL..."
              />
            </div>
            <div className="create-reminder-form-second-part">
              <div className="create-reminder-date">
                <h4 className="create-reminder-title">When:</h4>
                <input className="create-reminder-date-input" type="date" />
              </div>
              <div className="create-reminder-date">
                <h4 className="create-reminder-title">At:</h4>
                <input
                  className="create-reminder-time-input"
                  type="time"
                  defaultValue={currentTime}
                />
              </div>
            </div>

            <div className="create-reminder-form-third-part">
              <h4 className="create-reminder-title">Priority:</h4>
              <div
                className="create-reminder-priority-items-holder"
                onClick={(event) => {
                  setPriority(event.target.value);
                }}
              >
                <option></option>
                <option
                  className="priority-item priority-item-low"
                  value="#30CA30"
                >
                  Low
                </option>
                <option
                  className=" priority-item priority-item-medium"
                  value="#FFA500"
                >
                  Medium
                </option>
                <option
                  className="priority-item priority-item priority-item-high"
                  value="#FF0000"
                >
                  High
                </option>
              </div>
              <div className="buttons-holder-component">
                <button
                  className="global-back-btn"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
                <button className="global-submit-btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
