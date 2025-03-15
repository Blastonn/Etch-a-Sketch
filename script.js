const container = document.querySelector(".container");

const gridQuadrado = document.createElement("div");
gridQuadrado.classList.add("grid");
container.appendChild(gridQuadrado);
const larguraArea = 600;
const alturaArea = 600;
const tamanhoQuadrado = 16;

function adicionarQuadrados(){
    const quadradosPorLinha = Math.floor(larguraArea/tamanhoQuadrado);
    const quadradosPorColuna = Math.floor(alturaArea/tamanhoQuadrado);


    for(i=0; i < quadradosPorLinha; i++){
        for(u= 0; u < quadradosPorColuna; u++){
            const quadrado = document.createElement("div");
            quadrado.classList.add("quadrado");
            gridQuadrado.appendChild(quadrado);
            quadrado.style.border = "solid 1x white";

        }
    }
}



adicionarQuadrados();