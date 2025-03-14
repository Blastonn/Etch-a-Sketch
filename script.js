const container = document.querySelector(".container");

const gridQuadrado = document.createElement("div");
const quadrado = document.createElement("div");
gridQuadrado.classList.add("grid");
quadrado.classList.add("quadrado");
const larguraArea = 600;
const alturaArea = 600;
const tamanhoQuadrado = 16;

function calcularQuadrados(){
    const quadradosPorLinha = Math.floor(larguraArea/tamanhoQuadrado);
    const quadradosPorColuna = Math.floor(alturaArea/tamanhoQuadrado);
    const valorTotal = quadradosPorLinha * quadradosPorColuna;
    return valorTotal;
}



console.log(calcularQuadrados());

container.appendChild(gridQuadrado);
gridQuadrado.appendChild(quadrado);





