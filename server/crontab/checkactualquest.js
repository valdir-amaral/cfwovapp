import cron from 'node-cron'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090');

let botID = 'lv54QwdhOaTdAKCBcVCobHu2a2LYInHmGFlXP1N1K6eCQEYiUjXKoMStIOnLRyZx';
let clanID = '8a1ead4a-2269-4ae8-95b3-afce4639bd15';

var cont = 0
async function checkActualQuest() {
    console.log('Checado')
    fetch(`https://api.wolvesville.com/clans/${clanID}/quests/active`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bot ${botID}`
        }
    })
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        console.log(json.tierFinished)
        let participants = json.participants
        participants.sort(function(a,b) {
            return b.xp - a.xp
        })
        let mensagem = `Uma etapa da missão foi concluída, obrigado pela participação de todos!\n\nClassificação:\n`
        participants.forEach((p, index) => {
            mensagem += `${index + 1}º ${p.username}: ${p.xp}xp \n`
        })
        mensagem += "\n*Lembrando que o primeiro lugar pode escolher ganhar 10 rosas ou não pagar a próxima missão!"
        if(!json.quest) return // se não existir missões

        if(json.tierFinished) { // se a nível da missão foi concluído
            // pula para a próxima etapa
            console.log('Nível finalizado')
            cont++
            if (cont != 1) return 
            /*fetch(`https://api.wolvesville.com/clans/${clanID}/quests/active/skipWaitingTime`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bot ${botID}`
                }
            })
            */
            // manda uma mensagem de agradecimento
            fetch(`https://api.wolvesville.com/clans/${clanID}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bot ${botID}`
                },
                body: JSON.stringify({"message": mensagem})
            })
        }
    })
}
checkActualQuest()
cron.schedule('0,30 * * * * *', checkActualQuest)