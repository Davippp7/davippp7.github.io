/*const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
  mensagem.textContent = "Você clicou no botão! 🎉";
  mensagem.style.color = "#00ffff";
});*/

const toggleTema = document.getElementById("toggleTema");

toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleTema.textContent = "🌙 Modo Escuro";
  } else {
    toggleTema.textContent = "☀️ Modo Claro";
  }
});

