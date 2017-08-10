function trelloAdd(){
	
	function crearNodos(){
		var tableroDeLista = document.getElementById("ingresarDatos"); //botonever
		tableroDeLista.addEventListener("click", Listear);
	}
	crearNodos();

	
	function Listear(){
		function addtoText(){ 
				//s boton de tarea
				var buttonContainer = document.getElementById("lista");
				var buttonT= document.createElement("button");
				var contenido = document.createTextNode("Add to target");
				buttonT.setAttribute("id", "boton1");

				
				buttonT.appendChild(contenido);
			buttonContainer.appendChild(buttonT);
				

				//boton de lista
				buttonT.addEventListener("click", function(){
					//funcion constructora de lista.
					function List(listas){
							this.lista = listas;
					}
					
					var text = document.getElementById("ingresarDatos").value;
					var impresionLista = document.getElementById("clickBoton1");
					var contenedorLista = document.createElement("p");
					var  lista = document.createTextNode(text);
					contenedorLista.appendChild(lista);
					impresionLista.appendChild(contenedorLista);

					
					
					//se crea boton de lista
					function btnTarjeta(){ 
						var contenedorTextarea = document.getElementById("lista-creada");
						var inputTar = document.createElement("textarea");
						inputTar.setAttribute("id", "tarjeta-input");
						
						contenedorTextarea.appendChild(inputTar);

						var contenedor = document.getElementById("lista-creada");
						var botonLis = document.createElement("button");
						var contenido = document.createTextNode("Add to List");
						contenedor.classList.add("lista");
						botonLis.setAttribute("id", "boton2");
						
						botonLis.appendChild( contenido);
						contenedor.appendChild(botonLis);

							
							// funcion  boton tarjeta
							botonLis.addEventListener("click", function(){
								//funcion constructora de tarjeta.
								function Card(txtTarjeta, tarjeta){
										this.textoTarjeta = txtTarjeta;
										this.tarjeta = tarjeta;
								}
								var textoTarjeta = document.getElementById("tarjeta-input").value;
								var impresionTarjeta = document.getElementById("click-boton-tarjeta");

								var contenedorTarjeta = document.createElement("li");
								var tarjeta = document.createTextNode(textoTarjeta);
								contenedorTarjeta.appendChild(tarjeta);
								impresionTarjeta.appendChild(contenedorTarjeta);

								 
							});
					}
					btnTarjeta();
				});
	}
	addtoText();
}
		
	
}
trelloAdd();

function eliminar()
{
var list = document.getElementById("click-boton-tarjeta");  
list.removeChild(list.childNodes[0]);
}

