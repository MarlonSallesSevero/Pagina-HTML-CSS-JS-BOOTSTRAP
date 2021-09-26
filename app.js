var Produtos = []; // Estamos criando uma variavel Produtos, do tipo list //Array
var Produto = null; //Atribuindo Valor inicial Nulo a produtos 

function novosProdutos(){ //Criando uma funcao/objeto para add produtos
                
    return { // Essa funcao/objeto retorna o codigo e a descricao vazia
            Codigo: "",
            Descricao:"",
            Marca:"",
            Un:"",
            PrecCusto:"",
            PerLucr:"",
            PrecV:"",
            EstMi:"",
            EstAt:"",
            EstMa:""  
    };        
}

function adicionarProdutos(){    
    
    Produto = novosProdutos(); // Variavel criada esta recebendo o objeto novosProdutos
    
    $("#formulario-listagem").hide(); //escondendo a listagem de produtos 
    $("#formulario-cadastro").show(); //mostrando os campos para novo cadastro
    
    $("#objVisCod").val(Produto.Codigo); // O objeto visual codigo esta recebendo o valor informado no objeto.codigo ou seja novoProduto.codigoInformado
    $("#objVisDescr").val(Produto.Descricao);// O objeto visual descricao esta recebendo o valor informado no objeto.descricao ou seja novoProduto.descricaoInformado
    $("#objVisMarc").val(Produto.Marca);
    $("#objVisUn").val(Produto.Un);
    $("#objVisPresC").val(Produto.PrecCusto);
    $("#objVisPerLu").val(Produto.PerLucr);
    $("#objVisPresV").val(Produto.PrecV);
    $("#objVisEsMi").val(Produto.EstMi);
    $("#objVisEsAt").val(Produto.EstAt);
    $("#objVisEsMa").val(Produto.EstMa);
}

function fechar(){
    $("#formulario-listagem").show(); //Exibindo os itens cadastrados
    $("#formulario-cadastro").hide(); //escondendo os campos de cadastro
}

function salvar(){  
    
    if (Produto.Codigo == "") {
		// Inserção
                
		Produto.Codigo = $("#objVisCod").val();
		Produto.Descricao = $("#objVisDescr").val();
                Produto.Marca = $("#objVisMarc").val();
		Produto.Un = $("#objVisUn").val();               
                Produto.PrecCusto = $("#objVisPresC").val();
		Produto.PerLucr = $("#objVisPerLu").val();
                Produto.PrecV = $("#objVisPresV").val();                
		Produto.EstMi = $("#objVisEsMi").val();
                Produto.EstAt = $("#objVisEsAt").val();
                Produto.EstMa = $("#objVisEsMa").val();
                
		Produtos.push(Produto);
	} else {
		// Percorrer Produtos
		for(var i=0; i < Produtos.length; i++){
			// Encontrar o Produto com o mesmo código
			if (Produtos[i].Codigo == Produto.Codigo){
				// Setar a Descrição
				Produtos[i].Descricao = $("#objVisDescr").val();
                                Produtos[i].Marca = $("#objVisMarc").val();
                                Produtos[i].Un = $("#objVisUn").val();
                                Produtos[i].PrecCusto = $("#objVisPresC").val();
                                Produtos[i].PerLucr = $("#objVisPerLu").val();
                                Produtos[i].PrecV = $("#objVisPresV").val();
                                Produtos[i].EstMi = $("#objVisEsMi").val();
                                Produtos[i].EstAt = $("#objVisEsAt").val();
                                Produtos[i].EstMa = $("#objVisEsMa").val();                               
			}
		}
	}
        
       
	carregarProdutos();
	$("#formulario-listagem").show();
	$("#formulario-cadastro").hide();  
}

function carregarProdutos(){
     $("#objVisTabProdutos tbody").html("");
    Produtos.map(function (prod){ // Mapeando a funcao Prod? (referenciando qual funcao)
        //iteracao entre os itens da lista 
        
        $("#objVisTabProdutos tbody").append( // Adicionando no objeto Virtual, tabela, as informacoes na linha e na coluna do corpo.
                "<tr>" + 
			"   <td>" + prod.Codigo + "</td>" +
			"   <td>" + prod.Descricao + "</td>" +
                        "   <td>" + prod.Marca + "</td>" +
                        "   <td>" + prod.Un + "</td>" +                       
                        "   <td>" + prod.PrecV + "</td>" +                       
                        "   <td>" + prod.EstAt + "</td>" +                   
                        "   <td><button type='button' " + 
			"               class='btn botao-editar btn-secondary' " +
            "               data-codigo='"+ prod.Codigo + "'>" +
			"       <i class='fa fa-edit'></i> Editar</button>" +
			"       <button type='button' " + 
			"               class='btn botao-remover btn-danger' " +
            "               data-codigo='"+ prod.Codigo + "'>" +
			"       <i class='fa fa-trash'></i> Remover</button>" + 
                        "       <button type='button' " + 
			"               class='btn botao-showMore btn-info' " +
            "               data-codigo='"+ prod.Codigo + "'>" +
			"       <i class='fa fa-list'></i> Mostrar Mais</button>" +
			"   </td>" +
			"</tr>" 
                );
    });
        addEventoEditar();
	addEventoRemover();
        addEventoShow();
}

