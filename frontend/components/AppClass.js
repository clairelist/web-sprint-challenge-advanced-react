import React from 'react'

export default class AppClass extends React.Component {
  //DATA sectionr:: TODOS ---- define coord state, counter state
  state = {
    xcoord: 2,
    ycoord: 2,
    count: 0
  }

  //LOGIC SECTIONR:: TODOS ---- increment, decrement, inc y, dec y, click handlers
  incrementX = ()=>{
    let newCoord = this.state.xcoord; //let's see if it works !
    this.setState({
      ...this.state,
      xcoord: newCoord+1
    })
  }

  clickRight = event => {
    event.preventDefault();
    this.state.incrementX();
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.xcoord}, 2)</h3>
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
}
