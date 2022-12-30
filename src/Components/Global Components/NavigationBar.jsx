import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      {/*  <---- |Navigation bar component starts here | ---->   */}

      <nav className="app-global-navbar">
        <div className="global-navbar-items-wrapper">
          <div className="global-navbar-emptyspace"></div>

          {/*  <---- |Navigation bar items start here | ---->   */}

          <div className="global-navbar-items">
            <NavLink className="global-navba-link-item" to="/">
              Home
            </NavLink>
            <NavLink className="global-navba-link-item" to="/applicants">
              Applicants
            </NavLink>
            <NavLink className="global-navba-link-item" to="/calendar">
              Calendar
            </NavLink>
            <NavLink className="global-navba-link-item" to="/reminders">
              Reminders
            </NavLink>
            <NavLink className="global-navba-link-item" to="projects">
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
