const container = document.querySelector(".container");
const gridQuadrado = document.createElement("div");

gridQuadrado.classList.add("grid");

container.appendChild(gridQuadrado);
const larguraArea = 960;
const alturaArea = 960;
const tamanhoQuadrado = 160;


function randomColor(num){
    return Math.floor(Math.random() * (num + 1)); 
}

function adicionarQuadrados(){
    const quadradosPorLinha = Math.floor(larguraArea/tamanhoQuadrado);
    const quadradosPorColuna = Math.floor(alturaArea/tamanhoQuadrado);


    for(i=0; i < quadradosPorLinha; i++){
        for(u= 0; u < quadradosPorColuna; u++){
            const quadrado = document.createElement("div");
            quadrado.classList.add("quadrado");
            gridQuadrado.appendChild(quadrado);
        }
    }
    pintarQuadrados();
}

function pintarQuadrados(){
    const divQuadrados = document.querySelectorAll(".grid .quadrado");
    divQuadrados.forEach(divQe => {
        divQe.addEventListener("mouseover", () => {
            const rnd = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;   
            divQe.style.backgroundColor = rnd;
     });

});
}

adicionarQuadrados();