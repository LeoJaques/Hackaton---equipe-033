const emBreveBtns = document.querySelectorAll('.em_breve');

emBreveBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Essa funcionalidade está disponível em breve');
  });
});
