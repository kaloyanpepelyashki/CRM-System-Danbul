//Importing hooks from React
import { useState, useEffect } from "react";

//Importing React router hooks
import { useParams } from "react-router-dom";

//Importing firebase and firebase methods
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//Importing components
import ReminderNotification from "../Small components/reminderNotificationReminderBar";

export default function RemindersBar() {
  const params = useParams();

  const [reminders, setReminders] = useState([]);
  const collectionRef = collection(db, "reminders");

  useEffect(() => {
    const q = query(collectionRef, orderBy("title"));
    onSnapshot(q, (snapshot) => {
      const remindersRaw = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReminders(remindersRaw);
    });
  }, []);

  const filteredReminders = reminders.filter(
    (reminder) => reminder.ProjectId === params.projectId
  );

  return (
    <>
      <div className="reminders-bar">
        <div className="reminder-bar-title-holder">
          <h2 className="reminder-bar-title font-heading">Reminders</h2>
          <FontAwesomeIcon
            icon={faPlus}
            className="reminder-bar-plus-icon plus-icon"
          />
        </div>
        <div className="reminder-bar-reminder-items-container">
          {filteredReminders.lenght === 0 ? (
            <h2>Nothing to show</h2>
          ) : (
            filteredReminders.map((reminder) => (
              <ReminderNotification key={reminder.id} reminder={reminder} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
