import { useState } from "react";
import "./New.css";
import PropTypes from "prop-types";
import TagInput from "./TagInput/TagInput";

const New = ({ closeModal, visible, setAssessments }) => {
  // States to track form fields. Only fields shown in the design are covered
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [desc, setDesc] = useState("");
  // const [skills, setSkills] = useState([]);
  const [duration, setDuration] = useState("");
  // const [questions, setQuestions] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    // New assessment object with user inputs, and default values for backup/ not mentioned in design
    const newAssessment = {
      title: name || "New Assessment",
      purpose: purpose || "Job",
      date: "20 Apr 2023",
      duration: duration || "00",
      questions: "00",
      participants: [
        {
          name: "Lokesh Pal",
          photo: "",
        }
      ],
    };
    setAssessments((prev) => [...prev, newAssessment]);
    closeModal();
  };

  const handleModalClick = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to the overlay
  };

  return (
    <div className={`new ${visible && 'active'}`} id="new" onClick={closeModal}>
      <div className="modal" onClick={handleModalClick}>
        <div className="header">
          <h5>Create new assessment</h5>
          <img src="/assets/menu/cut.svg" alt="" onClick={closeModal}/>
        </div>
        <form onSubmit={handleAdd}>
          <div className="form-fields">
            <section>
              <label htmlFor="name">Name of assessment</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type Here"
              />
            </section>
            <section>
              <label htmlFor="purpose">Purpose of the test is</label>
              <select
                id="purpose"
                className="dropdown"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="">Select</option>
                <option value="A">Job</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </section>
            <section>
              <label htmlFor="desc">Description</label>
              <select
                id="desc"
                className="dropdown"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </section>
            <TagInput />
            <section>
              <label htmlFor="duration">Duration of assessment</label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="HH:MM:SS"
              />
            </section>
          </div>
          <div className="submit-btn">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

New.propTypes = {
  closeModal: PropTypes.func,
  visible: PropTypes.bool,
  setAssessments: PropTypes.func
};

export default New;
