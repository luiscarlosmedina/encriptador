/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function encripta() {
    dato = document.getElementById("valor-init");
    texto = dato.value;
    arr = Array.from(texto)
    if (arr.length >= 1) {
        i = 0
        while (i <= arr.length) {
            if (arr[i] == "a") {
                arr[i] = "ai";
            }
            if (arr[i] == "e") {
                arr[i] = "enter";
            }
            if (arr[i] == "i") {
                arr[i] = "imes";
            }
            if (arr[i] == "o") {
                arr[i] = "ober";
            }
            if (arr[i] == "u") {
                arr[i] = "ufat";
            }
            else {
                i++;
            }
        }
        text = arr.join("");


        newDiv = document.createElement("div");
        newDiv.classList.add("resulta-fin");
        newDiv.setAttribute("id", "final")

        newElement = document.createElement("textarea");
        newElement.setAttribute("readonly","readonly");
        newElement.setAttribute("id", "text-copy")
        newElement.classList.add("text-sale");
        newElement.textContent = text;

        newButton = document.createElement("input");
        newButton.setAttribute("type", "button");
        newButton.setAttribute("value", "Copiar");
        newButton.setAttribute("onclick", "copy()")
        newButton.classList.add("boton");

        document.getElementById("presentacion").style.display = "none";

        portada = document.getElementById("valor-sale").appendChild(newDiv);
        portada.appendChild(newElement);
        portada.appendChild(newButton);

        document.getElementById("valor-init").value = "";
    }
    else {
        document.getElementById("final").style.display = "none";
        document.getElementById("presentacion").style.display = "initial";
    }
}

function desencripta() {
    dato = document.getElementById("valor-init");
    texto = dato.value;
    var textf = texto.replace(/ai/igm, "a")
    var textf = textf.replace(/enter/igm, "e")
    var textf = textf.replace(/imes/igm, "i")
    var textf = textf.replace(/ober/igm, "o")
    var textf = textf.replace(/ufat/igm, "u")
    text = textf;

    newDiv = document.createElement("div");
    newDiv.classList.add("resulta-fin");
    newDiv.setAttribute("id", "final")

    newElement = document.createElement("textarea");
    newElement.setAttribute("id", "text-copy")
    newElement.setAttribute("readonly","readonly");
    newElement.classList.add("text-sale");
    newElement.textContent = text;

    newButton = document.createElement("input");
    newButton.setAttribute("type", "button");
    newButton.setAttribute("value", "Copiar");
    newButton.setAttribute("onclick", "copy()")
    newButton.classList.add("boton");

    document.getElementById("presentacion").style.display = "none";

    portada = document.getElementById("valor-sale").appendChild(newDiv);
    portada.appendChild(newElement);
    portada.appendChild(newButton);
}

function copy() {
    let copia = document.getElementById("text-copy");
    copia.select();
    document.execCommand("copy");
    location.reload();
}