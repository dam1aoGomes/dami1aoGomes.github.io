// CODE VARIABLES
let ondas_notas_italo = [
    {
        "onda" : 1,
        "nota" : 7
    },
    {
        "onda" : 2,
        "nota" : 5
    },
    {
        "onda" : 3,
        "nota" : 1
    }
]

let ondas_notas_yago = [
    {
        "onda" : 1,
        "nota" : 9
    },
    {
        "onda" : 2,
        "nota" : 2
    }
]

// VARIABLES DOM ELEMENTS
let italo_ondas_div = document.getElementById("ondas-italo");
let yago_ondas_div = document.getElementById("ondas-yago");

let italo_nota_final_div = document.getElementById("nota-final-italo");
let yago_nota_final_div  = document.getElementById("nota-final-yago");

//function que adiciona as ondas e notas na div #ondas-italo
function addOndasNotasItalo() {
    for(let i = 0; i < ondas_notas_italo.length; i++) {
        italo_ondas_div.innerText += `Onda:${ondas_notas_italo[i].onda} | Nota:${ondas_notas_italo[i].nota} \n`
    }
}
addOndasNotasItalo();

//function que adiciona as ondas e notas na div #ondas-yago
function addOndasNotasYago() {
    for(let i = 0; i < ondas_notas_yago.length; i++) {
        yago_ondas_div.innerText += `Onda:${ondas_notas_yago[i].onda} | Nota:${ondas_notas_yago[i].nota} \n`
    }
}
addOndasNotasYago();

//function que adiciona a nota final na div #nota-final-italo
function addNotaFinalItalo() {
    let onda_maior_01 = -1;
    let nota_maior_01 = -1;

    let onda_maior_02 = -1;
    let nota_maior_02 = -1;
    // for para maior nota 01
    for(let i = 0; i < ondas_notas_italo.length; i++) {
        if(ondas_notas_italo[i].nota > nota_maior_01) {
            nota_maior_01 = ondas_notas_italo[i].nota;
            onda_maior_01 = ondas_notas_italo[i].onda;
        }
    }
    // for para maior nota 02
    for(let i = 0; i < ondas_notas_italo.length; i++) {
        if(ondas_notas_italo[i].nota > nota_maior_02) {
            if(ondas_notas_italo[i].onda != onda_maior_01) {
                nota_maior_02 = ondas_notas_italo[i].nota;
                onda_maior_02 = ondas_notas_italo[i].onda;
            }
        }
    }
    let nota_final = Number(nota_maior_01) + Number(nota_maior_02)
    italo_nota_final_div.innerText = `Nota Final : ${nota_final}`;
}

addNotaFinalItalo();

//function que adiciona a nota final na div #nota-final-yago
function addNotaFinalYago() {
    let onda_maior_01 = -1;
    let nota_maior_01 = -1;

    let onda_maior_02 = -1;
    let nota_maior_02 = -1;
    // for para maior nota 01
    for(let i = 0; i < ondas_notas_yago.length; i++) {
        if(ondas_notas_yago[i].nota > nota_maior_01) {
            nota_maior_01 = ondas_notas_yago[i].nota;
            onda_maior_01 = ondas_notas_yago[i].onda;
        }
    }
    // for para maior nota 02
    for(let i = 0; i < ondas_notas_yago.length; i++) {
        if(ondas_notas_yago[i].nota > nota_maior_02) {
            if(ondas_notas_yago[i].onda != onda_maior_01) {
                nota_maior_02 = ondas_notas_yago[i].nota;
                onda_maior_02 = ondas_notas_yago[i].onda;
            }
        }
    }
    let nota_final = Number(nota_maior_01) + Number(nota_maior_02)
    yago_nota_final_div.innerText = `Nota Final : ${nota_final}`;
}

addNotaFinalYago();

// funcao que vai atualizar as divs
function atualizarDados() {
    // limpando os dados antigos
    italo_ondas_div.innerText = '';
    yago_ondas_div.innerText  = '';
    // chamando funcao da ondas e notas 
    addOndasNotasItalo();
    addOndasNotasYago();
    // chamando funcao de nota final
    addNotaFinalItalo();
    addNotaFinalYago();
}

// recebendo dados do formulario
let input_surfista_italo = document.getElementById('italo-ferreira');
let input_nota = document.getElementById('nota');
let button_add_notas = document.getElementById('button-add-pontuacao');

function escolhido() {
    var res = '';
    const items = document.getElementsByName('surfista');
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        res = items[i].value
        break;
      }
    }  
    return res;
  }
  
  function verificarSeFoiEscolhidoAlgo() {
    const res = escolhido();
    if (res === '') {
      return false;
    }
    return true;
  }

button_add_notas.addEventListener("click",()=>{
    if (verificarSeFoiEscolhidoAlgo() && input_nota.value != '' && input_nota.value >= 0 && input_nota.value <= 10) {
        let surfista = escolhido();
        if(surfista == 'italo') {
            let obj = {
                "onda" : ondas_notas_italo.length + 1,
                "nota" : input_nota.value
            }
            ondas_notas_italo.push(obj)
        } else if(surfista == 'yago'){
            let obj = {
                "onda" : ondas_notas_yago.length + 1,
                "nota" : input_nota.value
            }
            ondas_notas_yago.push(obj)
        }
        console.log(ondas_notas_yago);
        atualizarDados();
    } else {
        alert('Informações Invalidas')
    }
})

