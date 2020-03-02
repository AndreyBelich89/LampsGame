export default class Button
{
    constructor(label)
    {
        this.widget = document.createElement("button");
        this.widget.innerHTML = label;
        this.widget.className = "button";
    }

    getInstance()
    {
        return this.widget;
    }

    enableState()
    {
        const isDisable = this.widget.getAttribute("disable");
        if(isDisable)
        {
            this.widget.removeAttribute("disable");
        }
    }
}