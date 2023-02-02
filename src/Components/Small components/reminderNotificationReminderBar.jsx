import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function ReminderNotification({ reminder }) {
  const deleteReminder = async (id) => {
    const reminderDoc = doc(db, "reminders", id);
    await deleteDoc(reminderDoc);
  };
  return (
    <>
      <div className="reminder-notification-outer">
        <div className="reminder-notification-inner">
          <div
            className="reminder-item-checkbox-holder"
            onChange={() => {
              setTimeout(() => {
                deleteReminder(reminder.id);
              }, 500);
            }}
          >
            <input className="reminder-item-checkbox" type="radio" />
          </div>
          <div className="reminder-notification-top-part">
            <h4 className="reminder-notification-heading">{reminder.title}</h4>
            <div
              className="reminder-notification-priority-indicator"
              style={{ backgroundColor: reminder.priority }}
            ></div>
          </div>
          <div className="reminder-notification-bottom-part">
            <p className="reminder-notification-description">
              {reminder.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
