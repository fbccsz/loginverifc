const emailsRegistrados = [
    "algo@gmail.com",
    "teste@gmail.com",
    "fb@hotmail.com.br"
];
function verificarLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (emailsRegistrados.includes(email)) {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";
    }
    else {
        mensagem.textContent = "Login não realizado";
        mensagem.style.color = "red";
    }
    return false;
}
