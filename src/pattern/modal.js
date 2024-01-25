import React, { useState } from "react";
import { motion } from "framer-motion";
const Modal = ({ children, width, position }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const controllPosition = {
    center:
      "absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ",
    top: "absolute top-[10%]  left-[50%] transform translate-x-[-50%] translate-y-[-10%]",
  };
  return (
    <>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            onClick={handleCancel}
            className="absolute top-0 left-0 overflow-auto w-full h-full bg-[#00000046] "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`${width ? width : "w-3/6 "} ${
                position
                  ? controllPosition[position]
                  : controllPosition["center"]
              } bg-[#ffffff] p-4  max-md:w-[95%]`}
            >
              <button onClick={handleCancel}>Close</button>
              {children}
            </div>
          </div>
        </motion.div>
      )}

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    </>
  );
};

export default Modal;
