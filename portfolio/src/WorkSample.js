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
                    <div className="column is-half is-offset-one-quarter has-text-centered">
                         <img src={this.props.screenshot} alt="sample screenshot" className="screenshot"/>
                        <span><a target="_blank" href={this.props.link}>{this.props.title}</a><a target="_blank" href={this.props.github}><i className="fa fa-github github-small" aria-hidden="true"></i></a></span><br/> {this.props.description}<br/>
                    </div>
                </div> 
  }
}

export default WorkSample;