export default class ModalWindow
{
    constructor(maxLevel)
    {
        this.widget = document.createElement("div");
        this.widget.className = "modal";
        this.content = document.createElement("div");
        this.content.className = "modal-content";
        const headerLabel = document.createElement("h2");
        headerLabel.innerHTML = "Окно настроек";

        const settingsSection = document.createElement("section");

        const levelBlock = document.createElement("div");
        levelBlock.className = "flex-row";
        const levelLabel = document.createElement("label");
        levelLabel.className = "flex-column";
        levelLabel.innerHTML = "Выберите уровень";
        levelLabel.setAttribute("for", "levelId");
        this.levelInput = document.createElement("input");
        this.levelInput.className = "flex-column";
        this.levelInput.setAttribute("id", "levelId");
        this.levelInput.setAttribute("type", "number");
        this.levelInput.setAttribute("min", 1);
        this.levelInput.setAttribute("max", maxLevel);
        this.levelInput.value = 1;

        levelBlock.appendChild(levelLabel);
        levelBlock.appendChild(this.levelInput);

        const delayBlock = document.createElement("div");
        delayBlock.className = "flex-row";
        const delayLabel = document.createElement("label");
        delayLabel.className = "flex-column";
        delayLabel.innerHTML = "Выберите задержку между загораниями в секкундах";
        delayLabel.setAttribute("for", "delayId");
        this.delayInput = document.createElement("input");
        this.delayInput.className = "flex-column";
        this.delayInput.setAttribute("id", "delayId");
        this.delayInput.setAttribute("type", "number");
        this.delayInput.setAttribute("min", 1);
        this.delayInput.setAttribute("max", 4);
        this.delayInput.value = 2;

        delayBlock.appendChild(delayLabel);
        delayBlock.appendChild(this.delayInput);

        const buttonsBlock = document.createElement("div");
        buttonsBlock.classList = "flex-row";
        this.acceptButton = document.createElement("button");
        this.acceptButton.className = "button-column";
        this.acceptButton.innerHTML = "Принять";
        this.cancelButton = document.createElement("button");
        this.cancelButton.className = "button-column";
        this.cancelButton.innerHTML = "Отмена";
        buttonsBlock.appendChild(this.acceptButton);
        buttonsBlock.appendChild(this.cancelButton);

        settingsSection.appendChild(levelBlock);
        settingsSection.appendChild(delayBlock);
        settingsSection.appendChild(buttonsBlock);

        this.content.appendChild(headerLabel);
        this.content.appendChild(settingsSection);
        this.widget.appendChild(this.content);

        this.cancelButton.addEventListener("click", (event) =>
        {
            this.widget.classList.toggle("hide");
            this.widget.classList.toggle("block");
            this.setDefaultValues();
        });

        this.acceptButton.addEventListener("click", () =>
        {
            let event = new Event("accept");
            event.settings = {
                level: parseInt(this.levelInput.value),
                delay: parseInt(this.delayInput.value)
            };
            this.widget.dispatchEvent(event);
            this.widget.classList.toggle("hide");
            this.widget.classList.toggle("block");
            
            
            this.setDefaultValues();
            console.log("accept event");
        });
    }

    getInstance()
    {
        return this.widget;
    }

    show()
    {
        this.widget.classList.toggle("block");
    }

    setDefaultValues()
    {
        this.levelInput.value = 1;
        this.delayInput.value = 2;
    }
}