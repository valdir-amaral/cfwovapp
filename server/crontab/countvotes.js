import cron from 'node-cron'
import PocketBase from 'pocketbase'
import express from 'express'
const app = express()
const port = process.env.PORT || 8080
const pb = new PocketBase('http://localhost:8090')

var mostVotedSkin, data, data2, donates, records

async function contarVotos() {
    records = await pb.collection('votos').getFullList(200)
    .then((res) => {
        const occurences = res.reduce((acc,curr) => {
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
    })
    const quests = await pb.collection('quests').getFirstListItem()
    if(quests === undefined) {
        const record = await pb.collection('quests').create({
            idQuest: mostVotedSkin,
            voteQtd: qtdVote
        })
    } else {
        const quest = await pb.collection('quests').update(quests.id, {
            idQuest: mostVotedSkin,
            voteQtd: qtdVote
        })
    }
    
    
}
contarVotos()
