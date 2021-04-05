"use strict"

var settings = {
    numberRows: 25,
    numberCols: 25,
    direction: "y-",
    snakeSpeed: 200,
    timeFood: 500,
    timeBomb: 10000,
    timeFirstBomb: 600,
};

var progressGame = {
    settings,
    snake: [],
    score: null,
    moveInt: null,
    createBombInt: null,
    init() {
        this.generationGamesField(this.settings.numberRows, this.settings.numberCols);
        document.querySelector(".button-play").addEventListener("click", this.gameStart);
        document.querySelector(".button-replay").addEventListener("click", this.refresh );
        addEventListener("keydown", this.getDirection);
    },
    /**
     * генерирует игровое поле
     */
    generationGamesField(rows, cols)  {
        var table = document.createElement("table"),
        tr,cell;
        document.querySelector(".games-field").appendChild(table);
        for (var i = 0; i < rows; i++) {
            tr = document.createElement("tr");
            for (var j = 0; j < cols; j++) {
                cell = tr.appendChild(document.createElement("td"));
                cell.classList.add("game-field-cell", "coord-" + i + "-" + j);
            }
            table.appendChild(tr);
        }
        document.querySelector(".wrp").insertAdjacentHTML("afterbegin", "<div class='score-board'><span>результат&#58;</span></div>");
    },
    /**
     * первоначальное расположение змейки
     */
    gameStart() {
        var x = Math.floor(progressGame.settings.numberCols / 2);
        var y = Math.floor(progressGame.settings.numberRows / 2);
        //хвост
        progressGame.snake.push(document.querySelector(".coord-" + (y + 1) + "-" + x));
        progressGame.snake[progressGame.snake.length - 1].classList.add("field-snake");
        //голова
        progressGame.snake.push(document.querySelector(".coord-" + y + "-" + x));
        progressGame.snake[progressGame.snake.length - 1].classList.add("field-snake");

        progressGame.moveInt = setInterval(progressGame.move, progressGame.settings.snakeSpeed);
        progressGame.createBombInt = setInterval(progressGame.createBomb, progressGame.settings.timeBomb);
        setTimeout(progressGame.createBomb, progressGame.settings.timeFirstBomb);
        setTimeout(progressGame.createFood, progressGame.settings.timeFood);
    },
    /**
     * изменяет направление в зависимости от нажатой клавиши
     * @param e
     */
    getDirection(e) {
        console.log(e);
        switch (e.keyCode) {
            case 38:
                if (progressGame.settings.direction === "y+") {
                    break;
                }
                progressGame.settings.direction = "y-";
                break;
            case 40:
                if (progressGame.settings.direction === "y-") {
                    break;
                }
                progressGame.settings.direction = "y+";
                break;
            case 37:
                if (progressGame.settings.direction === "x+") {
                    break;
                }
                progressGame.settings.direction = "x-";
                break;

            case 39:
                if (progressGame.settings.direction === "x-") {
                    break;
                }
                progressGame.settings.direction = "x+";
                break;
        }
    },
    /**
     * движение змейки
     * newUnit новая ячейка змейки
     * arrClass массив для нахождения ячейки с головой змейки
     */
    move() {
        var arrClass = progressGame.snake[progressGame.snake.length - 1].getAttribute("class").split(" "),
        newUnit;
        arrClass = arrClass[1].split("-");
        switch (progressGame.settings.direction) {
            case "y+":
                if (+arrClass[1] === progressGame.settings.numberRows - 1) {
                    arrClass[1] = -1;
                }
                progressGame.snake.push(document.querySelector(".coord-" + (+arrClass[1] + 1) + "-" + arrClass[2]));
                newUnit = progressGame.snake[progressGame.snake.length - 1];
                progressGame.finishGame(newUnit);
                newUnit.classList.add("field-snake");
                break;
            case "y-":
                if (+arrClass[1] === 0) {
                    arrClass[1] = progressGame.settings.numberRows;
                }
                progressGame.snake.push(document.querySelector(".coord-" + (arrClass[1] - 1) + "-" + arrClass[2]));
                newUnit = progressGame.snake[progressGame.snake.length - 1];
                progressGame.finishGame(newUnit);
                newUnit.classList.add("field-snake");
                break;
            case "x+":
                if (+arrClass[2] === progressGame.settings.numberCols - 1) {
                    arrClass[2] = -1;
                }
                progressGame.snake.push(document.querySelector(".coord-" + arrClass[1] + "-" + (+arrClass[2] + 1)));
                newUnit = progressGame.snake[progressGame.snake.length - 1];
                progressGame.finishGame(newUnit);
                newUnit.classList.add("field-snake");
                break;
            case "x-":
                if (+arrClass[2] === 0) {
                    arrClass[2] = progressGame.settings.numberCols;
                }
                progressGame.snake.push(document.querySelector(".coord-" + arrClass[1] + "-" + (arrClass[2] - 1)));
                newUnit = progressGame.snake[progressGame.snake.length - 1];
                progressGame.finishGame(newUnit);
                newUnit.classList.add("field-snake");
                break;
        }
        progressGame.removeTail();
    },
    /**
     * если съели еду ,то удаляем хвост
     */
    removeTail() {
        if (progressGame.foodCheck()) {
            return;
        }else{
            var delTail = progressGame.snake.splice(0, 1)[0];
            delTail.classList.remove("field-snake");
        }
    },
    /**
     * проверка на еду
     * @returns {boolean}
     */
    foodCheck() {
        if (progressGame.snake[progressGame.snake.length - 1] === document.querySelector(".food-cell")) {
            document.querySelector(".food-cell").classList.remove("food-cell");
            setTimeout(progressGame.createFood, progressGame.settings.timeFood);
            progressGame.showScore();
            return true;
        }else{
            return false;
        }
    },
    /**
     * создание еды
     * food ячейка с едой
     * x, y координаты ячейки с едой
     */
    createFood() {
        var food, x, y;
        if (!document.querySelector(".food-cell")) {
            while (true) {
                y = Math.floor(Math.random() * progressGame.settings.numberRows );
                x = Math.floor(Math.random() * progressGame.settings.numberCols );
                food = document.querySelector(".coord-" + y + "-" + x);
                //проверка на змейку
                if (!progressGame.snakeCheck(food)) {
                    food.classList.add("food-cell");
                    return;
                }
            }
        }
    },
    /**
     * функция проверки на змейку
     * @param food новая ячейка для еды
     * @returns {boolean}
     */
    snakeCheck(food) {
        var check = progressGame.snake.includes(food) ? true : false;
        return check;
    },
    /**
     * показывает текущий результат
     */
    showScore() {
        progressGame.score += 1;
        document.querySelector(".score-board").children[0].innerHTML = "результат&#58 " + progressGame.score;
    },
    /**
     * создание препятствий
     */
    createBomb() {
        var bomb, x, y;
        while (true) {
            y = Math.floor(Math.random() * progressGame.settings.numberRows );
            x = Math.floor(Math.random() * progressGame.settings.numberCols );
            bomb = document.querySelector(".coord-" + y + "-" + x);
            //проверка на змейку и корм
            if (!progressGame.snakeCheck(bomb) && !bomb.classList.contains("food-cell")) {
                // if (document.querySelector(".bomb")) {
                //     document.querySelector(".bomb").innerHTML = "";
                //     document.querySelector(".bomb").classList.remove("bomb");
                // };
                bomb.classList.add("bomb");
                bomb.innerHTML = "&#128163";
                return;
            }
        }
    },
    /**
     * завершение игры
     * @param newUnit
     */
    finishGame(newUnit) {
        var arrPrevSnake = progressGame.snake.slice(0, progressGame.snake.length - 1);
        if (arrPrevSnake.includes(newUnit) || newUnit.classList.contains("bomb")) {
            clearInterval(progressGame.moveInt);
            clearInterval(progressGame.createBombInt);
            document.querySelector(".score-board").children[0].innerHTML = "игра окончена , ваш результат&#58 " + progressGame.score;
        }
        var check = arrPrevSnake.includes(newUnit);
    },
    refresh() {
        location.reload();
    }
};

progressGame.init();