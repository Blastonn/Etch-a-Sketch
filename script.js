const container = document.querySelector(".container");
const gridQuadrado = document.createElement("div");

gridQuadrado.classList.add("grid");

container.appendChild(gridQuadrado);
const larguraArea = 960;
const alturaArea = 960;
let quadradosPorLinha = 16;
let quadradosPorColuna = 16;


function randomColor(num){
    return Math.floor(Math.random() * (num + 1)); 
}

function adicionarQuadrados(){
    gridQuadrado.innerText = "";
    tamanhoQuadrado = larguraArea / quadradosPorLinha;


    for(i=0; i < quadradosPorLinha; i++){
        for(u= 0; u < quadradosPorColuna; u++){
            const quadrado = document.createElement("div");
            quadrado.classList.add("quadrado");
            console.log(quadrado.style.width = `${tamanhoQuadrado}px`);
            quadrado.style.height = `${tamanhoQuadrado}px`;
            gridQuadrado.appendChild(quadrado);
        }
    }
    pintarQuadrados();
    opacidadeQuadrados();
}

function pintarQuadrados(){
    const divQuadrados = document.querySelectorAll(".grid .quadrado");
    divQuadrados.forEach(divQe => {
        divQe.addEventListener("mouseover", (e) => {
            const rnd = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
            divQe.style.backgroundColor = "pink";
     });
});
}
function opacidadeQuadrados(){
    const divQuadrados = document.querySelectorAll(".grid .quadrado");
    divQuadrados.forEach(divQe => {
        divQe.addEventListener("mouseout", (e) => {
            let opacidadeatual = parseFloat(window.getComputedStyle(divQe).opacity);

            divQe.style.opacity = opacidadeatual + 0.30;
   
     });
});

}


const button = document.querySelector(".btn");


function mudarTela(){
    button.addEventListener("click", () =>{
        let valorUsu = parseInt(window.prompt("Digite o tamanho que deseja de um a cem: ", "0"));

       if(valorUsu >= 1 && valorUsu < 100 ){
        
        quadradosPorLinha = valorUsu;
        quadradosPorColuna = valorUsu;

    
        adicionarQuadrados();
       }else{
        alert('Digite algo novamente entre 1 e 100');
       }
    });
}

mudarTela();
adicionarQuadrados();