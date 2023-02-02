//Importing the router elements and hooks
import { useParams } from "react-router-dom";

//Importing components
import NavBar from "../../Components/Global Components/NavigationBar";
import RemindersBar from "../../Components/Global Components/RemindersBar";
import PercentageBoxComponent from "../../Components/Small components/percentageBoxHomePage";
import StatCard from "../../Components/Small components/StatCardsHomePage";

export default function HomePage() {
  const params = useParams();

  const currentProjectIdparams = params.projectId;

  return (
    <>
      {/*  <---- |Page content starts here | ---->   */}
      <NavBar projectIdParams={currentProjectIdparams} />
      <div className="home-page-content-wrapper page-content-wrapper">
        <div className="home-page-main-content-wrapper">
          <RemindersBar />

          {/*  <---- | Main section starts here | ---->   */}

          {/* <==== */}
          <div className="home-page-main-content page-main-content">
            <div className="home-page-stat-cards-holder">
              <div className="home-page-stat-card-top-holder">
                <StatCard Color={"#01575C"} />
              </div>
              <div className="home-page-stat-cards-bottom-holder">
                <StatCard Color={"#59BA89"} />
                <StatCard Color={"#BCD98C"} />
                <StatCard Color={"#E1F396"} />
              </div>
            </div>
            <PercentageBoxComponent />
          </div>
          {/* <==== */}
        </div>
      </div>
    </>
  );
}
