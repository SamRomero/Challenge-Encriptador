function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = ""; 

    // Número de posiciones a desplazar en el alfabeto
    var shift = 3; // Puedes ajustar este valor según tu preferencia

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        var encryptedCharCode;

        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            encryptedCharCode = (charCode - 65 + shift) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            encryptedCharCode = (charCode - 97 + shift) % 26 + 97;
        } else { // Otros caracteres (no letras)
            encryptedCharCode = charCode;
        }

        encryptedText += String.fromCharCode(encryptedCharCode);
    }

    displayResult(encryptedText);
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var decryptedText = ""; 

    // Número de posiciones a desplazar en el alfabeto
    var shift = 3; // Debe ser el mismo valor que se usó para encriptar

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        var decryptedCharCode;

        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            decryptedCharCode = (charCode - 65 - shift + 26) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            decryptedCharCode = (charCode - 97 - shift + 26) % 26 + 97;
        } else { // Otros caracteres (no letras)
            decryptedCharCode = charCode;
        }

        decryptedText += String.fromCharCode(decryptedCharCode);
    }

    displayResult(decryptedText);
}

function displayResult(result) {
    var outputArea = document.getElementById("outputArea");
    var outputText = document.getElementById("outputText");

    outputText.textContent = result;
    outputArea.classList.remove("hidden");
    outputArea.style.display = "block";
    outputText.style.display = "block";
}

