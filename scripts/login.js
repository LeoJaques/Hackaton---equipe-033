const buttonForm = document.getElementById('form-button')
buttonForm.addEventListener('click', function (event) {

  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value.trim()

  // Validar usuário e senha
  const user = 'joao@example.com'
  const pass = '123456'

  if (email === '' || password === '') {
    alert('Por favor, preencha todos os campos.')
  } else if (email === user && password === pass) {
    window.location.href = '/pages/opportunities.html'
  } else {
    alert('E-mail ou senha incorretos.')
  }
})
