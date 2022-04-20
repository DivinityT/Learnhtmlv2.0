var btn = document.getElementById("trollbutton");
var text = document.getElementById("trolltext")

btn.addEventListener('click', hideandseakk);

function hideandseakk() {
    setTimeout(hideandseak, 1200);
}

function hideandseak() {
    btn.innerHTML = "Lance toi... Mais sans tomber !"
    btn.href = "./classhub.html"
    btn.target = ""
}