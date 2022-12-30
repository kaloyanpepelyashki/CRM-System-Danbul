import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Importing firebase and firebase methods
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

import ReminderItem from "../../Components/Small components/reminderItemRemindersPage";

export default function RemindersPage() {
  const [reminders, setReminders] = useState([]);
  const collectionRef = collection(db, "reminders");

  const navigate = useNavigate();

  const handleTransfer = () => {
    navigate("/createReminderForm");
  };

  useEffect(() => {
    const getReminders = async () => {
      const data = await getDocs(collectionRef);
      setReminders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getReminders();
  }, [reminders]);
  return (
    <>
      <div className="reminder-page">
        <div onClick={handleTransfer}>+</div>
        <div className="reminders-page-main-content-holder">
          <div className="reminders-page-reminder-items-holder">
            {reminders.map((reminder) => (
              <ReminderItem key={reminder.id} reminder={reminder} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
