/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/attempt.js":
/*!***************************!*\
  !*** ./src/js/attempt.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Attempt; });\nclass Attempt\r\n{\r\n    constructor()\r\n    {\r\n        this.widget = document.createElement(\"div\");\r\n        this.widget.className = \"attempt\";\r\n    }\r\n\r\n    getInstance()\r\n    {\r\n        return this.widget;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/attempt.js?");

/***/ }),

/***/ "./src/js/button.js":
/*!**************************!*\
  !*** ./src/js/button.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\nclass Button\r\n{\r\n    constructor(label)\r\n    {\r\n        this.widget = document.createElement(\"button\");\r\n        this.widget.innerHTML = label;\r\n        this.widget.className = \"button\";\r\n    }\r\n\r\n    getInstance()\r\n    {\r\n        return this.widget;\r\n    }\r\n\r\n    enableState()\r\n    {\r\n        const isDisable = this.widget.getAttribute(\"disable\");\r\n        if(isDisable)\r\n        {\r\n            this.widget.removeAttribute(\"disable\");\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/button.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/js/timer.js\");\n/* harmony import */ var _attempt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attempt */ \"./src/js/attempt.js\");\n/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lamp */ \"./src/js/lamp.js\");\n/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar */ \"./src/js/progressbar.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ \"./src/js/button.js\");\n/* harmony import */ var _levelLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levelLabel */ \"./src/js/levelLabel.js\");\n/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalWindow */ \"./src/js/modalWindow.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Application\r\n{\r\n    constructor()\r\n    {\r\n        this.level = 1;\r\n        this.delay = 2;\r\n        this.attempts = 3;\r\n        this.LIMIT = 5;\r\n        this.gameIsStart = false;\r\n        this.answersCounter = 0;\r\n        this.sequence = [];\r\n        this.userAnswer = 0;\r\n        this.currentAnswerIndex = 0;\r\n\r\n        this.currentLevelLabel = new _levelLabel__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.level);\r\n\r\n        this.attemptsItems = [];\r\n        this.attemptsBlock = document.createElement(\"div\");\r\n        this.attemptsBlock.className = \"row\";\r\n        for(let i = 0; i < this.attempts; i++)\r\n        {\r\n            const attempt = new _attempt__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getInstance();\r\n            this.attemptsBlock.appendChild(attempt);\r\n            this.attemptsItems.push(attempt);\r\n        }\r\n\r\n\r\n        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n        this.lamps = [];\r\n        this.lampNumbers = [];\r\n        for(let i = 0; i < this.LIMIT; i++)\r\n        {\r\n            const temp = [];\r\n            for(let j = 0; j < this.LIMIT; j++)\r\n            {\r\n                const lamp = new _lamp__WEBPACK_IMPORTED_MODULE_2__[\"default\"](i * this.LIMIT + j).getInstance();\r\n                this.lampNumbers.push(parseInt(lamp.dataset[\"orderNumber\"]));\r\n                lamp.addEventListener(\"click\", (event) => {\r\n                    const isDisable = event.currentTarget.getAttribute(\"disable\");\r\n                    if(!isDisable && this.gameIsStart)\r\n                    {\r\n                        this.userAnswer = parseInt(event.currentTarget.dataset[\"orderNumber\"]);\r\n                        console.log(this.userAnswer);\r\n                        this.checkUserAnswer();\r\n                    }\r\n                });\r\n                temp.push(lamp);\r\n            }    \r\n            this.lamps.push(temp);\r\n        }\r\n        console.log(this.lampNumbers);\r\n\r\n\r\n\r\n        this.field = document.createElement(\"div\");\r\n        this.field.className = \"flex-item\";\r\n        for(let i = 0; i < this.lamps.length; i++)\r\n        {\r\n            const fieldRow = document.createElement(\"div\");\r\n            fieldRow.className = \"field-row\";\r\n            for(let j = 0; j < this.lamps[i].length; j++)\r\n            {\r\n                fieldRow.appendChild(this.lamps[i][j]);\r\n            }\r\n            this.field.appendChild(fieldRow);\r\n        }\r\n\r\n\r\n        this.progressBar = new _progressbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n\r\n        this.buttons = document.createElement(\"div\");\r\n        this.buttons.className = \"buttons\";\r\n        this.startButton = new _button__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Старт\").getInstance();\r\n        this.resetButton = new _button__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Сброс\").getInstance();\r\n        this.settingsButton = new _button__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Настройки\").getInstance();\r\n        this.buttons.appendChild(this.startButton);\r\n        this.buttons.appendChild(this.resetButton);\r\n        this.buttons.appendChild(this.settingsButton);\r\n\r\n        this.modalWindow = new _modalWindow__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.lampNumbers.length);\r\n\r\n        this.startButton.addEventListener(\"click\", (event) =>\r\n        {\r\n            const isDisable = event.currentTarget.getAttribute(\"disable\");\r\n            if(!isDisable)\r\n            {\r\n                this.gameIsStart = true;\r\n                this.makeLampSequence();\r\n                this.timer.tick();\r\n                this.timer.getInstance().addEventListener(\"timeOver\", (event) =>\r\n                {\r\n                    console.log(\"Время вышло!\");\r\n                    this.gameOver();\r\n                });\r\n            }           \r\n            event.currentTarget.setAttribute(\"disable\", \"disable\");\r\n            this.settingsButton.setAttribute(\"disable\", \"disable\");\r\n        });\r\n\r\n        this.resetButton.addEventListener(\"click\", (event) =>\r\n        {\r\n            this.gameIsStart = false;\r\n            this.startButton.removeAttribute(\"disable\");\r\n            this.settingsButton.removeAttribute(\"disable\");\r\n            this.hideLamps();\r\n            this.sequence = [];\r\n            this.enableAllLamps();\r\n            this.attemptsItems.forEach((item) =>\r\n            {\r\n                item.className = \"attempt\";\r\n            });\r\n            this.progressBar.reset();\r\n            this.timer.stop();\r\n            this.timer.reset();\r\n        });\r\n\r\n        this.settingsButton.addEventListener(\"click\", (event) => \r\n        {\r\n            const isDisable = event.currentTarget.getAttribute(\"disable\");\r\n            if(!isDisable)\r\n            {\r\n                this.modalWindow.show();\r\n                this.modalWindow.getInstance().addEventListener(\"accept\", (event) =>\r\n                {\r\n                    console.log(event.settings);\r\n                    this.setSettings(event.settings);\r\n                });\r\n            }            \r\n        });\r\n    }\r\n\r\n    makeLampSequence()\r\n    {\r\n        if(this.gameIsStart)\r\n        {\r\n            this.sequence = this.lampNumbers.slice();\r\n            this.sequence.sort(() => Math.random() - 0.5);\r\n            this.sequence = this.sequence.slice(0, this.level + 1);\r\n            console.log(this.sequence);\r\n            this.disableAllLamps();\r\n    \r\n            function* generatorLamp(sequence, self)\r\n            {\r\n                for(let i = 0; i < sequence.length; i++)\r\n                {\r\n                    console.log(\"yield \", self.lamps[Math.floor(sequence[i] / self.LIMIT)][sequence[i] % self.LIMIT]);  \r\n                    yield self.lamps[Math.floor(sequence[i] / self.LIMIT)][sequence[i] % self.LIMIT];               \r\n                }\r\n            }\r\n            let genObj  = generatorLamp(this.sequence, this);\r\n            let prev = null;\r\n            let interval = setInterval(() => {\r\n                if(this.gameIsStart)\r\n                {\r\n                    if(prev)\r\n                    {\r\n                        prev.className = \"lamp-block\";\r\n                    }\r\n                    let next = genObj.next();\r\n                    const value = next.value;\r\n                    if(next.done)\r\n                    {\r\n                        clearInterval(interval);\r\n                        console.log(\"End generator\");\r\n                        this.enableAllLamps();\r\n                    }\r\n                    else\r\n                    {\r\n                        console.log(next);\r\n                        value.className = \"light-lamp\";\r\n                        console.log(\"else block\");\r\n                        prev = value;\r\n                    }\r\n                }\r\n                else\r\n                {\r\n                    clearInterval(interval);\r\n                    console.log(\"Reset game\");\r\n                }\r\n                \r\n            },this.delay * 1000);\r\n        }       \r\n    }\r\n\r\n    setSettings(settings)\r\n    {\r\n        this.level = settings.level || this.level;\r\n        this.currentLevelLabel.changeTitle(this.level);\r\n        this.delay = settings.delay || this.delay;\r\n    }\r\n\r\n    disableAllLamps()\r\n    {\r\n        this.lamps.forEach((element) =>\r\n        {\r\n            element.forEach((lamp) =>\r\n            {\r\n                lamp.setAttribute(\"disable\", \"disable\");\r\n            });\r\n        });\r\n    }\r\n\r\n    enableAllLamps()\r\n    {\r\n        this.lamps.forEach((element) => {\r\n            element.forEach((lamp) =>\r\n            {\r\n                lamp.removeAttribute(\"disable\");\r\n            });\r\n        });\r\n    }\r\n\r\n    checkUserAnswer()\r\n    {\r\n        if(this.sequence[this.currentAnswerIndex] === this.userAnswer)\r\n        {\r\n            console.log(\"True answer\");\r\n            this.lamps[Math.floor(this.userAnswer / this.LIMIT)][this.userAnswer % this.LIMIT].className = \"true-answer\";\r\n            this.currentAnswerIndex++;\r\n            if(this.currentAnswerIndex === this.sequence.length)\r\n            {\r\n                this.hideLamps();\r\n                console.log(\"Последовательность воспроизведена правильно!\");\r\n                this.progressBar.increase(this.LIMIT);\r\n                this.resetCurrentAnswerIndex();\r\n                this.answersCounter++;\r\n                if(this.answersCounter === this.LIMIT)\r\n                {\r\n                    this.levelUp();\r\n                    this.progressBar.reset();\r\n                }\r\n                this.makeLampSequence();               \r\n            }           \r\n        }\r\n        else\r\n        {\r\n            console.log(\"Bad answer index = 0\");\r\n            this.resetCurrentAnswerIndex();\r\n            console.log(typeof(this.attemptsBlock));\r\n            this.attemptsItems[this.attempts - 1].className = \"hiden\";\r\n            this.attempts--;\r\n            this.hideLamps();\r\n            if(this.attempts === 0)\r\n            {\r\n                this.gameOver();\r\n                return;\r\n            }\r\n            this.makeLampSequence();\r\n        }\r\n    }\r\n\r\n    hideLamps()\r\n    {\r\n        this.sequence.forEach((item) => {\r\n            this.lamps[Math.floor(item / this.LIMIT)][item % this.LIMIT].className = \"lamp-block\";\r\n        });\r\n    }\r\n\r\n    resetCurrentAnswerIndex()\r\n    {\r\n        this.currentAnswerIndex = 0;\r\n    }\r\n\r\n    levelUp()\r\n    {\r\n        this.level++;\r\n        this.timer.addTime(15);\r\n        this.answersCounter = 0;\r\n        this.currentLevelLabel.changeTitle(this.level);\r\n    }\r\n\r\n    gameOver()\r\n    {\r\n        this.gameIsStart = false;\r\n        this.hideLamps();\r\n        this.sequence = [];\r\n        this.enableAllLamps();\r\n        this.timer.stop();\r\n    }\r\n\r\n    render()\r\n    {\r\n        const app = document.createElement(\"div\");\r\n        app.className = \"container\";\r\n        app.appendChild(this.currentLevelLabel.getInstance());\r\n        app.appendChild(this.attemptsBlock);\r\n        app.appendChild(this.timer.getInstance());\r\n        const mainContainer = document.createElement(\"section\");\r\n        mainContainer.className = \"flex-container\";\r\n        mainContainer.appendChild(this.field);\r\n        mainContainer.appendChild(this.progressBar.getInstance());\r\n        app.appendChild(mainContainer);\r\n        app.appendChild(this.buttons);\r\n        app.appendChild(this.modalWindow.getInstance());\r\n        return app;\r\n    }\r\n}\r\n\r\nconst root = document.querySelector(\"#root\");\r\nconst app = new Application();\r\nroot.appendChild(app.render());\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/lamp.js":
