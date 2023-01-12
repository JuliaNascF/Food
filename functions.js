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
               console.log("juju")
            }

           }

