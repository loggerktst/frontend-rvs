function gravar() {

    if (document.getElementById("txtnomeagencia").value.length > 0 
        && document.getElementById("txthorainicio").value.length > 0 
        && document.getElementById("txthorafim").value.length ){


                var objeto = {
                    nomeAgencia: document.getElementById("txtnomeagencia").value,
                    rachorainicio: document.getElementById("txthorainicio").value,
                    horafim: document.getElementById("txthorafim").value
               
                }

                var cabecalho = {
                    method: "POST",
                    body: JSON.stringify(objeto),
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                fetch("https://projeto-java-final.herokuapp.com/novaagencia", cabecalho)
                    .then(res => res.json())
                    .then(res => { window.alert("Gravado com sucesso") })
                    .catch(err => { window.alert("ocorreu um erro") });
                    window.location = "agendamentocliente.html";

             
        
        

    } else {
        document.getElementById("alertdata").innerHTML =
            "<div class='alert alert-danger' role='alert'> Preencha todos os campos </div>";

    }
}

