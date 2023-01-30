//Importing react hooks
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faList,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";

//Importing components
import ApplicantProfile from "../../Components/Small components/applicantProfileItemApplicantsListPage";
import ListLayout from "./applicantsListPageListLayout";
import GridLayout from "./applicantsListPageGridLayout";

export default function ApplicantListPageMainContent({
  applicants,
  projectId,
}) {
  //Setting navigation to create applicant page
  const navigate = useNavigate();
  const handleTransfer = (id) => {
    navigate(`/createApplicantForm/${id}`);
  };

  const [toggleOn, setToggleOn] = useState(1);

  const toggleTab = (index) => {
    setToggleOn(index);
  };

  const currentProjectId = projectId;
  const Applicants = applicants;

  return (
    <>
      <div className="applicants-page-main-content">
        <div className="applicants-page-main-content-header">
          <FontAwesomeIcon
            icon={faPlus}
            className="applicants-page-plus-icon plus-icon"
            onClick={() => handleTransfer(currentProjectId)}
          />
          <div className="applicant-page-tabs-holder">
            <div
              className={
                toggleOn === 1
                  ? "applicant-page-list-tab-active"
                  : "applicant-page-list-tab"
              }
              onClick={() => toggleTab(1)}
            >
              <FontAwesomeIcon
                icon={faList}
                className="applicants-page-tab-icon"
              />
              <p className="applicant-page-tab-text">List</p>
            </div>
            <div
              className={
                toggleOn === 2
                  ? "applicant-page-list-tab-active"
                  : "applicant-page-list-tab"
              }
              onClick={() => toggleTab(2)}
            >
              <FontAwesomeIcon
                icon={faTableCells}
                className="applicants-page-tab-icon"
              />
              <p className="applicant-page-tab-text">Grid</p>
            </div>
          </div>
        </div>

        <div className="applicants-page-center">
          <div
            className={
              toggleOn === 1
                ? "applicant-page-layout-block"
                : "applicant-page-layout-none"
            }
          >
            <ListLayout projectId={currentProjectId} applicants={Applicants} />
          </div>
          <div
            className={
              toggleOn === 2
                ? "applicant-page-layout-block"
                : "applicant-page-layout-none"
            }
          >
            <GridLayout projectId={currentProjectId} applicants={Applicants} />
          </div>
        </div>
      </div>
    </>
  );
}
