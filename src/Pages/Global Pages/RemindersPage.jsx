//Importing React hooks
import { useState, useEffect } from "react";

//Importing React router hooks
import { useNavigate, useLocation } from "react-router-dom";

//Importing firebase and firebase methods
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFilter } from "@fortawesome/free-solid-svg-icons";

//Importing components
import ReminderItem from "../../Components/Small components/reminderItemRemindersPage";
import NavBar from "../../Components/Global Components/NavigationBar";

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

  const locationStats = useLocation();
  const currentProjectId = locationStats.state.projectId;
  return (
    <>
      <NavBar projectId={currentProjectId} />
      <div className="reminder-page">
        <div className="reminder-page-header-bar">
          <div className="reminder-page-filter-outter">
            <FontAwesomeIcon
              icon={faFilter}
              className="reminders-page-filter-icon"
            />
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className="reminders-page-plus-icon plus-icon"
            onClick={handleTransfer}
          />
        </div>
        <div className="reminders-page-main-content-holder">
          <div className="reminders-page-reminder-items-holder">
            {reminders.length === 0 ? (
              <h2>There is nothing to show, try adding a reminder</h2>
            ) : (
              reminders.map((reminder) => (
                <ReminderItem key={reminder.id} reminder={reminder} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