function addEventoEditar(){
	$(".botao-editar").each(function () {
		$(this).on("click", function (){
			var codigoProduto = $(this).attr("data-codigo");
                        
                            for(var i = 0; i < Produtos.length; i++){
                                    if (Produtos[i].Codigo == codigoProduto){
                                        Produto = Produtos[i];
                                        $("#objVisCod").val(Produto.Codigo);
                                        $("#objVisDescr").val(Produto.Descricao);
                                        $("#objVisMarc").val(Produto.Marca);
                                        $("#objVisUn").val(Produto.Un);
                                        $("#objVisPresC").val(Produto.PrecCusto);
                                        $("#objVisPerLu").val(Produto.PerLucr);
                                        $("#objVisPresV").val(Produto.PrecV);
                                        $("#objVisEsMi").val(Produto.EstMi);
                                        $("#objVisEsAt").val(Produto.EstAt);
                                        $("#objVisEsMa").val(Produto.EstMa);
                                    }    
                         }
            carregarProdutos();
            $("#formulario-listagem").hide();
            $("#formulario-cadastro").show();					
	});		
    });
}

function addEventoShow(){
	$(".botao-showMore").each(function () {
            $(this).on("click",function(){
                var codigoProduto = $(this).attr("data-codigo");
                for(var i = 0; i < Produtos.length; i++){
                                    if (Produtos[i].Codigo == codigoProduto){
                                        Produto = Produtos[i];
                                        $("#objVisCod").val(Produto.Codigo);
                                        $("#objVisDescr").val(Produto.Descricao);
                                        $("#objVisMarc").val(Produto.Marca);
                                        $("#objVisUn").val(Produto.Un);
                                        $("#objVisPresC").val(Produto.PrecCusto);
                                        $("#objVisPerLu").val(Produto.PerLucr);
                                        $("#objVisPresV").val(Produto.PrecV);
                                        $("#objVisEsMi").val(Produto.EstMi);
                                        $("#objVisEsAt").val(Produto.EstAt);
                                        $("#objVisEsMa").val(Produto.EstMa);
                                    }    
                         }
                         
            
            carregarProdutos();
            $("#formulario-cadastro").show();
            $("#formulario-listagem").show();            
            var delay = 1000;    
                setTimeout(function(){ alert("Para Fechar o Cadastro, clique em Fechar ou Salvar!"); },delay); // Criando delay, e mensagem posterior
        });
    });
}

function addEventoRemover() {
    $(".botao-remover").each(function () {
        $(this).on("click", function () {
            var codigoProduto = $(this).attr("data-codigo");// pega esse atributo

            Produtos = Produtos.filter(function (prodCorrente) {
                return prodCorrente.Codigo != codigoProduto; // retorna um array que atenda a condicao logica
            });            
            carregarProdutos();	
        });
    });
}

 function markup(){
        var PrecoCusto = parseFloat($("#objVisPresC").val());
        var Percentual = parseFloat($(this).val()); //"#objVisPerLu" -- Objeto Vigente 
        var PrecoVenda = PrecoCusto + (PrecoCusto * (Percentual / 100));
        $("#objVisPresV").val(PrecoVenda);
        
        if(Percentual < 0){
            alert("Valor De Venda Menor do que o de Custo");
                        $("#objVisPerLu").val("");
                        $("#objVisPresV").val("");
                }
        }

function validVlVenda(){
        var PrecoCusto = parseFloat($("#objVisPresC").val());
        var PrecoVenda = parseFloat($(this).val()); // Pegando o botao do documento
            if(PrecoVenda < PrecoCusto){
                   alert("Valor De Venda Menor do que o de Custo");
                        $("#objVisPerLu").val("");
                        $("#objVisPresV").val("");
                }
    }
    
function nvPercLucro(){
        var PrecoVenda = parseFloat($(this).val());
        var PrecoCusto = parseFloat($("#objVisPresC").val());
        var nv_Percem = (PrecoVenda - PrecoCusto); 
         $("#objVisPerLu").val(nv_Percem);
      
}

function validEstoqueAt(){
    var estAt = parseFloat($(this).val());
    
    if(estAt < 0){
        alert("Nao e Permitido informar Estoque Negativo");
            $(this).val("");
    }    
}

function validEstoqueMin(){
    var estMin = parseFloat($(this).val());
    var EstMax= parseFloat($("#objVisEsMa").val());
    if(estMin < 0){
        alert("Nao e Permitido informar Estoque Negativo");
            $(this).val("");
    }else if(estMin > EstMax){
        alert("Estoque Minimo Nao pode Ser Maior o Estoque Maximo!!!");
            $(this).val("");
    }    
}

function validEstoqueMax(){
    var estMax= parseFloat($(this).val());
    var estMin= parseFloat($("#objVisEsMi").val());
    if(estMax < estMin){
        alert("Estoque Maximo Nao pode ser Menor que o Minimo!!!");
            $(this).val(""); 
    }
}

$(document).ready(function (){
     
   $("#formulario-cadastro").hide();
   
   //Interacoes com os botoes
   $(document).on("click"   , "#objVisBotAdd", adicionarProdutos); // No documento, no objeto visual Botao Salvar, realiza a Funcao adicionarProdutos no Click
   $(document).on("click", "#objVisBotFechar", fechar);
   $(document).on("click", "#objVisBotSalvar", salvar);
   
   //$(document).on("click",);
   
   //Validacoes nas Mudancas dos Botoes
   $(document).on("change", "#objVisPerLu",markup);
   $(document).on("change", "#objVisPresV",validVlVenda); 
   $(document).on("change", "#objVisPresV",nvPercLucro); 
   $(document).on("change", "#objVisEsMi",validEstoqueMin); 
   $(document).on("change", "#objVisEsAt",validEstoqueAt);
   $(document).on("change", "#objVisEsMa",validEstoqueMax);
});
