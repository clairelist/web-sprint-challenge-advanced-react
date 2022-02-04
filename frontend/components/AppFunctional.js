/*eslint-disable*/
import React, {useState} from 'react';


let initialState = {
  x : 2,
  y : 2
};

export default function AppFunctional(props) {
  const [state,setState] = useState(initialState);

  //as always, LOGIC section!

  //// INCREMENT FUNCTIONS
  const incrementX = function(){ //each time this is called, logic goes 'hey,
    //if x is 3, return our state, else increment x by 1'
  let {x,y} = state; //destructure this x from state ! even though we are not doing anything with the y here, we still need it to set state properly, below
  if(x===3){
    return state;
} else {
    setState(x+1); //spread the rest of state our and set the x to +1
}
}

const incrementY = function(){
  let {x,y} = state; //this time, destructure the y !
  if(y===3){
    return state;
  } else {
    setState(y+1);
  }
}

//// DECREMENT FUNCTIONS

const decrementX = function(){
  let {x,y} = state;
  if(x===1){
    return state;
  } else {
   setState(state, state['x']-1); //currently not mutating, but also not changing the value...
   console.log(state);
  }
}

const decrementY = function(){
  let {x,y} = state;
  if(y===1){
    return state;
  } else {
    setState([...state, y-1]);
  }
}

 //////// CLICKY CLICKY CLICK HANDLERS !
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

// TODO FOR TIRED CLAIRE:: CONNECT CLICK HANDLERS, PASS IN STATE VAR WHERE 'COORDINATES' ARE CURRENTLY HARDCODED

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
        <div className="square">{state.x === 1 && state.y === 2 ? 'B' : ''}</div> 
        <div className="square">{state.x === 2 && state.y === 2 ? 'B' : ''}</div>
        <div className="square"></div> 
        <div className="square"></div> 
        <div className="square"></div> 
        <div className="square"></div> 
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={clickLeft}>LEFT</button>
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
