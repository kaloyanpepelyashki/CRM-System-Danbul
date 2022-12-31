//Importing components
import RemindersBar from "../../Components/Global Components/RemindersBar";

export default function ProjectsPage() {
  return (
    <>
      {/*  <---- |Page content starts here | ---->   */}

      <div className="projects-page-content-wrapper page-content-wrapper">
        <div className="projects-page-main-content-wrapper">
          <RemindersBar />

          {/*  <---- | Main section starts here | ---->   */}

          <div className="projects-page-main-content page-main-content">
            <h2>This is the "Projects" page of the application</h2>
          </div>
        </div>
      </div>
    </>
  );
}
