//Importing Font Awesome component and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PopUpMessage(props) {
  return props.toggleUp ? (
    <div className="popup-message-outter">
      <div className="popup-message-inner">
        <div className="popup-message-top-section">
          <FontAwesomeIcon
            icon={faXmark}
            className="popup-message-close-icon"
            onClick={() => props.stateUpdate(false)}
          />
        </div>
        <div className="popup-message-middle-section">
          <h2 className="font-heading" >Are you sure want to commit the changes?</h2>
        </div>
        <div className="popup-message-bottom-section">{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
}
