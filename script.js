const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    // Alterna o estado aberto/fechado
    item.classList.toggle("active");

    // Alterna o ícone +/-
    const icon = question.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "x" : "+";

    // Ajusta a altura para animação
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px"; // Define a altura máxima para o conteúdo

      // Rola suavemente para o conteúdo da resposta após um pequeno atraso
      setTimeout(() => {
        answer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200); // Atraso para permitir a transição de altura
    } else {
      answer.style.maxHeight = 0; // Reduz a altura máxima para 0
    }
  });
});

// Função de busca
document.getElementById('search').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  document.querySelectorAll('.faq-item').forEach(item => {
      const questionText = item.querySelector('.faq-question h2').innerText.toLowerCase();
      const answerText = item.querySelector('.faq-answer').innerText.toLowerCase();
      
      if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
          item.style.display = 'block'; // Mostra o item se encontrar correspondência
      } else {
          item.style.display = 'none'; // Esconde o item se não encontrar correspondência
      }
  });
});
