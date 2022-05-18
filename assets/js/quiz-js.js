// general var
const questions_count = 5
const all_answers = [
    ["qst1-p1", "qst1-p2", "qst1-p3", "qst1-p4"],
    ["qst2-p2", "qst2-p5", "qst2-p6","qst2-p1", "qst2-p3", "qst2-p4"],
    ["qst3-p1", "qst3-p2", "qst3-p3", "qst3-p4"],
    ["qst4-p2", "qst4-p4", "qst4-p1", "qst4-p3"],
    ["qst5-p1", "qst5-p2", "qst5-p3", "qst5-p4"]
]

// simplification function
function getEl(element){
    return document.getElementById(element)
}

// adding EventListenner
var btn = getEl("v-qz1");
btn.addEventListener('click', verif_quiz1);

// sub text
function subtext(list) {
    for (let element of list){
        getEl(element).className = "subtext"
    }
}

// adding red cross
const iconfalse = "quiz-false fa fa-xmark";
function false_answer(question){
    getEl(question + "icon").className = iconfalse;
}

// adding green tick
const icontrue = "quiz-true fa fa-check";
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
            if(getEl(element).checked == true){
                false_answer(element)
            }
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

///////////////////////////////////////////////////////////////////////////
// check if question are not aswered and if so how many

const blank_answers_id = "blank_answers_text_id"
const blank_answers_text ="Il vous reste des question sans réponse ! ("
const verif_btn_id = "v-qz1"

function question_is_answered(list){
    if (list.some(id => getEl(id).checked == true)){
        return true
    }
}

function all_question_are_answered() {
    let status = 0
    for (let element of all_answers){
        if (question_is_answered(element)){
            status++
        }
    }
    if (status == questions_count){
        return true
    }else {
        return false
    }
}

function count_blank_answers(){
    let blank_answers_count = questions_count
    for (let element of all_answers){
        if (question_is_answered(element)){
            blank_answers_count--
        }
    }
    return blank_answers_count
}

function update_blank_answer_text(){
    getEl(blank_answers_id).innerHTML = blank_answers_text + count_blank_answers() + ")"
}

function verif_btn(value){
    if (value == "enable"){
        getEl(verif_btn_id).disabled = false
    }else {
        getEl(verif_btn_id).disabled = true
    }
}

function decide_verif_possibility(){
    console.log("verif possibility checked !")
    if (all_question_are_answered()){
        getEl("error:blank").className += " hiddenquiz"
        verif_btn("enable")
    }else {
        update_blank_answer_text()
        getEl("error:blank").className = "box alt2"
        verif_btn()
    }
}
decide_verif_possibility()

// Event listener
const body = document.body
body.addEventListener('input', decide_verif_possibility)

//////////////////////////////////////////////////////////////////////////

// question 1
var qst1_list = ["qst1-p1", "qst1-p2", "qst1-p3", "qst1-p4"];
var qst1_answer = "qst1-p2"

// question 2
var qst2_false = ["qst2-p2", "qst2-p5", "qst2-p6"];
var qst2_true = ["qst2-p1",  "qst2-p3", "qst2-p4"];

// question 3
var qst3_list = ["qst3-p1", "qst3-p2", "qst3-p3", "qst3-p4"];
var qst3_answer = "qst3-p3"

// question 4
var qst4_false = ["qst4-p2", "qst4-p4"]
var qst4_true = ["qst4-p1", "qst4-p3"]

// question 5
var qst5_list = ["qst5-p1", "qst5-p2", "qst5-p3", "qst5-p4"]
var qst5_answer = "qst5-p1"

// sub texts
const subtexts = ["subtext1", "subtext2", "subtext3", "subtext4", "subtext5"]

function verif_quiz1() {
    if (all_question_are_answered(all_answers)){
        question_radio(qst1_list, qst1_answer)
        multiple_choice(qst2_true, qst2_false)
        question_radio(qst3_list, qst3_answer)
        multiple_choice(qst4_true, qst4_false)
        question_radio(qst5_list, qst5_answer)
        subtext(subtexts)
    }else {
    }   
    
}

function verif_quiz1_dev() {
    question_radio(qst1_list, qst1_answer)
    multiple_choice(qst2_true, qst2_false)
    question_radio(qst3_list, qst3_answer)
    subtext(subtexts)
}

// cheat
function cheat(){
    for (let element of all_answers){
        for (let question of element){
            getEl(question).checked = true
        }
    }
    decide_verif_possibility()
}

getEl("cheat").addEventListener('click', cheat)