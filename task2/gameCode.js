//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var numberQuestions = 3; // количество вопросов
var answersArray = []; // массив с вопросами и ответами
var questinNumber = 0; // номер вопроса

event = outputQuestion(works.a00, works.a1, works.a2, works.a0); // выводим первый вопрос

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        questinNumber++;
        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.a00, works.a1);

        event = outputQuestion(works.b00, works.b1, works.b2, works.b0);

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                questinNumber++;
                answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.b00, works.b1);

                event = outputQuestion(works.d00, works.d1, works.d2, works.d0);

                switch (event) {
                    case 1:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d1);
                        break;
                    case 2:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d2);
                        break;
                    case -1:
                        break;
                }

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                questinNumber++;
                answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.b00, works.b2);

                event = outputQuestion(works.d00, works.d1, works.d2, works.d0);

                switch (event) {
                    case 1:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d1);
                        break;
                    case 2:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d2);
                        break;
                    case -1:
                        break;
                }
                break;
            case -1: // Второе действие
                break;
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        questinNumber++;
        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.a00, works.a2);

        event = outputQuestion(works.c00, works.c1, works.c2, works.c0);

        switch (event) {
            case 1: // Второе действие
                questinNumber++;
                answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.c00, works.c1);

                event = outputQuestion(works.d00, works.d1, works.d2, works.d0);

                switch (event) {
                    case 1:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d1);
                        break;
                    case 2:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d2);
                        break;
                    case -1:
                        break;
                }
                break;
            case 2: // Второе действие
                questinNumber++;
                answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.c00, works.c2);

                event = outputQuestion(works.d00, works.d1, works.d2, works.d0);

                switch (event) {
                    case 1:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d1);
                        break;
                    case 2:
                        questinNumber++;
                        answersArray[questinNumber - 1] = new CreateObjectStory(questinNumber, works.d00, works.d2);
                        break;
                    case -1:
                        break;
                }
                break;
            case -1: // Второе действие
                break;
        }
        break;
    case -1: // Первое действие
        break;
}
switch (event) {
    case 1:
    case 2:
        questinNumber = outputQuestion("Введите номер вопроса от 1 до ", numberQuestions, "\n", numberQuestions);
        if (questinNumber === -1) {
            break;
        }
        for (var i = 0; i < answersArray.length; i++) {
            if (questinNumber === answersArray[i].questionNumber) {
                alert("Номер вопроса: " + answersArray[i].questionNumber + "\nВопрос: " + answersArray[i].question + "\nОтвет: " + answersArray[i].answer);
                break;
            }
        }
}

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (!Number.isInteger(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

/**
 * Функция конструктор для создания объекта в истории
 * @param questionNumber номер вопроса
 * @param question вопрос
 * @param answer ответ
 *
 */
function CreateObjectStory(questionNumber, question, answer) {
    this.questionNumber = questionNumber;
    this.question = question;
    this.answer = answer;
}

/**
 * Функция выводит вопрос с вариантами ответов
 * @param question вопрос
 * @param answer1 ответ 1
 * @param answer2 ответ 2
 */
function outputQuestion (question, answer1, answer2, numberAnswer) {
    do {
        var ok = false;
        var event = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        } else {
            ok = isAnswer(numberAnswer, event);
        }
    } while (!ok);
    return event;
}


