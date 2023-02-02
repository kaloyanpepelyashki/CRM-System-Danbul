import { NavLink, useParams } from "react-router-dom";

export default function NavBar() {
  const params = useParams();
  const currentProjectIdParams = params.projectId;
  return (
    <>
      {/*  <---- |Navigation bar component starts here | ---->   */}

      <nav className="app-global-navbar">
        <div className="global-navbar-items-wrapper">
          <div className="global-navbar-emptyspace"></div>

          {/*  <---- |Navigation bar items start here | ---->   */}

          <div className="global-navbar-items">
            <NavLink
              className="global-navba-link-item font-heading"
              to={`/Dashboard/${currentProjectIdParams}`}
            >
              Home
            </NavLink>
            <NavLink
              className="global-navba-link-item font-heading"
              to={`/applicants/${currentProjectIdParams}`}
            >
              Applicants
            </NavLink>
            <NavLink
              className="global-navba-link-item font-heading"
              to={`/calendar/${currentProjectIdParams}`}
            >
              Calendar
            </NavLink>
            <NavLink
              className="global-navba-link-item font-heading"
              to={`/reminders/${currentProjectIdParams}`}
            >
              Reminders
            </NavLink>
            <NavLink
              className="global-navba-link-item global-navba-last-link font-heading"
              to="/projects"
            >
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
