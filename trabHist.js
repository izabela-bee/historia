function checkAnswer(){
    var answer1 = document.querySelector('input[name="resposta1"]:checked');
    var resultMessage1 = document.getElementById('resultMessage1');
    var resposta1 = document.getElementById('resposta1');
    if (answer1 && answer1.value==="c"){
        resultMessage1.style.display="block";
        window.location.replace("respostaCerta.html");
    } else{
        resultMessage1.style.display="block";
        window.location.replace("respostaErrada.html");
    }
}