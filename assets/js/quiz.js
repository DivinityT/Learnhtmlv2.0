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

// qst2 variable
var p_list_qst2_false = ["qst2-p2", "qst2-p5", "qst2-p6"];
var p_list_qst2_answer = ["qst2-p1",  "qst2-p3", "qst2-p4"];

function verif_quiz_qst2_bis(){
    if (getEl("qst2-p1").checked && getEl("qst2-p3").checked && getEl("qst2-p4").checked === true && getEl("qst2-p2").checked === false && getEl("qst2-p5").checked === false && getEl("qst2-p6").checked === false){
        return true
    }else {
        false
    }
}

function verif_quiz_qst2(){
    if (verif_quiz_qst2_bis() === true){
        // disable other answers buttons
        for (let element of p_list_qst2_false){
            getEl(element).disabled = true;
        }
        // disable other answer content
        for (let element of p_list_qst2_false){
            getEl(element+"c").className += " disabled";
        }
        // green tick
        for (let element of p_list_qst2_answer){
            getEl(element+ "icon").className = "quiz-true fa-solid fa-check"
        }
    }else{
        getEl("qst2-text").className = "";
        for (let element of p_list_qst2_false){
            if (getEl(element).checked === true) {
                // disable false answer button
                getEl(element).disabled = true;

                // disable false answer content
                getEl(element+"c").className += " disabled";

                // adding red cross
                getEl(element+"icon").className = "quiz-false fa-solid fa-xmark"
            }
        }
        for (let element of p_list_qst2_answer){
            if (getEl(element).checked === true) {
                // adding green tick
                getEl(element+"icon").className = "quiz-true fa-solid fa-check"
            }
    }
}
}

// question 1
var qst1_list = ["qst1-p1", "qst1-p2", "qst1-p3", "qst1-p4"];
var qst1_answer = "qst1-p2"

// question 3
var qst3_list = ["qst3-p1", "qst3-p2", "qst3-p3", "qst3-p4"];
var qst3_answer = "qst3-p3"

function verif_quiz1() {
    question_radio(qst1_list, qst1_answer)
    verif_quiz_qst2();
    question_radio(qst3_list, qst3_answer)
}   