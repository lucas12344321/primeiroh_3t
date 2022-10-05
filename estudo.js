//alert("Oi,eu sou um alert");
//console.log("oi,eu estou no console");
//document.write("aula de Pens.Comp.");

let tabuada = 8;

function mechame(nome){
    document.write("<h1>tabuada do " +tabuada + "</h1>")
    document.write(tabuada + " x 1 = " + (tabuada*1)+"<Br>");
    document.write(tabuada + " x 2 = " + (tabuada*2)+"<Br>");
    document.write(tabuada + " x 3 = " + (tabuada*3)+"<Br>");
    document.write(tabuada + " x 4 = " + (tabuada*4)+"<Br>");
    document.write(tabuada + " x 5 = " + (tabuada*5)+"<Br>");
    document.write(tabuada + " x 6 = " + (tabuada*6)+"<Br>");
    document.write(tabuada + " x 7 = " + (tabuada*7)+"<Br>");
    document.write(tabuada + " x 8 = " + (tabuada*8)+"<Br>");
    document.write(tabuada + " x 9 = " + (tabuada*9)+"<Br>");
    document.write(tabuada + " x 10 = " + (tabuada*10)+"<Br><Br>");
    document.write("feita por " + nome);
}

function escreva(){
    for(var i = 1; i < 11; i++){
        document.write(tabuada + " x " + i + " = "+(tabuada*i)+"<br>");
    }
}

function quadrado(){
    for(var i = 2; i < 101; i++){
        document.write("O Quadrado de " + i + " é " + (i*i)+ "<br>")
    }
}
