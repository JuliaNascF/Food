var nomePrato, precoPrato, precoBebida, nomeBebida, nomeSobremesa, precoSobremesa;


var precoTotal





function selecionarPrato(elementoselecionado){
    const elemento = document.querySelector(" div.pratos .selecionado");
      if( elemento !== null){
        const icon = elemento.querySelector("div.pratos div.selecionado .icon")
         icon.classList.toggle("display-none")
    
         elemento.classList.remove("selecionado")
         
         }
        
        elementoselecionado.classList.toggle("selecionado");
        const check = elementoselecionado.querySelector(" div.pratos div.selecionado .icon")
        check.classList.toggle("display-none")
         nomePrato = document.querySelector(".selecionado .nome-prato p1").innerHTML;
         precoPrato = document.querySelector(".selecionado .preco-prato p3").innerHTML;

    }

    function selecionarBebida(elementoselecionado){
        const elemento = document.querySelector(" div.bebidas .selecionado");
          if( elemento!== null){
            const icon = elemento.querySelector("div.bebidas div.selecionado .icon")
             icon.classList.add("display-none")
              elemento.classList.remove("selecionado")
              
             }
            
            elementoselecionado.classList.toggle("selecionado");
            const check = elementoselecionado.querySelector(" div.bebidas div.selecionado .icon")
            check.classList.remove("display-none")
            nomeBebida = document.querySelector(".selecionado .nome-bebida p1").innerHTML;
            precoBebida= document.querySelector(".selecionado .preco-bebida p3").innerHTML;

    
        }
    
        function selecionarSobremesa(elementoselecionado){
            const elemento = document.querySelector("div.sobremesa .selecionado");
              if( elemento !== null){
                const icon = elemento.querySelector("div.sobremesa div.selecionado  .icon")
                 icon.classList.add("display-none")
            
                 elemento.classList.remove("selecionado")
                 
                 }
                
                 elementoselecionado.classList.toggle("selecionado");
                const check = elementoselecionado.querySelector(".icon")
                check.classList.remove("display-none")
                 nomeSobremesa = document.querySelector(".selecionado .nome-sobremesa p1").innerHTML;
                 precoSobremesa= document.querySelector(".selecionado .preco-sobremesa p3").innerHTML;

                
        
            }
           function pedidoEscolhido(){
            const pratos = document.querySelector("div.pratos .selecionado")
            const bebidas = document.querySelector("div.bebidas .selecionado")
            const sobremesa = document.querySelector("div.sobremesa .selecionado")
            if( pratos !== null && bebidas!== null && sobremesa !== null){
              const bloqueado = document.querySelector(".botaoblock");
               const desbloqueado = document.querySelector(".fecharped");
               bloqueado.classList.add("display-none");
               desbloqueado.classList.remove("display-none");
               desbloqueado.disabled = false ;
            }

           }

            function fecharPedido(){
              const fundo = document.querySelector(".confirmacao-fundo")
              const verde = document.querySelector(".confirma")
              fundo.classList.remove("display-none")
              verde.classList.remove("display-none")

              
              
              document.querySelector(" div.confirma div.confirmado div.pedido .nome-prato ").innerHTML= nomePrato; 
              document.querySelector(" div.confirma div.confirmado div.pedido .nome-bebida ").innerHTML= nomeBebida; 
              document.querySelector(" div.confirma div.confirmado div.pedido .nome-sobremesa ").innerHTML= nomeSobremesa;
               
              precoPratoReal = precoPrato.replace( "R$ ", "");
              precoBebidaReal = precoBebida.replace("R$ " , "");
              precoSobremesaReal = precoSobremesa.replace("R$ " , "" );
              
              document.querySelector(" div.confirma div.confirmado div.pedido .preco-prato ").innerHTML= precoPratoReal; 
              document.querySelector(" div.confirma div.confirmado div.pedido .preco-bebida ").innerHTML= precoBebidaReal; 
              document.querySelector(" div.confirma div.confirmado div.pedido .preco-sobremesa ").innerHTML= precoSobremesaReal;

              precoPratoConvert = Number(precoPratoReal.replace("," , "."));
              precoBebidaConvert = Number(precoBebidaReal.replace("," , "."));
              precoSobremesaConvert = Number(precoSobremesaReal.replace("," , "."));
              
              var tudo = precoPratoConvert + precoBebidaConvert + precoSobremesaConvert; 
              precoTotal = "R$ "+tudo.toFixed(2);
                precoTotal= precoTotal.replace(".",",");
               
                document.querySelector(" div.confirma div.confirmado div.total-preco  .PRECO ").innerHTML= precoTotal;
                precoTotal= precoTotal.replace(",",".");
                console.log(precoTotal);
              
            }

            function tudoCerto() {
              var nomePessoa = prompt("Me fala seu nome ai:");
              if (nomePessoa === null || nomePessoa === "") {
                  nomePessoa = "Nome não informado.";
              }
              var enderecoPessoa = prompt(" Agora seu endereço:");
              if (enderecoPessoa === null || enderecoPessoa === "") {
                  enderecoPessoa = "Endereço não informado.";
              }
              const mensagem = `Olá, gostaria de fazer esse pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\n- Total: ${precoTotal}\n- Nome: ${nomePessoa}\n- Endereço: ${enderecoPessoa}`;
              window.open(`https://wa.me/5521985052292?text=${encodeURIComponent(mensagem)}`);

          }
            
            function Cancel(){
              const sumirfundo = document.querySelector("div.confirmacao-fundo ");
              const sumirverde = document.querySelector("div.confirma")
              sumirfundo.classList.add("display-none")
              sumirverde.classList.add("display-none")
            }