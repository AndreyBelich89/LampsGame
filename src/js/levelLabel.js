export default class LevelLabel
{
    constructor(level)
    {
        this.widget = document.createElement("h2");
        this.changeTitle(level);
    }

    getInstance()
    {
        return this.widget;
    }

    changeTitle(level)
    {
        this.widget.innerHTML = `Текущий уровень ${level}`;
    }
}