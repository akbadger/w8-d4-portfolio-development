import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {
  render() {
    return <div>
               
                    <WorkSample title="CHIRP" screenshot="/img/chirp.png" description="Messaging app - much like Twitter.  Languages/Libraries used: HTML5, CSS3, Bootstrap, Javascript"/>

                    <WorkSample title="CREATE & DESIGN CO" screenshot="/img/create-and-design.png" description="Customized blogging platform.  Languages/Libraries used: HTML5, CSS3, Bootstrap"/>

                    <WorkSample title="FORMULAYT" screenshot="./img/cactus.jpg" description="Built a mock-up airline eCommerce website.  Languages/Libraries used: HTML5, CSS3, Bootstrap, Javascript, jQuery"/>
                    
               
            </div>
                  
            
      
  }
}

export default Work;
