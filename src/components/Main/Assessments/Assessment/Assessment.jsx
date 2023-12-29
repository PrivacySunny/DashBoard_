import "./Assessment.css";
import PropTypes from "prop-types";

// Assesment component to show an indiviual assessment card
const Assessment = ({ assessment }) => {
  return (
    <div className="assessment">
      <div className="assessment-icon">
        <img src="/assets/menu/briefcase.svg" alt={assessment.title} />
      </div>
      <div className="options-icon">
        <img src="/assets/menu/3 dot.svg" alt="" />
      </div>
      <div className="assessment-main">
        <h4>{assessment.title}</h4>
        <div className="info">
          <p className="purpose">{assessment.purpose}</p>
          <div className="date">
            <img src="/assets/menu/calendar_today.svg" alt="date_icon" />
            <p>{assessment.date}</p>
          </div>
        </div>
        <div className="details">
          <div className="counts">
            <div className="count">
              <p>{assessment.duration}</p>
              <p>Duration</p>
            </div>
            <div className="count">
              <p>{assessment.questions}</p>
              <p>Questions</p>
            </div>
          </div>
          <div className="share-links">
            <a href="#" className="link">
              <img src="/assets/menu/link.svg" alt="share_icon" />
              <p>Share</p>
            </a>
            <div className="participants">
              {/*Code to show only three participant icons, and the rest as a number  */}
              {assessment.participants.slice(0, 3).map((participant, index) => (
                <div className="participant" key={index}>
                  {participant.photo ? (
                    <img src={participant.photo} alt="" />
                  ) : (
                    <p className="profile">LP</p>
                  )}
                </div>
              ))}
              {assessment.participants.length > 3 && (
                <p className="extra-count">
                  +{assessment.participants.length - 3}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Assessment.propTypes = {
  assessment: PropTypes.object,
};

export default Assessment;
