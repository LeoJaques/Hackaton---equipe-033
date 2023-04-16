const buttonForm = document.getElementById('form-button')

buttonForm.addEventListener('click', function (event) {
  event.preventDefault() // impede o comportamento padrão do link

  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value.trim()

  // Validar usuário e senha
  const user = 'joao@example.com'
  const pass = '123456'

  if (email === '' || password === '') {
    alert('Por favor, preencha todos os campos.')
  } else if (email === user && password === pass) {
    const link = document.createElement('a')
    link.href = '/pages/opportunities.html'
    link.dispatchEvent(new MouseEvent('click'))
  } else {
    alert('E-mail ou senha incorretos.')
  }
})
