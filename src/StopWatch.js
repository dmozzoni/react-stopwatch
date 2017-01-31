import React, {Component} from "react";

 class StopWatch extends Component {
   constructor(props) {
      super(props);
      this.state = {
            seconds: 0,
        };
        this.timerId = null;
   }

       updateTime() {
         this.setState({
           seconds: this.state.seconds + 1
         })
       }

       clickStart() {
           this.timerId = setInterval( () => this.updateTime(), 1000);
       }

       clickPause() {
         clearInterval(this.timerId);
       }

       clickReset() {
         clearInterval(this.timerId);
         this.setState({
           seconds: 0
         })

       }


   render(){
     return (
       <div className="stopWatchBox">

          {this.state.seconds} <br />

          <button id="bstart" type="submit" onClick={() => this.clickStart()}>Start</button>
          <button id="bpause" type="submit" onClick={() => this.clickPause()}>Pause</button>
          <button id="breset" type="submit" onClick={() => this.clickReset()}>Reset</button>
      </div>
    )
  }
}

export default StopWatch
