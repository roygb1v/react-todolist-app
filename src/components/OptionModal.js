import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleCloseModal}
      contentLabel="Selected Option"
      className="Modal"
      closeTimeoutMS={200}
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption ? <p className="modal__body">{props.selectedOption}</p> : undefined}
      <button className="button" onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal