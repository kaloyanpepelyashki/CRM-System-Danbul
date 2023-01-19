import ProgressBarBox from "./percentageBarComponent";

export default function PercentageBoxComponent() {
    return (
        <>
        <div className="home-page-progress-bar-box">
            <div className="home-page-progress-bar-inner">
                <ProgressBarBox color="#59BA89" fullfilment="70"/>
                <ProgressBarBox color="#BCD98C" fullfilment="50"/>
                <ProgressBarBox color="#E1F396" fullfilment="30"/>
             </div>
          </div>       
        </>
    )
}