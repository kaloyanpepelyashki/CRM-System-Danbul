import { NavLink, useParams } from "react-router-dom";

export default function NavBar(props) {
  const currentProjectId = props.projectId;
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
              state={{ projectId: currentProjectId }}
            >
              Home
            </NavLink>
            <NavLink
              className="global-navba-link-item font-heading"
              to={`/applicants/${currentProjectIdParams}`}
              state={{ projectId: currentProjectId }}
            >
              Applicants
            </NavLink>
            <NavLink
              className="global-navba-link-item font-heading"
              to={`/calendar/${currentProjectIdParams}`}
              state={{ projectId: currentProjectId }}
            >
              Calendar
            </NavLink>
            <NavLink
              className="global-navba-link-item font-heading"
              to={`/reminders/${currentProjectIdParams}`}
              state={{ projectId: currentProjectId }}
            >
              Reminders
            </NavLink>
            <NavLink className="global-navba-link-item font-heading" to="/projects">
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
