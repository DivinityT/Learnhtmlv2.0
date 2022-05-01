// simplification function
function getEl(element){
    return document.getElementById(element)
}

// adding EventListenner
var btn = getEl("v-qz1");
btn.addEventListener('click', verif_quiz1);

// adding red cross
var iconfalse = "quiz-false fa fa-xmark";
function false_answer(question){
    getEl(question + "icon").className = iconfalse;
}

// adding green tick
var icontrue = "quiz-true fa fa-check";
function true_answer(question) {
    getEl(question + "icon").className = icontrue;
}

// disable buttons
function disable_button(element) {
        getEl(element).disabled = true;
}

// disable content
function disable_content(element) {
        getEl(element + "c").className += " disabled";
}

// verify answer
function verify(answer) {
    if (getEl(answer).checked == true) {
        return true
    }else {
        false
    }
}

function question_radio(list, answer) {
    if (verify(answer) == true) {
        true_answer(answer)
        for (let button of list.filter(function(f) { return f !== answer})){
            disable_content(button);
            disable_button(button);
        }
    }else{
        for (let question of list){
            if (verify(question) == true){
                false_answer(question);
                for (let element of list.filter(function(f) { return f !== question})){
                    disable_content(element)
                    disable_button(element)
                }
            }
        }
    }
}

function multiple_choice(true_answers, false_answers) {
    const allChecked = true_answers.every(value =>{
    const element = document.getElementById(value)
    return element.checked
    })
    if (allChecked){
        for (let element of true_answers){
            true_answer(element)
            disable_button(element)
        }
        for (let element of false_answers){
            disable_content(element)
            disable_button(element)
        }
    }else{
        for (let element of true_answers){
            if (verify(element)){
                true_answer(element)
                disable_button(element)
            }else {
                false_answer(element)
                disable_button(element)
            }
        for (let element of false_answers){
            if (verify(element)){
                false_answer(element)
                disable_button(element)
                disable_content(element)
            }else {
                disable_button(element)
                disable_content(element)
            }
        }
        }
    }
}

// question 1
var qst1_list = ["qst1-p1", "qst1-p2", "qst1-p3", "qst1-p4"];
var qst1_answer = "qst1-p2"

// question 2
var qst2_false = ["qst2-p2", "qst2-p5", "qst2-p6"];
var qst2_true = ["qst2-p1",  "qst2-p3", "qst2-p4"];

// question 3
var qst3_list = ["qst3-p1", "qst3-p2", "qst3-p3", "qst3-p4"];
var qst3_answer = "qst3-p3"

function verif_quiz1() {
    question_radio(qst1_list, qst1_answer)
    multiple_choice(qst2_true, qst2_false)
    question_radio(qst3_list, qst3_answer)
}   