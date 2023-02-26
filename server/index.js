import cron from 'node-cron'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://localhost:8090')

var mostVotedSkin
//Conta os votos
async function contarVotos() {
    const records = await pb.collection('votos').getFullList(200)

    const occurences = records.reduce((acc,curr) => {
        return acc[curr.idmissao] ? ++acc[curr.idmissao] : acc[curr.idmissao] = 1, acc
    },{})
    
    let mostVoted = -Infinity 
    var winnerSkin = null
    for (let qtdVote in occurences) {
        if(occurences[qtdVote] > mostVoted) {
            mostVoted = occurences[qtdVote];
            winnerSkin = qtdVote
        }
    }
    mostVotedSkin = winnerSkin
    console.log(winnerSkin)
    return winnerSkin
   
}
cron.schedule('* * * * * *', contarVotos)

//Analisa quem pagou pelos votos e inclui na missão
cron.schedule('*/2 * * * * *', () => {
    if (!mostVotedSkin) return
    
})