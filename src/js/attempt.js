export default class Attempt
{
    constructor()
    {
        this.widget = document.createElement("div");
        this.widget.className = "attempt";
    }

    getInstance()
    {
        return this.widget;
    }
}