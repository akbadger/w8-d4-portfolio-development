import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {
  render() {
    return <div>
               <div className="columns">
                    <WorkSample title="TURN" screenshot="/img/turn.png" description="Employment platform connecting workers and employers.  Languages/libraries used: HTML5, CSS3, Bootstrap, Javascript, React"/>

                    <WorkSample title="CREATE & DESIGN CO" screenshot="/img/create-and-design.png" description="Customized blogging platform.  Languages/libraries used: HTML5, CSS3, Bootstrap"/>

                    <WorkSample title="TODO" screenshot="./img/todolist.png" description="Minimalist to-do list web application. Languages/libraries used: HTML5, CSS3, Bootstrap, Javascript"/>
                    
               </div>
            </div>
                  
            
      
  }
}

export default Work;
