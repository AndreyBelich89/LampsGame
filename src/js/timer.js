export default class Timer 
{
    constructor()
    {
        this.SECONDS_PER_MINUTE = 60;
        this.widget = document.createElement("div");
        this.widget.className = "timer";
        this.timerId = null;
        this.reset();
    }

    getInstance()
    {
        return this.widget;
    }

    updateTime()
    {
        const SECONDS_PER_TEN_MINUTES = 10 * this.SECONDS_PER_MINUTE;
        this.seconds--;
        this.widget.innerHTML = `${this.seconds < SECONDS_PER_TEN_MINUTES ? "0" : ""}${Math.floor(this.seconds / this.SECONDS_PER_MINUTE)}
                                : ${this.seconds % this.SECONDS_PER_MINUTE < 10 ? "0" : ""}${this.seconds % this.SECONDS_PER_MINUTE}`;
    }

    tick()
    {
        this.timerId = setInterval(() => {
            this.updateTime();
            if(this.seconds === 0)
            {
                clearInterval(this.timerId);
                console.log("Clear interval");
                let event = new Event("timeOver");
                this.widget.dispatchEvent(event);
            }
        }, 1000);
    }

    stop()
    {
        clearInterval(this.timerId);
    }

    reset()
    {
        this.seconds = 91;
        this.updateTime();
    }

    addTime(time)
    {
        this.seconds += time;
    }
}