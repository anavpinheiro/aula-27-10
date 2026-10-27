// let body = document.querySelector("body");
// let div = document.querySelector("div");
// body.removeChild(div);

// let body = document.querySelector("body");
// let h1 = document.querySelector("h1");
// body.removeChild(h1);

// let h1 = document.querySelector("#trocarCor");

// esse comando serve para acessar a propriedade de cores da fonte html
// h1.style.color = "purple"
// h1.style.background = "blue"
// h1.style.height = "20px"

// sempre que quiser alterar ou saber um valor do CSS de um elemento html
// nomeDaTag.style.atributo

// let body = document.querySelector("body");
// body.style.background = "green"

// var h1 =  document.querySelector("h1");
// var paragrafo = document.querySelector("p");

// paragrafo.innerText = h1.innerText;

// let body = document.querySelector("body");

// function verificaCor(color = null) {

//     switch (color){
//         case "red":
//         case "blue":
//         case "yellow":
//             color = "primário"
//             break;
        
//         case "green":
//         case "purple":
//         case "orange":
//             color = "secundário"
//              break;
//         default:
//             color = "não é primário nem secundário" 
//             break;
//     }
//     return color;
// }

// let bgColor = prompt("Digite a cor que você deseja para o fundo da página: ");

// body.style.backgroundColor = bgColor;
// let corVerificada = verificaCor(bgColor);
// console.log(corVerificada);

// let button = document.querySelector("button");

// button.addEventListener("click", function(){
//     console.log("cliquei")
// });

let button = document.querySelector("button");
let body = document.querySelector("body");
let p = document.querySelector("p")


button.addEventListener("click", function(){
     body.style.backgroundColor = "black";
     p.style.color = "white";
});
