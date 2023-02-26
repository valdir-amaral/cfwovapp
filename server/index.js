import cron from 'node-cron'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://localhost:8090')

let botID = 'lv54QwdhOaTdAKCBcVCobHu2a2LYInHmGFlXP1N1K6eCQEYiUjXKoMStIOnLRyZx'
let clanID = '8a1ead4a-2269-4ae8-95b3-afce4639bd15'

var mostVotedSkin, data, data2, donates, records
//Conta os votos
async function contarVotos() {
    records = await pb.collection('votos').getFullList(200)

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
    return winnerSkin
   
}
cron.schedule('* * * * * *', contarVotos)

//Analisa quem pagou pelos votos e inclui na missão
async function viewDonates() {
    const response = await fetch(`https://api.wolvesville.com/clans/${clanID}/ledger`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bot ${botID}`
        }
    })
    const json = await response.json()
    data = json
    donates = data.filter((item) => item.type === 'DONATE')


    const donationPerUser = {};

    donates.forEach((objeto) => {
    if (donationPerUser[objeto.playerUsername]) {
        donationPerUser[objeto.playerUsername] += objeto.gold;
        
    } else {
        donationPerUser[objeto.playerUsername] = objeto.gold;
    }
    
    });
    
    let doacoes = Object.entries(donationPerUser).map(([playerUsername, gold]) => ({ playerUsername, gold }));

    
    let resposta = await fetch(`https://api.wolvesville.com/clans/${clanID}/quests/history`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bot ${botID}`
        }
    })
    const json2 = await resposta.json()
    data2 = json2

    const contagemDoacoesPorUsuario = {};
    data2.forEach((objeto) => {
        objeto.participants.forEach((participant) => {
            if (contagemDoacoesPorUsuario[participant.username]) {
                contagemDoacoesPorUsuario[participant.username]++;
            } else {
                contagemDoacoesPorUsuario[participant.username] = 1;
            }
        })
    
    });

    let qtdMissoes = Object.entries(contagemDoacoesPorUsuario).map(([user, count]) => ({ user, count }));
    

    for (let i = 0; i < doacoes.length; i++) {
        let votouEContribuiu = false
        const doacao = doacoes[i];
        const username = doacao.playerUsername;
      
        // Verifica se o usuário está presente no array de votos (records)
        const index = records.findIndex((record) => record.user === username);
        if (index !== -1) {
            let id
            records.forEach((voto) => {
                if (voto.user == username) {
                    id = voto.idplayer
                }
            })
          // Obtém o número de missões que o jogador fez a partir do array qtdMissoes
          const missao = qtdMissoes.find((qtdMissoes) => qtdMissoes.user === username);
          const numMissoes = missao ? missao.count : 0;
      
          // Verifica se a quantidade de ouro doada é suficiente
          const totalGold = doacao.gold;
          votouEContribuiu = totalGold >= (700 * (numMissoes + 1));
          console.log(`${username}: ${totalGold} e ${numMissoes}`)
        
        //Ativa ou desativa a quest para a pessoa
        
        fetch(`https://api.wolvesville.com/clans/${clanID}/members/${id}/participateInQuests`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bot ${botID}`
            },
            body: JSON.stringify({"participateInQuests": votouEContribuiu})
        })
        .then((res) => res.json())
        .then((json) => console.log(json))
          
        }
      }
    }
viewDonates()
//cron.schedule('* * * * * *', viewDonates)