import React, {useState} from 'react';



//okay so for this first attempt at the logic, let's think about it as incrementing each value
//and then destructuring that array to correspond with which square gets the big ole B rendered to it

//these will be moved to an actions file when ready !
//increments:: state changers !
const incrementX = function(state,x){ //each time this is called, logic goes 'hey,
                                      //if x is 3, return our state, else increment x by 1'
  if(x===3){
    return state;
  } else {
   state = setState(x+1);
  }
}

const incrementY = function(state,y){
  if(y===3){
    return state;
  } else {
   state = setState(y+1);
  }
}

//decrements !
const decrementX = function(state,x){
  if(x===1){
    return state;
  } else {
    state = setState(x-1);
  }
}

const decrementY = function(state,y){
  if(y===1){
    return state;
  } else {
    state = setState(y-1);
  }
}

//click handlers ! Calling the above actions, which are currently above as normal funcs!
const clickUp = function(event){
  event.preventDefault();
  incrementY();
}

const clickDown = function(event){
  event.preventDefault();
  decrementY();
}

const clickRight = function(event){
  event.preventDefault();
  incrementX();
}

const clickLeft = function(event){
  event.preventDefault();
  decrementX();
}


export default function AppFunctional(props) {
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square">B</div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
