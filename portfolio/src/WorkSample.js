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
                <div className="column">
                    <div className="column">
                         <img src={this.props.screenshot} alt="sample screenshot"/>
                        <h2>{this.props.title}</h2> <br/> {this.props.description}
                    </div>
                </div> 
            </div>
  }
}

export default WorkSample;