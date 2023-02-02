//Importing app global components

import NavBar from "../../Components/Global Components/NavigationBar";
import RemindersBar from "../../Components/Global Components/RemindersBar";

export default function CalendarPage() {
  return (
    <>
      <NavBar />
      <div className="calendar-page-content-wrapper page-content-wrapper">
        <RemindersBar />
        <div className="calendar-page-main-content">
          <h2 className="font-heading calendar" >This is the "Calendar" page of the application</h2>
        </div>
      </div>
    </>
  );
}
