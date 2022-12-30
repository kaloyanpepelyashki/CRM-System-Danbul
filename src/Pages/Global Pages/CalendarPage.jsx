import RemindersBar from "../../Components/Global Components/RemindersBar";

export default function CalendarPage() {
  return (
    <>
      <div className="calendar-page-content-wrapper">
        <RemindersBar />
        <div className="calendar-page-main-content">
          <h2>This is the "Calendar" page of the application</h2>
        </div>
      </div>
    </>
  );
}
