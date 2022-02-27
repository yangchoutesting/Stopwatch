class Stopwatch {
  constructor() {
    this.startTime;
    this.endTime;
    this.isRunning = false;
    this.duration = 0;
  }

  start() {
    if (this.isRunning) {
      throw new Error("Stopwatch has already started! ");
    }
    this.displayStart();
    this.isRunning = true;
    this.startTime = new Date();
  }

  stop() {
    if (!this.isRunning) {
      throw new Error("Stopwatch has already stoped! ");
    }

    this.isRunning = false;
    this.endTime = new Date();
    this.displayStop();
  }

  reset() {
    this.startTime = null;
    this.endTime = null;
    this.isRunning = false;
    this.duration = 0;
    this.displayReset();
  }

  displayStart() {
    document.getElementById("start").innerHTML = "Start";
    alert("timer start!");
  }

  displayStop() {
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
    document.getElementById("stop").innerHTML = "Stop";
    document.getElementById("display").innerHTML = this.duration;
    alert("timer stop!");
  }

  displayReset() {
    document.getElementById("reset").innerHTML = "Reset";
    document.getElementById("display").innerHTML = "00:00:00";
  }
}

stopwatch = new Stopwatch();
