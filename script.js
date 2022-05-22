let nomeusuario = document.querySelector('#txtinput')
let imagem = document.querySelector('#img-perfil')

let buscarGit = () => {

    axios.get('https://api.github.com/users/${nomeusuario.value}')
    .then(response => {

        imagem.setAttribute('src', response.data.avatar_url)

        if(response.data.name === null) document.querySelector('#name').innerHTML ='Sem nome'
        else document.querySelector('#name').innerHTML = 'Nome: ${response.data.name}'
        if(response.data.bio === null) document.querySelector('#bio').innerHTML ='Sem bio'
        else document.querySelector('#bio').innerHTML = 'Bio: ${response.data.name}'
        if(response.data.email === null) document.querySelector('#email').innerHTML ='Sem Email'
        else document.querySelector('#email').innerHTML = 'Email: ${response.data.name}'

        console.log(response)
    })
    .catch(() => {
        alert('O ${nomeusuario.value} não foi encontrado')
    })
}