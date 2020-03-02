export default class Lamp
{
    constructor(orderNumber)
    {
        this.widget = document.createElement("div");
        this.widget.className = "lamp-block";
        this.widget.dataset.orderNumber = orderNumber;
    }

    getInstance()
    {
        return this.widget;
    }
}