import "./App.css";

//Importing the router elements
import { Routes, Route, Navigate } from "react-router-dom";

//Importing app global pages
import HomePage from "./Pages/Global Pages/HomePage";
import ApplicantsListPage from "./Pages/Global Pages/ApplicantsListPage";
import CalendarPage from "./Pages/Global Pages/CalendarPage";
import RemindersPage from "./Pages/Global Pages/RemindersPage";
import ProjectsPage from "./Pages/Global Pages/ProjectsPage";

//Importing app global components
import NavBar from "./Components/Global Components/NavigationBar";
import CreateApplicantFormPage from "./Pages/Small Pages/createNewApplicantFormPage";
import CreateReminderForm from "./Pages/Small Pages/createNewReminderFormPage";
import ApplicantInProfilePage from "./Pages/Small Pages/applicantsProfilePage";

function App() {
  return (
    <>
      <div className="app-content-holder">
        <NavBar />
        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/applicants" element={<ApplicantsListPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route
            path="/applicantProfile"
            element={<ApplicantInProfilePage />}
          />
          <Route
            path="/createApplicantForm"
            element={<CreateApplicantFormPage />}
          />
          <Route path="/createReminderForm" element={<CreateReminderForm />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
