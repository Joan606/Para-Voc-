// ==== CONTADOR DE DIAS JUNTOS ====
// Lembre: mês em JavaScript começa em 0 (janeiro = 0, fevereiro = 1, etc.)
// ===== CONTADOR DE DIAS JUNTOS (com animação) =====
const dataInicio = new Date(2025, 4, 24); // 24/05/2025
const hoje = new Date();

const diffMs = hoje - dataInicio;
const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
const totalDias = diffDias >= 0 ? diffDias : 0;

const spanDias = document.getElementById("diasJuntos");

if (spanDias) {
  let atual = 0;                        // começa do 0
  const duracao = 1500;                 // duração total da animação em ms
  const fps = 60;                       // “quadros” por segundo
  const intervalo = duracao / fps;
  const incremento = Math.max(1, Math.ceil(totalDias / fps));

  const timer = setInterval(() => {
    atual += incremento;

    if (atual >= totalDias) {
      atual = totalDias;               // garante que não passe
      clearInterval(timer);
    }

    spanDias.textContent = atual;

    spanDias.classList.add("pulse");
    spanDias.addEventListener("animationend", () => {
      spanDias.classList.remove("pulse");
    }, { once: true });

  }, intervalo);
}

// ==== MENSAGEM ALEATÓRIA ==== 

const mensagens = [
   "Desde o dia que te conheci, minha vida se tornou tão especial 💖",
  "Seu abraço é meu lugar favorito no mundo inteiro. 😍",
  "Nada em mim faz sentido sem você. 💕",
  "Obrigado por ser minha paz e meu lar. 🌙",
  "Eu te amo não só pelo que você é, mas pelo que você me faz ser. 💌",
  "Com você, a vida se torna tão colorida. 🌅💗",
];

// ===== MENSAGEM ALEATÓRIA COM DIGITAÇÃO =====
const btnMensagem = document.getElementById("btnMensagem");
const campoMensagem = document.getElementById("mensagemDoDia");

function digitarTexto(texto, elemento, velocidade = 40) {
  elemento.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    elemento.textContent += texto[i];
    i++;
    if (i >= texto.length) clearInterval(timer);
  }, velocidade);
}

if (btnMensagem && campoMensagem) {
  btnMensagem.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * mensagens.length);
    digitarTexto(mensagens[indice], campoMensagem, 45);
  });
}


  const fotos = document.querySelectorAll('.foto img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  fotos.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });


  
  // ===== MÚSICA + CORAÇÕES CAINDO =====
const btnMusica = document.getElementById("btnMusica");
const bgMusic = document.getElementById("bgMusic");
const heartsContainer = document.getElementById("heartsContainer");

let heartsInterval = null;

function criarCoracao() {
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  // posição e tamanho aleatórios
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.fontSize = 0.9 + Math.random() * 1.3 + "rem";

  heartsContainer.appendChild(heart);

  // remove depois que terminar de cair
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

function iniciarCoracoes() {
  if (!heartsInterval) {
    heartsInterval = setInterval(criarCoracao, 500);
  }
}

function pararCoracoes() {
  if (heartsInterval) {
    clearInterval(heartsInterval);
    heartsInterval = null;
  }
}

if (btnMusica && bgMusic) {
  btnMusica.addEventListener("click", async () => {
    try {
      if (bgMusic.paused) {
        await bgMusic.play();
        btnMusica.textContent = "⏸️ Pausar música";
        btnMusica.classList.add("playing");
        iniciarCoracoes();
      } else {
        bgMusic.pause();
        btnMusica.textContent = "🎵 Tocar música";
        btnMusica.classList.remove("playing");
        pararCoracoes();
      }
    } catch (e) {
      console.error("Erro ao tocar música:", e);
    }
  });
}



