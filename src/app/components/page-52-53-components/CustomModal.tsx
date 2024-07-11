"use client";

import Modal from "react-modal";

import React, { useState } from "react";

const CustomModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const handleModalClose = () => {
    setModalIsOpen(false);
    onClose();
  };

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      backgroundColor: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      paddingRight: "40px",
      minWidth: "450px",
      minHeight: "230px",
      margin: "0 auto",
    },
  };

  return (
    <section className="flex justify-center items-center ">
      <Modal
        isOpen={isOpen}
        onRequestClose={handleModalClose}
        contentLabel="Modal"
        className="w-[200px] h-[200px] bg-blue-600"
        bodyOpenClassName="overflow-hidden"
        style={modalStyles}
      >
        {children}
        {/* <button onClick={handleModalClose}>Close</button> */}
      </Modal>
    </section>
  );
};

export default CustomModal;