/*!************************!*\
  !*** ./src/js/lamp.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lamp; });\nclass Lamp\r\n{\r\n    constructor(orderNumber)\r\n    {\r\n        this.widget = document.createElement(\"div\");\r\n        this.widget.className = \"lamp-block\";\r\n        this.widget.dataset.orderNumber = orderNumber;\r\n    }\r\n\r\n    getInstance()\r\n    {\r\n        return this.widget;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/lamp.js?");

/***/ }),

/***/ "./src/js/levelLabel.js":
/*!******************************!*\
  !*** ./src/js/levelLabel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LevelLabel; });\nclass LevelLabel\r\n{\r\n    constructor(level)\r\n    {\r\n        this.widget = document.createElement(\"h2\");\r\n        this.changeTitle(level);\r\n    }\r\n\r\n    getInstance()\r\n    {\r\n        return this.widget;\r\n    }\r\n\r\n    changeTitle(level)\r\n    {\r\n        this.widget.innerHTML = `Текущий уровень ${level}`;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/levelLabel.js?");

/***/ }),

/***/ "./src/js/modalWindow.js":
/*!*******************************!*\
  !*** ./src/js/modalWindow.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ModalWindow; });\nclass ModalWindow\r\n{\r\n    constructor(maxLevel)\r\n    {\r\n        this.widget = document.createElement(\"div\");\r\n        this.widget.className = \"modal\";\r\n        this.content = document.createElement(\"div\");\r\n        this.content.className = \"modal-content\";\r\n        const headerLabel = document.createElement(\"h2\");\r\n        headerLabel.innerHTML = \"Окно настроек\";\r\n\r\n        const settingsSection = document.createElement(\"section\");\r\n\r\n        const levelBlock = document.createElement(\"div\");\r\n        levelBlock.className = \"flex-row\";\r\n        const levelLabel = document.createElement(\"label\");\r\n        levelLabel.className = \"flex-column\";\r\n        levelLabel.innerHTML = \"Выберите уровень\";\r\n        levelLabel.setAttribute(\"for\", \"levelId\");\r\n        this.levelInput = document.createElement(\"input\");\r\n        this.levelInput.className = \"flex-column\";\r\n        this.levelInput.setAttribute(\"id\", \"levelId\");\r\n        this.levelInput.setAttribute(\"type\", \"number\");\r\n        this.levelInput.setAttribute(\"min\", 1);\r\n        this.levelInput.setAttribute(\"max\", maxLevel);\r\n        this.levelInput.value = 1;\r\n\r\n        levelBlock.appendChild(levelLabel);\r\n        levelBlock.appendChild(this.levelInput);\r\n\r\n        const delayBlock = document.createElement(\"div\");\r\n        delayBlock.className = \"flex-row\";\r\n        const delayLabel = document.createElement(\"label\");\r\n        delayLabel.className = \"flex-column\";\r\n        delayLabel.innerHTML = \"Выберите задержку между загораниями в секкундах\";\r\n        delayLabel.setAttribute(\"for\", \"delayId\");\r\n        this.delayInput = document.createElement(\"input\");\r\n        this.delayInput.className = \"flex-column\";\r\n        this.delayInput.setAttribute(\"id\", \"delayId\");\r\n        this.delayInput.setAttribute(\"type\", \"number\");\r\n        this.delayInput.setAttribute(\"min\", 1);\r\n        this.delayInput.setAttribute(\"max\", 4);\r\n        this.delayInput.value = 2;\r\n\r\n        delayBlock.appendChild(delayLabel);\r\n        delayBlock.appendChild(this.delayInput);\r\n\r\n        const buttonsBlock = document.createElement(\"div\");\r\n        buttonsBlock.classList = \"flex-row\";\r\n        this.acceptButton = document.createElement(\"button\");\r\n        this.acceptButton.className = \"button-column\";\r\n        this.acceptButton.innerHTML = \"Принять\";\r\n        this.cancelButton = document.createElement(\"button\");\r\n        this.cancelButton.className = \"button-column\";\r\n        this.cancelButton.innerHTML = \"Отмена\";\r\n        buttonsBlock.appendChild(this.acceptButton);\r\n        buttonsBlock.appendChild(this.cancelButton);\r\n\r\n        settingsSection.appendChild(levelBlock);\r\n        settingsSection.appendChild(delayBlock);\r\n        settingsSection.appendChild(buttonsBlock);\r\n\r\n        this.content.appendChild(headerLabel);\r\n        this.content.appendChild(settingsSection);\r\n        this.widget.appendChild(this.content);\r\n\r\n        this.cancelButton.addEventListener(\"click\", (event) =>\r\n        {\r\n            this.widget.classList.toggle(\"hide\");\r\n            this.widget.classList.toggle(\"block\");\r\n            this.setDefaultValues();\r\n        });\r\n\r\n        this.acceptButton.addEventListener(\"click\", () =>\r\n        {\r\n            let event = new Event(\"accept\");\r\n            event.settings = {\r\n                level: parseInt(this.levelInput.value),\r\n                delay: parseInt(this.delayInput.value)\r\n            };\r\n            this.widget.dispatchEvent(event);\r\n            this.widget.classList.toggle(\"hide\");\r\n            this.widget.classList.toggle(\"block\");\r\n            \r\n            \r\n            this.setDefaultValues();\r\n            console.log(\"accept event\");\r\n        });\r\n    }\r\n\r\n    getInstance()\r\n    {\r\n        return this.widget;\r\n    }\r\n\r\n    show()\r\n    {\r\n        this.widget.classList.toggle(\"block\");\r\n    }\r\n\r\n    setDefaultValues()\r\n    {\r\n        this.levelInput.value = 1;\r\n        this.delayInput.value = 2;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/modalWindow.js?");

/***/ }),

