"use strict"

var chess = {
    numberLines:10,
    numberColumns:10,
    letters:["", "a", "b", "c", "d", "e", "f", "g", "h", ""],
    numbers:["", 8, 7, 6, 5, 4, 3, 2, 1, ""],
    figures:["&#9814;", "&#9816", "&#9815;", "&#9812;", "&#9813;", "&#9815;", "&#9816", "&#9814;", "&#9817;"],

    /**
     * Функция расставляет фигуры
     */
    addFigures: function () {
        var firstLine = document.querySelectorAll(".table-lines")[this.numberLines - 2];
        var secondLine = document.querySelectorAll(".table-lines")[this.numberLines - 3];
        var lastLine = document.querySelectorAll(".table-lines")[this.numberLines - 9];
        var penultLine = document.querySelectorAll(".table-lines")[this.numberLines - 8];
        for (var i = 0; i < this.figures.length - 1; i++) {
            firstLine.children[i + 1].innerHTML = this.figures[i];
            firstLine.children[i + 1].classList.add("table-lines-white-figures");
            secondLine.children[i + 1].innerHTML = this.figures[this.figures.length - 1];
            secondLine.children[i + 1].classList.add("table-lines-white-figures");
            lastLine.children[i + 1].innerHTML = this.figures[i];
            lastLine.children[i + 1].classList.add("table-lines-black-figures");
            penultLine.children[i + 1].innerHTML = this.figures[this.figures.length - 1];
            penultLine.children[i + 1].classList.add("table-lines-black-figures");
        }
    },

    /**
     * Функция создаёт шахматную доску
     */
    board ()    {
            var table = document.createElement("table");
            var script = document.querySelector("script");
            document.body.insertBefore(table, script);
            table.classList.add("table");
            var i = null,j = null, tr = null, td = null, span = null;
            for (i = 0; i < this.numberLines; i++) {
                tr = document.createElement("tr");
                table.append(tr);
                tr.classList.add("table-lines");
                if (i % 2 === 0 && i !== 0) {
                    tr.classList.add("even-line");
                }
                else if (i % 2 !== 0 && i !== 0 && i !== 9) {
                    tr.classList.add("odd-line")
                }
                for (j = 0; j < this.numberColumns; j++) {
                    td = document.createElement("td");
                    tr.append(td);
                    span = document.createElement("span");
                    td.append(span);
                    switch (i) {
                        case 0:
                            span.innerText = this.letters[j];
                            td.classList.add("table-lines-extreme");
                            span.classList.add("table-lines-extreme-span","table-lines-extreme-span-rotate");
                            break;
                        case this.numberLines - 1:
                            span.innerText = this.letters[j];
                            td.classList.add("table-lines-extreme");
                            span.classList.add("table-lines-extreme-span");
                            break;
                    }
                    switch (j) {
                        case 0:
                            span.innerText = this.numbers[i];
                            td.classList.add("table-lines-extreme");
                            span.classList.add("table-lines-extreme-span");
                            break;
                        case this.numberColumns - 1:
                            span.innerText = this.numbers[i];
                            td.classList.add("table-lines-extreme");
                            span.classList.add("table-lines-extreme-span","table-lines-extreme-span-rotate");
                            break;
                    }
                }
            }
        },

    /**
     * Функция запуска
     */
    run () {
        this.board();
        this.addFigures();
    },
}

chess.run();