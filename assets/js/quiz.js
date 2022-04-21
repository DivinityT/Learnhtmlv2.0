// quiz1 : 

// adding EventListenner
var btn = document.getElementById("v-qz1");
btn.addEventListener('click', verif_quiz1);

// qst1 variable
var icontrue = "quiz-true fa fa-check";
var iconfalse = "quie-false fa fa-xmark";
var p_list_qst1 = ["qst1-p2", "qst1-p1", "qst1-p3", "qst1-p4"];


function verif_quiz_qst1() {
    //qst1
    if (document.getElementById("qst1-p3").checked === true){
        // disable buttons
        for (let buttons of p_list_qst1.filter(function(f) { return f !== "qst1-p3"})){
            document.getElementById(buttons).disabled = true;
        }

        // disable content
        for (let buttons of p_list_qst1.filter(function(f) { return f !== "qst1-p3"})){
            document.getElementById(buttons+"c").className += "disabled";
        }

        // green tick
        document.getElementById("qst1-p3icon").className = "quiz-true fa-solid fa-check"
    }

    else{
       for (let element of p_list_qst1){
        if (document.getElementById(element).checked === true){
            // disable buttons
            for (let buttons of p_list_qst1.filter(function(f) { return f !== element})){
                document.getElementById(buttons).disabled = true;
            }

            // disable content
            for (let buttons of p_list_qst1.filter(function(f) { return f !== element})){
                document.getElementById(buttons+"c").className += "disabled";
            }

            // red cross
            document.getElementById(element + "icon").className = "quiz-false fa fa-xmark"
            console.log(element+"test")
        }
    } 
    }
}

// qst3 variable
var p_list_qst3 = ["qst3-p2", "qst3-p1", "qst3-p3", "qst3-p4"];
function verif_quiz_qst3(){
    //qst3
    if (document.getElementById("qst3-p3").checked === true){
        // disable buttons
        for (let buttons of p_list_qst3.filter(function(f) { return f !== "qst3-p3"})){
            document.getElementById(buttons).disabled = true;
        }

        // disable content
        for (let buttons of p_list_qst3.filter(function(f) { return f !== "qst3-p3"})){
            document.getElementById(buttons+"c").className += " disabled";
        }

        // green tick
        document.getElementById("qst3-p3icon").className = "quiz-true fa-solid fa-check"
    }

    else{
       for (let element of p_list_qst3){
        if (document.getElementById(element).checked === true){
            // disable buttons
            for (let buttons of p_list_qst3.filter(function(f) { return f !== element})){
                document.getElementById(buttons).disabled = true;
            }

            // disable content
            for (let buttons of p_list_qst3.filter(function(f) { return f !== element})){
                document.getElementById(buttons+"c").className += " disabled";
            }

            // red cross
            document.getElementById(element + "icon").className = "quiz-false fa fa-xmark"
            console.log(element+"test")
        }
    } 
    }
}

function verif_quiz1() {
    verif_quiz_qst1();
    verif_quiz_qst3();
}