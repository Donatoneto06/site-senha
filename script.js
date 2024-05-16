document.addEventListener("DOMContentLoaded", function() {
    var passwordForm = document.getElementById("passwordForm");
    var content = document.getElementById("content");
    var backButton = document.getElementById("backButton");

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var passwordInput = document.getElementById("passwordinput").value;
        var correctPassword = "123"; // Coloque sua senha correta aqui

        if (passwordInput === correctPassword) {
            content.style.display = "block";
            passwordForm.style.display = "none";
            enableLinks();
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    });

    backButton.addEventListener("click", function() {
        content.style.display = "none";
        passwordForm.style.display = "block";
    });

    function enableLinks() {
        var links = document.querySelectorAll("nav ul li a");
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function(event) {
                if (content.style.display !== "block") {
                    event.preventDefault();
                    alert("Por favor, insira a senha para acessar este conteúdo.");
                }
            });
        }
    }
});
