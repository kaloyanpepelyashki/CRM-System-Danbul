import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing the Font awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function ReminderItem({ reminder }) {
  const deleteReminder = async (id) => {
    const reminderDoc = doc(db, "reminders", id);
    await deleteDoc(reminderDoc);
  };

  return (
    <>
      <div className="reminder-item-outter">
        <div className="reminder-item-inner">
          <div
            className="reminder-item-checkbox-holder"
            onChange={() => {
              deleteReminder(reminder.id);
            }}
          >
            <input className="reminder-item-checkbox" type="radio" />
          </div>
          <div className="reminder-item-main-content-holder">
            <div className="reminder-item-main-content-top-part">
              <div
                className="reminder-item-priority-indicator"
                style={{ backgroundColor: reminder.priority }}
              ></div>
              <h4 className="reminder-item-title">{reminder.title}</h4>
            </div>
            <div className="reminder-item-main-content-bottom-bar">
              <p className="reminder-item-description">
                {reminder.description}
              </p>
            </div>
          </div>
          <FontAwesomeIcon
            className="reminder-item-update-icon"
            icon={faPenToSquare}
          />
        </div>
      </div>
    </>
  );
}
