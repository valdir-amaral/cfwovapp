
import PocketBase from 'pocketbase'
const pb = new PocketBase('http://localhost:8090')

let botID = 'lv54QwdhOaTdAKCBcVCobHu2a2LYInHmGFlXP1N1K6eCQEYiUjXKoMStIOnLRyZx'
let clanID = '8a1ead4a-2269-4ae8-95b3-afce4639bd15'

var data, donates, records

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
    donates.length = 50
    console.log(donates)

    //console.log(donates[0].creationTime.slice(0,10))
    const donationPerUser = {};

    const contributors = []
    donates.forEach((objeto) => {
    if (donationPerUser[objeto.playerUsername]) {
        return
        
    } else {
        contributors.push({playerUsername: objeto.playerUsername, gold: objeto.gold, criacao: objeto.creationTime.slice(0, 10)})
    }
    
    });
    console.log(contributors)

    records = await pb.collection('votos').getFullList(200)
    for (let i = 0; i < contributors.length; i++) {
        let votouEContribuiu = false
        const contributor = contributors[i];
        const username = contributor.playerUsername;
      
        // Verifica se o usuário está presente no array de votos (records)
        const index = records.findIndex((record) => record.user === username);
        if (index !== -1) {
            let id
            records.forEach((voto) => {
                if (voto.user == username) {
                    id = voto.idplayer
                }
            })
            // Verifica se a quantidade de ouro doada é suficiente e se a doação é recente (dois dias)
            const totalGold = contributor.gold;
            const diffInMs = new Date() - new Date(contributor.criacao)
            const diffInDays = Math.trunc(diffInMs / (1000*60*60*24))
            votouEContribuiu = totalGold >= 700 && diffInDays <= 3;
            console.log(`${username} doou ${totalGold} há ${diffInDays} dias. Pode fazer a próxima missão? ${votouEContribuiu}`)
        
            //Ativa a quest para a pessoa
            if(votouEContribuiu) {
                fetch(`https://api.wolvesville.com/clans/${clanID}/members/${id}/participateInQuests`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bot ${botID}`
                    },
                    body: JSON.stringify({"participateInQuests": true})
            })
            .then((res) => res.json())
            .then((json) => console.log(json))
            }
        }
    }
}
viewDonates()
