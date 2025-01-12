/*eslint-disable*/
import React, {useState} from 'react';


export default function AppFunctional(props) {
 // const [state,setState] = useState(initialState);

 const [x,setx] = useState(2);
 const [y,sety] = useState(2);
 const [count,setCount] = useState(0);

  //as always, LOGIC section!

  //// INCREMENT FUNCTIONS
  const incrementX = function(){ //each time this is called, logic goes 'hey,
    //if x is 3, return our state, else increment x by 1'
  let incr = x;
  if(incr===3){
    return incr;
} else {
    setx(incr+1); //this way, we are not directly changine the value of x !
}
}

const incrementY = function(){
  let incr = y;
  if(incr===3){
    return incr;
  } else {
    sety(incr+1);
    console.log(incr)
  }
}

//// DECREMENT FUNCTIONS

const decrementX = function(){
  // let {x,y} = state;
  let decr = x;
  if(decr===1){
    return decr;
  } else {
   setx(decr-1); 
   console.log(x);
  }
}

const decrementY = function(){
  let decr = y;
  if(decr===1){
    return decr;
  } else {
    sety(decr-1);
  }
}

 //////// CLICKY CLICKY CLICK HANDLERS !
 const clickUp = function(event){
  event.preventDefault();
  setCount(count+1);
  incrementY();
}

const clickDown = function(event){
  event.preventDefault();
  setCount(count+1);
  decrementY();
}

const clickRight = function(event){
  event.preventDefault();
  setCount(count+1);
  incrementX();
}

const clickLeft = function(event){
  event.preventDefault();
  setCount(count+1);
  decrementX();
}

const reset = function(event){
  event.preventDefault();
  setCount(0);
  setx(2);
  sety(2);
}

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${x}, ${y})`}</h3>
        <h3 id="steps">You moved {count} times</h3>
      </div>
      <div id="grid">
        <div className="square">{x === 1 && y === 3 ? 'B' : ''}</div> 
        <div className="square">{x === 2 && y === 3 ? 'B' : ''}</div> 
        <div className="square">{x === 3 && y === 3 ? 'B' : ''}</div> 
        <div className="square">{x === 1 && y === 2 ? 'B' : ''}</div> 
        <div className="square">{x === 2 && y === 2 ? 'B' : ''}</div>
        <div className="square">{x === 3 && y === 2 ? 'B' : ''}</div> 
        <div className="square">{x === 1 && y === 1 ? 'B' : ''}</div> 
        <div className="square">{x === 2 && y === 1 ? 'B' : ''}</div> 
        <div className="square">{x === 3 && y === 1 ? 'B' : ''}</div> 
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={clickLeft}>LEFT</button>
        <button id="up" onClick={clickUp}>UP</button>
        <button id="right" onClick={clickRight}>RIGHT</button>
        <button id="down" onClick={clickDown}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
