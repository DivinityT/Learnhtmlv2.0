let numberOfLikes = 10;
numberOfLikes++;  // cela fait 11
numberOfLikes--; // et on revient à 10...qui n'a pas aimé mon article ?


// simplification function
function getEl(element){
    return document.getElementById(element)
}
// quiz1 : S

// adding EventListenner
var btn = getEl("v-qz1");
btn.addEventListener('click', verif_quiz1);

// qst1 variable
var icontrue = "quiz-true fa fa-check";
var iconfalse = "quie-false fa fa-xmark";
var p_list_qst1 = ["qst1-p2", "qst1-p1", "qst1-p3", "qst1-p4"];


function verif_quiz_qst1() {
    //qst1
    if (getEl("qst1-p3").checked === true){
        // disable buttons
        for (let buttons of p_list_qst1.filter(function(f) { return f !== "qst1-p3"})){
            getEl(buttons).disabled = true;
        }

        // disable content
        for (let buttons of p_list_qst1.filter(function(f) { return f !== "qst1-p3"})){
            getEl(buttons+"c").className += "disabled";
        }

        // green tick
        getEl("qst1-p3icon").className = "quiz-true fa-solid fa-check"
    }

    else{
       for (let element of p_list_qst1){
        if (getEl(element).checked === true){
            // disable buttons
            for (let buttons of p_list_qst1.filter(function(f) { return f !== element})){
                getEl(buttons).disabled = true;
            }

            // disable content
            for (let buttons of p_list_qst1.filter(function(f) { return f !== element})){
                getEl(buttons+"c").className += "disabled";
            }

            // red cross
            getEl(element + "icon").className = "quiz-false fa fa-xmark"
            console.log(element+"test")
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

// qst3 variable
var p_list_qst3 = ["qst3-p2", "qst3-p1", "qst3-p3", "qst3-p4"];
function verif_quiz_qst3(){
    //qst3
    if (getEl("qst3-p3").checked === true){
        // disable buttons
        for (let buttons of p_list_qst3.filter(function(f) { return f !== "qst3-p3"})){
            getEl(buttons).disabled = true;
        }

        // disable content
        for (let buttons of p_list_qst3.filter(function(f) { return f !== "qst3-p3"})){
            getEl(buttons+"c").className += " disabled";
        }

        // green tick
        getEl("qst3-p3icon").className = "quiz-true fa-solid fa-check"

    }else{
       for (let element of p_list_qst3){
        if (getEl(element).checked === true){
            // disable buttons
            for (let buttons of p_list_qst3.filter(function(f) { return f !== element})){
                getEl(buttons).disabled = true;
            }

            // disable content
            for (let buttons of p_list_qst3.filter(function(f) { return f !== element})){
                getEl(buttons+"c").className += " disabled";
            }

            // red cross
            getEl(element + "icon").className = "quiz-false fa fa-xmark"
            console.log(element+"test")
        }
    } 
    }
}

function verif_quiz1() {
    verif_quiz_qst1();
    verif_quiz_qst2();
    verif_quiz_qst3();
    }