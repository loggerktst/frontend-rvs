function preencheradvogados(lista) {
    var saida = "<option value ='0'>Selecione um Advogado...</option>";

    for (cont = 0; cont < lista.length; cont++) {
        saida +=
            "<option value='" + lista[cont].idadvogado + "'>" + lista[cont].nome + "</option>";
			
    }
    document.getElementById("idadvogado").innerHTML = saida;
}

function carregaradvogados() {
    fetch("https://backend-rvs.herokuapp.com/listaadvogados")
        .then(res => res.json())
        .then(res => preencheradvogados(res));
}


function gravar() {

    if (document.getElementById("nomecli").value.length > 0 
        && document.getElementById("emailcli").value.length > 0 
        && document.getElementById("celcli").value.length >0
		&& document.getElementById("txtsenhaconfirm").value.length > 0
		&& document.getElementById("txtsenha").value.length > 0
		
		){
		
		   if(document.getElementById("txtsenha").value==document.getElementById("txtsenhaconfirm").value){


						var objeto = {
							nomecli: document.getElementById("nomecli").value,
							emailcli: document.getElementById("emailcli").value,
							login: document.getElementById("login").value,
							celcli: document.getElementById("celcli").value,
							foto: document.getElementById("foto").value
							

					   
						}

						var cabecalho = {
							method: "POST",
							body: JSON.stringify(objeto),
							headers: {
								"Content-type": "application/json"
							}
						}

						fetch("https://backend-rvs.herokuapp.com/novocliente", cabecalho)
							.then(res => res.json())
							.then(res => { window.alert("Gravado com sucesso") })
							.catch(err => { window.alert("ocorreu um erro") });
							window.location = "cadastrocliente.html";
							
			

				 
			}
			
			else{
							document.getElementById("alertdata").innerHTML =
							"<div class='alert alert-danger' role='alert'> as senhas não são iguais </div>";
							document.getElementById("txtsenha").focus();
				}
			
			

		} else {
			document.getElementById("alertdata").innerHTML =
				"<div class='alert alert-danger' role='alert'> Preencha todos os campos </div>";
			document.getElementById("idprocesso").focus;

		}
}


function preencheprocessos(lista) {

    for (cont = 0; cont < lista.length; cont++) {
		
		if(lista[cont].idprocesso==document.getElementById("idadvogado")){
			return true;
		}
    }
	return false;
    
}

function validaprocesso() {
    fetch("https://backend-rvs.herokuapp.com/listaprocessos")
        .then(res => res.json())
        .then(res => preencheprocessos(res));
	return res;
}




