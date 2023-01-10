import "./DropDown.css";
import { motion } from "framer-motion";
import { useState } from "react";
const DropDown = ({ changeCategory, all }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleChnage = (e) => {
    changeCategory(e);
    handleOpen();
  };
  return (
    <motion.div whileTap={{ scale: 0.9 }} className="drop-down">
      <button onClick={handleOpen} className="drop-down__change">
        {all === true ? "All Tasks" : "Done Tasks"} <span>▼</span>
      </button>
      <div className={`item-container ${isOpen === true && "show"}`}>
        <div
          onClick={(e) => handleChnage(e)}
          data-category="all"
          className="drop-down__item"
        >
          All Tasks
        </div>
        <div
          onClick={(e) => handleChnage(e)}
          data-category="done"
          className="drop-down__item"
        >
          Done Tasks
        </div>
      </div>
    </motion.div>
  );
};
export default DropDown;
