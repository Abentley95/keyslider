import React from 'react';
import styled from 'styled-components';

const ButtonPlain = styled.button `
      border-radius: 5px;
      height: 40px;
      width: 100px;
      font-size: 15px;
`;

export default class Button extends React.Component {
      render() {
            return (
                  <ButtonPlain onClick={this.props.onClick}>{this.props.name}</ButtonPlain>
            );
      }
}