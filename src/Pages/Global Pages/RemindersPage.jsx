//Importing React hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Importing firebase and firebase methods
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFilter } from "@fortawesome/free-solid-svg-icons";

//Importing components
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
        <div className="reminder-page-header-bar">
          <FontAwesomeIcon
            icon={faFilter}
            className="reminders-page-filter-icon"
          />
          <FontAwesomeIcon
            icon={faPlus}
            className="reminders-page-plus-icon plus-icon"
            onClick={handleTransfer}
          />
        </div>
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
