var inputElement = document.querySelector('#txtinput')
var imagem = document.querySelector('#imagemperfil')

function buscargit(){

    axios.get(`https://api.github.com/users/${inputElement.value}`)
    .then(res => {
        imagem.setAttribute('src', res.data.avatar_url) 
        document.getElementById('name').value = res.data.name
        document.getElementById('bio').value = res.data.bio
        document.getElementById('email').value = res.data.email
    })
    .catch(() => {
        alert('O ${inputElement.value} não foi encontrado')
    })
}
