export default class ProgressBar
{
    constructor()
    {
        this.widget = document.createElement("div");
        this.text = document.createElement("p");
        this.text.className = "vertical-text";
        this.widget.appendChild(this.text);
        this.widget.className = "progressbar flex-item";
        this.text.innerHTML = "Прогресс";
        this.widget.dataset.percent = 0;
    }

    getInstance()
    {
        return this.widget;
    }

    increase(grow)
    {
        const computedStyle = getComputedStyle(this.widget);    
        const currentBlockHeight = parseInt(computedStyle.getPropertyValue("height"));
        const addHeight = currentBlockHeight / grow;
        const height = parseInt(computedStyle.getPropertyValue("--block-height"));
        if(height + addHeight <= currentBlockHeight)
        {
            this.widget.style.setProperty("--block-height", height + addHeight + "px");
        }
        else
        {
            this.widget.style.setProperty("--block-height", currentBlockHeight + "px");
            console.log("overflow");
        }
    }

    reset()
    {
        this.widget.style.setProperty("--block-height", 0);
    }
}

