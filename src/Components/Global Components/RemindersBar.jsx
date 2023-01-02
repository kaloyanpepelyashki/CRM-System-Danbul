//Importing hooks from React
import { useState, useEffect } from "react";

//Importing firebase and firebase methods
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//Importing components
import ReminderNotification from "../Small components/reminderNotificationReminderBar";

export default function RemindersBar() {
  const [reminders, setReminders] = useState([]);
  const collectionRef = collection(db, "reminders");

  useEffect(() => {
    const getReminders = async () => {
      const data = await getDocs(collectionRef);
      setReminders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getReminders();
  }, []);

  console.log(reminders.lenght);

  return (
    <>
      <div className="reminders-bar">
        <div className="reminder-bar-title-holder">
          <h2 className="reminder-bar-title">Reminders</h2>
          <FontAwesomeIcon
            icon={faPlus}
            className="reminder-bar-plus-icon plus-icon"
          />
        </div>
        <div className="reminder-bar-reminder-items-container">
          {reminders.lenght === 0 ? (
            <h2>Nothing to show</h2>
          ) : (
            reminders.map((reminder) => (
              <ReminderNotification key={reminder.id} reminder={reminder} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