/***/ "./src/js/progressbar.js":
/*!*******************************!*\
  !*** ./src/js/progressbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProgressBar; });\nclass ProgressBar\r\n{\r\n    constructor()\r\n    {\r\n        this.widget = document.createElement(\"div\");\r\n        this.text = document.createElement(\"p\");\r\n        this.text.className = \"vertical-text\";\r\n        this.widget.appendChild(this.text);\r\n        this.widget.className = \"progressbar flex-item\";\r\n        this.text.innerHTML = \"Прогресс\";\r\n        this.widget.dataset.percent = 0;\r\n    }\r\n\r\n    getInstance()\r\n    {\r\n        return this.widget;\r\n    }\r\n\r\n    increase(grow)\r\n    {\r\n        const computedStyle = getComputedStyle(this.widget);    \r\n        const currentBlockHeight = parseInt(computedStyle.getPropertyValue(\"height\"));\r\n        const addHeight = currentBlockHeight / grow;\r\n        const height = parseInt(computedStyle.getPropertyValue(\"--block-height\"));\r\n        if(height + addHeight <= currentBlockHeight)\r\n        {\r\n            this.widget.style.setProperty(\"--block-height\", height + addHeight + \"px\");\r\n        }\r\n        else\r\n        {\r\n            this.widget.style.setProperty(\"--block-height\", currentBlockHeight + \"px\");\r\n            console.log(\"overflow\");\r\n        }\r\n    }\r\n\r\n    reset()\r\n    {\r\n        this.widget.style.setProperty(\"--block-height\", 0);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/progressbar.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Timer; });\nclass Timer \r\n{\r\n    constructor()\r\n    {\r\n        this.SECONDS_PER_MINUTE = 60;\r\n        this.widget = document.createElement(\"div\");\r\n        this.widget.className = \"timer\";\r\n        this.timerId = null;\r\n        this.reset();\r\n    }\r\n\r\n    getInstance()\r\n    {\r\n        return this.widget;\r\n    }\r\n\r\n    updateTime()\r\n    {\r\n        const SECONDS_PER_TEN_MINUTES = 10 * this.SECONDS_PER_MINUTE;\r\n        this.seconds--;\r\n        this.widget.innerHTML = `${this.seconds < SECONDS_PER_TEN_MINUTES ? \"0\" : \"\"}${Math.floor(this.seconds / this.SECONDS_PER_MINUTE)}\r\n                                : ${this.seconds % this.SECONDS_PER_MINUTE < 10 ? \"0\" : \"\"}${this.seconds % this.SECONDS_PER_MINUTE}`;\r\n    }\r\n\r\n    tick()\r\n    {\r\n        this.timerId = setInterval(() => {\r\n            this.updateTime();\r\n            if(this.seconds === 0)\r\n            {\r\n                clearInterval(this.timerId);\r\n                console.log(\"Clear interval\");\r\n                let event = new Event(\"timeOver\");\r\n                this.widget.dispatchEvent(event);\r\n            }\r\n        }, 1000);\r\n    }\r\n\r\n    stop()\r\n    {\r\n        clearInterval(this.timerId);\r\n    }\r\n\r\n    reset()\r\n    {\r\n        this.seconds = 91;\r\n        this.updateTime();\r\n    }\r\n\r\n    addTime(time)\r\n    {\r\n        this.seconds += time;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/timer.js?");

/***/ })

/******/ });