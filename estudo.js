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
function moeda(atual) {
   return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
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
    let texto = "";
    for(let i = 1; i <= meses; i++){
        resultado += valor * (1 + (juros/100));
        valor = resultado;
        texto += "Mês  " + i + " com valor de: " + moeda(resultado) + "<br>"
        //document.write("Mês  " + i + " valor: " + moeda(resultado) + "<br>");
    }
    document.getElementById("meses").innerHTML = texto;
    document.getElementById("resultado").innerHTML = "O total é de "  +  moeda(resultado);
    
    //document.write( "O resultado é " + moeda(resultado))
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

function calculaRaiz(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let resultado = 0;
    

    let delta = (b*b) - 4*a*c;
    alert("precisa do valor de delta")
    let x1, x2; 
    if (delta < 0){
        x1 = (-b)/(2*a)
        document.getElementById("raiz").innerHTML = "Não tem Raiz "
    }
    else if (delta == 0){
        x1 = ((Number(-b)) + Math.sqrt(Number(delta)))/(2*a);
        x2 = ((Number(-b)) + Math.sqrt(Number(delta)))/(2*a);

    } else {

    }
}