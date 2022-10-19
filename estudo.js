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

function total(){
    let valor = document.getElementById("valor").value;
    let juros = document.getElementById("juros").value;
    let meses = document.getElementById("mes").value;

    if(!Number(valor)){
        alert("O valor deve ser um número.")
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return 
    }

    if(!Number(juros)){
        alert("O juro deve ser um número.")
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return 
    }

    if(!Number(meses)){
        alert("O mes deve ser um número.")
        document.getElementById("mes").value = "";
        document.getElementById("mes").focus;
        return 
    }

    let resultado = 0
    for(let i = 1; i <= meses; i++){
        resultado += valor * (1+(juros/100));
        valor = resultado
    }
    
    document.write("o Resultado é " + resultado);
}
function soma(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let r = Number(n1) + Number(n2) + Number(n3);
    document.getElementById("resultado").innerHTML = r;
}
function média(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = (Number(n1) + Number(n2) + Number(n3))
    let r = (Number(n4))/3;
    document.getElementById("resultado").innerHTML = r;
}
function precisa(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = (Number(n1) + Number(n2) + Number(n3))
    let r = 180 - (Number(n4));
    document.getElementById("resultado").innerHTML = r;
}
