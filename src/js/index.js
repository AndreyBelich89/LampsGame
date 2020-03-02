import Timer from "./timer";
import Attempt from "./attempt";
import Lamp from "./lamp";
import ProgressBar from "./progressbar";
import Button from "./button";
import LevelLabel from "./levelLabel";
import ModalWindow from "./modalWindow";

class Application
{
    constructor()
    {
        this.level = 1;
        this.delay = 2;
        this.attempts = 3;
        this.LIMIT = 5;
        this.gameIsStart = false;
        this.answersCounter = 0;
        this.sequence = [];
        this.userAnswer = 0;
        this.currentAnswerIndex = 0;

        this.currentLevelLabel = new LevelLabel(this.level);

        this.attemptsItems = [];
        this.attemptsBlock = document.createElement("div");
        this.attemptsBlock.className = "row";
        for(let i = 0; i < this.attempts; i++)
        {
            const attempt = new Attempt().getInstance();
            this.attemptsBlock.appendChild(attempt);
            this.attemptsItems.push(attempt);
        }


        this.timer = new Timer();


        this.lamps = [];
        this.lampNumbers = [];
        for(let i = 0; i < this.LIMIT; i++)
        {
            const temp = [];
            for(let j = 0; j < this.LIMIT; j++)
            {
                const lamp = new Lamp(i * this.LIMIT + j).getInstance();
                this.lampNumbers.push(parseInt(lamp.dataset["orderNumber"]));
                lamp.addEventListener("click", (event) => {
                    const isDisable = event.currentTarget.getAttribute("disable");
                    if(!isDisable && this.gameIsStart)
                    {
                        this.userAnswer = parseInt(event.currentTarget.dataset["orderNumber"]);
                        console.log(this.userAnswer);
                        this.checkUserAnswer();
                    }
                });
                temp.push(lamp);
            }    
            this.lamps.push(temp);
        }
        console.log(this.lampNumbers);



        this.field = document.createElement("div");
        this.field.className = "flex-item";
        for(let i = 0; i < this.lamps.length; i++)
        {
            const fieldRow = document.createElement("div");
            fieldRow.className = "field-row";
            for(let j = 0; j < this.lamps[i].length; j++)
            {
                fieldRow.appendChild(this.lamps[i][j]);
            }
            this.field.appendChild(fieldRow);
        }


        this.progressBar = new ProgressBar();


        this.buttons = document.createElement("div");
        this.buttons.className = "buttons";
        this.startButton = new Button("Старт").getInstance();
        this.resetButton = new Button("Сброс").getInstance();
        this.settingsButton = new Button("Настройки").getInstance();
        this.buttons.appendChild(this.startButton);
        this.buttons.appendChild(this.resetButton);
        this.buttons.appendChild(this.settingsButton);

        this.modalWindow = new ModalWindow(this.lampNumbers.length);

        this.startButton.addEventListener("click", (event) =>
        {
            const isDisable = event.currentTarget.getAttribute("disable");
            if(!isDisable)
            {
                this.gameIsStart = true;
                this.makeLampSequence();
                this.timer.tick();
                this.timer.getInstance().addEventListener("timeOver", (event) =>
                {
                    console.log("Время вышло!");
                    this.gameOver();
                });
            }           
            event.currentTarget.setAttribute("disable", "disable");
            this.settingsButton.setAttribute("disable", "disable");
        });

        this.resetButton.addEventListener("click", (event) =>
        {
            this.gameIsStart = false;
            this.startButton.removeAttribute("disable");
            this.settingsButton.removeAttribute("disable");
            this.hideLamps();
            this.sequence = [];
            this.enableAllLamps();
            this.attemptsItems.forEach((item) =>
            {
                item.className = "attempt";
            });
            this.progressBar.reset();
            this.timer.stop();
            this.timer.reset();
        });

        this.settingsButton.addEventListener("click", (event) => 
        {
            const isDisable = event.currentTarget.getAttribute("disable");
            if(!isDisable)
            {
                this.modalWindow.show();
                this.modalWindow.getInstance().addEventListener("accept", (event) =>
                {
                    console.log(event.settings);
                    this.setSettings(event.settings);
                });
            }            
        });
    }

