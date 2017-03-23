import React, { Component } from 'react';

class WorkSample extends Component {
    constructor (props) {
        super(props);

// Internal values that change over time
        this.state = {

        }
    }

  render() {
    return <div>
                <div className="columns">
                    <div className="column is-4">
                        {this.props.title} <br/> {this.props.description}
                    </div>
                    <div className="column is-8">
                        {this.props.screenshot}
                    </div>
                </div> 
            </div>
  }
}

export default WorkSample;