/*

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*/

//url api
const api_url_mail = 'https://flynn.boolean.careers/exercises/api/random/mail'


//dom element

const mailListEl = document.getElementById("mailList")
const refreshMailEl = document.getElementById("refreshMail")

generateMail()


refreshMailEl.addEventListener('click', ()=>{
    return generateMail()
})







//functions
function generateMail() {
    for (let i = 0; i < 10; i++) {
        //api request
        axios.get(api_url_mail)
            .then(response => {
                const mail = response.data.response

                //dom population
                mailListEl.insertAdjacentHTML('beforeend', `
            <li class="list-group-item"> ${mail} </li>
            `)
            })
    }
}