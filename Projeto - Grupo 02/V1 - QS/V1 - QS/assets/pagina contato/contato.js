function valida(){
    var cont =0;
                

                var email = document.getElementById("email").value;
                var nome = document.getElementById("nome").value;
                var telefone = document.getElementById("telefone").value;
                var mensagem = document.getElementById("mensagem").value;

               if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
                    alert("E-mail Invalido");
                }
                else{
                    alert("E-mail valido");
                    cont++;
                }

                if(nome.indexOf(" ")== -1){
                    alert("Nome Incompleto");
                }
                else{
                    alert("Nome Completo");
                    cont++;
                }

                if(telefone.length != 11){
                    alert("Telefone Invalido")
                }
                else{
                    alert("Telefone valido")
                    cont++;
                }
                if(mensagem == ""){
                    alert("Campo Mensagem invalido");
                }
                else{
                    alert("Mensagem valida");
                    cont++;
                }


                if(cont >= 4)
                {
                    alert("Mensagem enviada!")
                    cont = 0;
                }

}

function tecla(){
    evt = window.event;
    var tecla = evt.keyCode;

    if(tecla >= 47 && tecla <= 57)
    { 

    }
    else{
        evt.preventDefault();
        alert('Pressione apenas teclas numéricas');
    }
  }