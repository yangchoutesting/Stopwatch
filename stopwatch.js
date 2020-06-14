function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started! ");

    running = true;

    startTime = new Date();
    alert("time start!");
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch has already stoped! ");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    document.getElementById("duration").innerHTML = duration;

    alert("time stop!");
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;

    document.getElementById("duration").innerHTML = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      alert(duration + " seconds");
      return duration;
    },
  });
}

// create an sw object

sw = new Stopwatch();
