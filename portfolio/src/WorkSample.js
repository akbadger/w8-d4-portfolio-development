import React, { Component } from 'react';

class WorkSample extends Component {
    constructor (props) {
        super(props);

// Internal values that change over time
        this.state = {

        }
    }

  render() {
    return <div className="column is-one-third">
            <div className="section">
                {this.props.title}<br/>
                {this.props.screenshot}
            </div>
    </div>
  }
}

export default WorkSample;