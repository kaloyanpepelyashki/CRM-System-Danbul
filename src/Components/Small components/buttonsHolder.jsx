import { useNavigate } from "react-router-dom";

export default function ButtonsHolder() {
  const navigate = useNavigate();

  return (
    <>
      <div className="buttons-holder-component">
        <button className="global-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="global-btn">Submit</button>
      </div>
    </>
  );
}