    makeLampSequence()
    {
        if(this.gameIsStart)
        {
            this.sequence = this.lampNumbers.slice();
            this.sequence.sort(() => Math.random() - 0.5);
            this.sequence = this.sequence.slice(0, this.level + 1);
            console.log(this.sequence);
            this.disableAllLamps();
    
            function* generatorLamp(sequence, self)
            {
                for(let i = 0; i < sequence.length; i++)
                {
                    console.log("yield ", self.lamps[Math.floor(sequence[i] / self.LIMIT)][sequence[i] % self.LIMIT]);  
                    yield self.lamps[Math.floor(sequence[i] / self.LIMIT)][sequence[i] % self.LIMIT];               
                }
            }
            let genObj  = generatorLamp(this.sequence, this);
            let prev = null;
            let interval = setInterval(() => {
                if(this.gameIsStart)
                {
                    if(prev)
                    {
                        prev.className = "lamp-block";
                    }
                    let next = genObj.next();
                    const value = next.value;
                    if(next.done)
                    {
                        clearInterval(interval);
                        console.log("End generator");
                        this.enableAllLamps();
                    }
                    else
                    {
                        console.log(next);
                        value.className = "light-lamp";
                        console.log("else block");
                        prev = value;
                    }
                }
                else
                {
                    clearInterval(interval);
                    console.log("Reset game");
                }
                
            },this.delay * 1000);
        }       
    }

    setSettings(settings)
    {
        this.level = settings.level || this.level;
        this.currentLevelLabel.changeTitle(this.level);
        this.delay = settings.delay || this.delay;
    }

    disableAllLamps()
    {
        this.lamps.forEach((element) =>
        {
            element.forEach((lamp) =>
            {
                lamp.setAttribute("disable", "disable");
            });
        });
    }

    enableAllLamps()
    {
        this.lamps.forEach((element) => {
            element.forEach((lamp) =>
            {
                lamp.removeAttribute("disable");
            });
        });
    }

    checkUserAnswer()
    {
        if(this.sequence[this.currentAnswerIndex] === this.userAnswer)
        {
            console.log("True answer");
            this.lamps[Math.floor(this.userAnswer / this.LIMIT)][this.userAnswer % this.LIMIT].className = "true-answer";
            this.currentAnswerIndex++;
            if(this.currentAnswerIndex === this.sequence.length)
            {
                this.hideLamps();
                console.log("Последовательность воспроизведена правильно!");
                this.progressBar.increase(this.LIMIT);
                this.resetCurrentAnswerIndex();
                this.answersCounter++;
                if(this.answersCounter === this.LIMIT)
                {
                    this.levelUp();
                    this.progressBar.reset();
                }
                this.makeLampSequence();               
            }           
        }
        else
        {
            console.log("Bad answer index = 0");
            this.resetCurrentAnswerIndex();
            console.log(typeof(this.attemptsBlock));
            this.attemptsItems[this.attempts - 1].className = "hiden";
            this.attempts--;
            this.hideLamps();
            if(this.attempts === 0)
            {
                this.gameOver();
                return;
            }
            this.makeLampSequence();
        }
    }

    hideLamps()
    {
        this.sequence.forEach((item) => {
            this.lamps[Math.floor(item / this.LIMIT)][item % this.LIMIT].className = "lamp-block";
        });
    }

    resetCurrentAnswerIndex()
    {
        this.currentAnswerIndex = 0;
    }

    levelUp()
    {
        this.level++;
        this.timer.addTime(15);
        this.answersCounter = 0;
        this.currentLevelLabel.changeTitle(this.level);
    }

    gameOver()
    {
        this.gameIsStart = false;
        this.hideLamps();
        this.sequence = [];
        this.enableAllLamps();
        this.timer.stop();
    }

    render()
    {
        const app = document.createElement("div");
        app.className = "container";
        app.appendChild(this.currentLevelLabel.getInstance());
        app.appendChild(this.attemptsBlock);
        app.appendChild(this.timer.getInstance());
        const mainContainer = document.createElement("section");
        mainContainer.className = "flex-container";
        mainContainer.appendChild(this.field);
        mainContainer.appendChild(this.progressBar.getInstance());
        app.appendChild(mainContainer);
        app.appendChild(this.buttons);
        app.appendChild(this.modalWindow.getInstance());
        return app;
    }
}

const root = document.querySelector("#root");
const app = new Application();
root.appendChild(app.render());