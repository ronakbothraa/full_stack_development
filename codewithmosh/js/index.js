function stopwatch() {
    let start_watch = 0;
    let stop_watch = 0;
    let duration = 0; 
    let started = false;

    this.start = function() {
        if (started  == true) {
            throw new Error('Stopwatch has already started');
        }
        start_watch = Date.now();
        started = true;
    }
    this.stop = function() {
        if (started == false) {
            throw new Error('Stopwatch has not started yet');
        }
        stop_watch = Date.now();
        duration += (stop_watch - start_watch)/1000;
        started = false;
    }
    this.reset = function() {
        start_watch = 0;
        start_watch = 0;
        duration = 0;
        started = false;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
};
    