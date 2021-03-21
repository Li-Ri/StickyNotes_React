import React from "react";
import "./Modal.css";
import Input from "../Input/Input";
import styled from "styled-components";

const Modal = (props) => {
  let StyledDiv = styled.div`
    display: ${props.doesShow ? "" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  `;

  return (
    <StyledDiv>
      <div className="modal-main">
        <form onSubmit={props.submit}>
          <Input />
          <button onClick={props.addNote}>+</button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default Modal;
