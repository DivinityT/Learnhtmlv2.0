function multiple_choice(true_answer, false_answer) {
    const allChecked = true_answer.every(value =>{
    const element = document.getElementById(value)
    return element.checked
    })
    if (allChecked){
        
    }
}