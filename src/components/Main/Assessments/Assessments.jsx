import Assessment from "./Assessment/Assessment";
import "./Assessments.css";
import PropTypes from "prop-types";
import New from "./New/New";
import { useState } from "react";

// Assessments component to show existing assessments, as well as new assessment option
const Assessments = ({ assessments, setAssessments, setShow }) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  //Click handler to show/hide Overview in mobile view
  const handleOverviewClick = () => {
    document.getElementById("overview-btn").classList.toggle("active");
    setShow((prev) => !prev);
  };
  return (
    <section className="assessments">
      <div className="assessments-header">
        <h3>My Assessment</h3>
        <div className="icons">
          <div className="icon">
            <img src="/assets/menu/search.svg" alt="search" />
          </div>
          <div className="icon">
            <img src="/assets/menu/filter_list_alt.svg" alt="filter" />
          </div>
          <div className="icon" id="overview-btn" onClick={handleOverviewClick}>
            <img src="/assets/menu/overview.svg" alt="overview" />
          </div>
        </div>
      </div>
      <div className="assessments-content">
        <div className="new-assessment">
          <button className="add-icon" onClick={openModal}>
            <img src="/assets/menu/add.svg" alt="add" />
          </button>
          <h4>New Assessment</h4>
          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
          <New
            closeModal={closeModal}
            visible={visible}
            setAssessments={setAssessments}
          />
        </div>
        {assessments.map((assessment, index) => (
          <Assessment assessment={assessment} key={index} />
        ))}
      </div>
    </section>
  );
};

Assessments.propTypes = {
  assessments: PropTypes.array,
  setAssessments: PropTypes.func,
  setShow: PropTypes.func,
};

export default Assessments;
