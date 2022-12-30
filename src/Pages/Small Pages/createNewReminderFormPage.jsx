import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

export default function CreateReminderForm() {
  const day = new Date();
  const currentTime = day.getHours() + ":" + day.getMinutes();

  //Setting the collection refference
  const collectionRef = collection(db, "reminders");

  //Setting the states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async () => {
    try {
      await addDoc(collectionRef, {
        title: title,
        description: description,
      });
    } catch (err) {
      console.error("The data sending was impossible due to:", err);
    }
  };

  return (
    <>
      <div className="create-reminder-form-page-container">
        <div className="create-reminder-form-holder">
          <form className="create-reminder-form">
            <div className="create-reminder-form-first-part">
              <input
                type="text"
                className="create-reminder-first-part-input
                create-reminder-top-input"
                placeholder="Add title..."
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
              <input
                type="text"
                className="create-reminder-first-part-input create-reminder-middle-input"
                placeholder="Add Description..."
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
              <div className="create-reminder-priority-items-holder">
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
            </div>
            <button onClick={handleClick}> Commit </button>
          </form>
        </div>
      </div>
    </>
  );
}
