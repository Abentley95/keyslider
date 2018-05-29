import React from 'react';
import styled from 'styled-components';

const BackDrop = styled.div `
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0,0,0,0.64);
  padding: 50px;
`;

// The modal "window"
const ModalStyle = styled.div `
  background-color: #fff;
  border-radius: 5px;
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
`;

export default class Modal extends React.Component {
  render() {
    if(!this.props.show){
        return null; 
    }
    return (
      <BackDrop>
        <ModalStyle>
            {this.props.children}
        </ModalStyle>
      </BackDrop>
    );
  }
}