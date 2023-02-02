//Importing React hooks
import { useState, useEffect } from "react";

//Importing React router hooks
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const params = useParams();

  const [reminders, setReminders] = useState([]);
  const collectionRef = collection(db, "reminders");

  const currentProjectIdParams = params.projectId;

  const handleTransfer = () => {
    navigate(`/createReminderForm/${currentProjectIdParams}`);
  };

  useEffect(() => {
    const getReminders = async () => {
      const data = await getDocs(collectionRef);
      setReminders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getReminders();
  }, [reminders]);

  const filteredReminders = reminders.filter(
    (reminder) => reminder.ProjectId === params.projectId
  );

  return (
    <>
      <NavBar />
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
            {filteredReminders.length === 0 ? (
              <h2 className="font-heading">
                There is nothing to show, try adding a reminder
              </h2>
            ) : (
              filteredReminders.map((reminder) => (
                <ReminderItem key={reminder.id} reminder={reminder} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
