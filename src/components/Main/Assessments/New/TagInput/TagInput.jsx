import { useState } from "react";
import "./TagInput.css";

// Input component to handle tags addition form field
const TagInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Adds tag when user presses Enter
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      if (inputValue.trim() !== "") {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleTagRemove = (event, tag) => {
    event.stopPropagation();
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <section>
      <label htmlFor="tags">Skills</label>
      <div className="tag-container">
        <div className={`tag-disp ${tags.length===0 && 'empty'}`}>
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
              <button type="" onClick={() => handleTagRemove(event, tag)}>
                <img src="/assets/menu/close.svg" alt="close" />
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          name="tags"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Add a tag..."
        />
      </div>
    </section>
  );
};

export default TagInput;
