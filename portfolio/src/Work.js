import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {
  render() {
    return <div className="columns">
                   <WorkSample title="SAMPLE 1" screenshot="/img/screenshot1.jpg" />
                   <WorkSample title="SAMPLE 2" screenshot="/img/screenshot1.jpg" />
                   <WorkSample title="SAMPLE 3" screenshot="/img/screenshot1.jpg" />
          </div>
            
      
  }
}

export default Work;
