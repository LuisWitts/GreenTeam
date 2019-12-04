

function buscarTudo(){
    fetch("http://www.professorisidro.com.br/tarefas.php",{"method":"GET"})
      .then(response => response.json())
      .then(json => exibeTudo(json));
}
function exibeTudo(json){
   
    var tarefaAtual;
    for (i=0; i<json.length; i++){
        tarefaAtual = json[i];  // atribuo na variavel "tarefaAtual" o objeto a cada nova posicao
        console.log("Nome da Tarefa = "+tarefaAtual.nome);

        document.getElementById("pendentes").innerHTML +="<div class='col-md-4 coluna' draggable='true' ondragstart='levaPrala(event);' ondrop='recebeu(event);' ondragover='permiteReceber(event);' id='a"+i+"'>"+tarefaAtual.nome+" ("+tarefaAtual.responsavel+")</div><br/>";
    }
}

function levaPrala(event){
    event.dataTransfer.setData("text", event.target.id);
    console.log("habilitou");
    console.log(event.target.id)
    
}

function recebeu(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    console.log("recebeu");


}

function permiteReceber(event){
    event.preventDefault();
    console.log("permite receber");
}

