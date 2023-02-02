import "./App.css";

//Importing the router elements and hooks
import { Routes, Route, Navigate } from "react-router-dom";

//Importing app global pages
import HomePage from "./Pages/Global Pages/HomePage";
import ApplicantsListPage from "./Pages/Global Pages/ApplicantsListPage";
import CalendarPage from "./Pages/Global Pages/CalendarPage";
import RemindersPage from "./Pages/Global Pages/RemindersPage";
import ProjectsPage from "./Pages/Global Pages/ProjectsPage";

//Importing app small pages
import CreateApplicantFormPage from "./Pages/Small Pages/createNewApplicantFormPage";
import CreateReminderForm from "./Pages/Small Pages/createNewReminderFormPage";
import ApplicantInProfilePage from "./Pages/Small Pages/applicantsProfilePage";

function App() {
  return (
    <>
      <div className="app-content-holder">
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/Dashboard/:projectId" element={<HomePage />} />
          <Route
            path="/applicants/:projectId"
            element={<ApplicantsListPage />}
          />
          <Route path="/calendar/:projectId" element={<CalendarPage />} />
          <Route path="/reminders/:projectId" element={<RemindersPage />} />
          <Route
            path="/applicantProfile"
            element={<ApplicantInProfilePage />}
          />
          <Route
            path="/createApplicantForm/:projectId"
            element={<CreateApplicantFormPage />}
          />
          <Route
            path="/createReminderForm/:projectId"
            element={<CreateReminderForm />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
