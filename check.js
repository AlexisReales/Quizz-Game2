let points = 0;

let checkeds = [];

function mandar(){
    let inps = document.querySelectorAll('input');

    for(let u = 0; u < inps.length; u++){
        if(!checkeds.includes(inps[u].name)){
            let enviar = document.getElementsByName(inps[u].name);
            for(let i = 0; i < enviar.length; i++){
                let text = document.querySelectorAll(`[data-pai="${enviar[i].id}"]`)[0].innerText;
                if(enviar[i].checked == true && text == perguntas[enviar[i].name].resp){
                    points++;
                }
            }
            checkeds.push(inps[u].name);
        }       
        
    }

    console.log(points)
    alert(nome + ' fez ' + points + ' ponto(s)')
    points = 0;
    checkeds = [];
}