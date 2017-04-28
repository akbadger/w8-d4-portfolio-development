import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {
  render() {
    return <div>
               <div className="columns">
                    <WorkSample title="TURN" screenshot="/img/turn.png" description="Iron Yarn final project in tandem with New Leaf, New Life: An employment platform connecting workers who have been previously incarcerated and employers who are willing to hire them.  Languages/libraries used: HTML5, CSS3, Bootstrap, Javascript, React" github="https://github.com/dembrey2/leafy" link=""/>
              </div>
              <div className="columns">
                    // <WorkSample title="CREATE & DESIGN CO" screenshot="/img/create-and-design.png" description="Customized blogging platform.  Languages/libraries used: HTML5, CSS3, Bootstrap" github="https://github.com/akbadger/w2-d4-recreate-surf-and-paddle" link=""/>
                </div>
              <div className="columns">
                    <WorkSample title="TODO" screenshot="./img/todolist.png" description="Minimalist to-do list web application. Languages/libraries used: HTML5, CSS3, Bootstrap, Javascript" github="https://github.com/akbadger/w6-d4-finish-todo-app" link=""/>
              </div>
            </div>
                  
            
      
  }
}

export default Work;
