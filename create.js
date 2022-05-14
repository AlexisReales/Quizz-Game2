let nome = prompt("Digite seu nome...");
if(!nome){
    nome = "Você";
}

const perguntas = [
    {
        pergunta: "De onde é a invenção do chuveiro elétrico?",
        alter: ["França", "Inglaterra", "Brasil"],
        resp: "Brasil"
    },
    {
        pergunta: "De quem é a famosa frase “Penso, logo existo”?",
        alter: ["Descartes", "Platão", "Sócrates"],
        resp: "Descartes"
    },
    {
        pergunta: "Qual o maior país do mundo?",
        alter: ["Rússia", "China", "Mônaco"],
        resp: "Rússia"
    },
    {
        pergunta: "Qual o menor país do mundo?",
        alter: ["Canadá", "Vaticano", "Nauru",],
        resp: "Vaticano"
    },
    {
        pergunta: "Qual o segundo livro mais vendido do mundo?",
        alter: ["Bíblia", "Dom Quixote", "O Pequeno Príncipe",],
        resp: "Dom Quixote"
    },
    {
        pergunta: "Quantas casas decimais tem o número pi??",
        alter: ["Duas", "Centenas", "Infinitas",],
        resp: "Infinitas"
    },
    {
        pergunta: "Atualmente, quantos elementos químicos a tabela periódica possui?",
        alter: ["118", "116", "108",],
        resp: "118"
    },
    {
        pergunta: "Qual país tem a maior expectativa de vida do mundo?",
        alter: ["Japão", "Itália", "Chade",],
        resp: "Japão"
    },
    {
        pergunta: "Qual país tem a menor expectativa de vida do mundo?",
        alter: ["Congo", "Afeganistão", "Serra Leoa",],
        resp: "Serra Leoa"
    },
    {
        pergunta: "Em qual local da Ásia o português é língua oficial?",
        alter: ["Índia", "Moçambique", "Macau",],
        resp: "Macau"
    },
    {
        pergunta: "Qual o número mínimo de jogadores em um time de uma partida de futebol?",
        alter: ["8", "5", "7",],
        resp: "7"
    },
    {
        pergunta: "Qual o número máximo de jogadores em uma partida de futebol?",
        alter: ["11", "22", "10",],
        resp: "22"
    },
    {
        pergunta: "Quem é considerado o maior representante do Barroco no Brasil?",
        alter: ["Padre Antônio Vieira", "Álvares de Azevedo", "Gregório de Mato",],
        resp: "Gregório de Mato"
    },
    {
        pergunta: "Qual destas datas é comemorada em novembro?",
        alter: ["Proclamação da República", "Independência do Brasil", "Dia da Bandeira",],
        resp: "Proclamação da República"
    },
    {
        pergunta: "Quem pintou Mona Lisa?",
        alter: ["Salvador Dalí", "Leonardo da Vinci", "Vincent Van Gogh",],
        resp: "Leonardo da Vinci"
    },
    {
        pergunta: "Quanto tempo a luz do Sol demora para chegar à Terra?",
        alter: ["8 minutos", "segundos", "12 minutos",],
        resp: "8 minutos"
    },
    {
        pergunta: "Qual a nacionalidade de Che Guevara?",
        alter: ["Cubana", "Boliviana", "Argentina",],
        resp: "Argentina"
    },
    {
        pergunta: "Qual a altura da rede de vôlei nos jogos masculino e feminino?",
        alter: ["2,4 para ambos", "2,5m e 2,0m", "2,43m e 2,24m",],
        resp: "2,43m e 2,24m"
    },
    {
        pergunta: "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?",
        alter: ["Saci", "Negrinho do Pastoreio", "Caipora",],
        resp: "Caipora"
    },
    {
        pergunta: "Em que período da pré-história o fogo foi descoberto?",
        alter: ["Neolítico", "Período da Pedra Polida", "Paleolítico",],
        resp: "Paleolítico"
    },

] 

for(let i = 0; i < perguntas.length; i++){
    let alts = "";

    for(let c = 0; c < perguntas[i].alter.length; c++){
        alts += `
            <div class="answ">
                <input type="radio" id="p${i}${c}" name="${i}">
                <label data-pai="p${i}${c}" for="p${i}${c}">${perguntas[i].alter[c]}</label>
            </div>
        `;
    }

    let newq = `
        <div class="qst">
            <h3>${perguntas[i].pergunta}</h3>
            ${alts}
        </div>
    `;

    document.getElementById('all-qst').innerHTML += newq;
}

document.getElementById('all-qst').innerHTML += '<button onclick="mandar()">Enviar</button>';