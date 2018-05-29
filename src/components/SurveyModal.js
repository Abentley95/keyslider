import React from 'react';
import Button from '../styles/Button';
import Modal from '../styles/Modal'

export default class SurveyModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    }

    this.toggleSurvey = this.toggleSurvey.bind(this);
  }

  toggleSurvey() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
        <div> 
          <Button onClick={this.toggleSurvey} name="Open Modal" />
          <Modal show={this.state.show}>
            <h1>Do you like react?</h1>
            <button onClick={this.toggleSurvey}>close</button>
          </Modal>
        </div>
    );
  }
}