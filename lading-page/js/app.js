function enviarEmail() {
    var email = document.querySelector('.digitar').value;

  if (email == null || email == "") return

    if (localStorage.getItem(email)) {
        alert("E-mail já cadastrado!");
    } else {
        localStorage.setItem(email, "gravado");
        alert("Cadastro realizado com sucesso!")
    }
} 