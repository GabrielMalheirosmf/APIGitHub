var inputElement = document.querySelector('git')

function searchUser(){
    axios.get('https://api.github.com/users/${inputElement.value}/repos')
    .then(res => {

        if(!res.ok){
            alert('o Usuario $(imputElement.value) não existe!')
        }
        var data = await res.json()
        data.map(item => {
            let li = document.createElement('li')
            
            li.innerHTML = `
            <span> ${avatar_url.toUpperCase()}</strong>
            <strong>${item.name.toUpperCase()}</strong>
            <span>data Criação:
                ${Intl.DateTimeFormat('pt-br')
                .format(new Date(item.created_at))}
            </span>
            `

            ul.appendChild(li)

              })

    }).catch(e => console.log(e)) 


    
}

getApiGitHub()