

//no soy muy bueno con jquery y probablemente cometi muchos errores aqui xD
//les recomiendo revisar esto con personas que tengan mas experiencia en el area
//No usen esten archivo en produccion porque no esta terminado. Solo es de prueba.

$(document).ready(function() {
     
	 //aqui solo agrego la funcion click a mi div con class "next"
     $(".next").click(function(){
          
          var ventana = $(".ventana");      //guardo el div ventana en una variable
          var activeFigure = $(".active");  //lo mismo para la figura activa
          
          if ((activeFigure.index() == (ventana.children().length - 1))) {
               
			   //aqui si la figura activa es la ultima, 
			   //le paso la clase "active" a la primera figura.
			   
               ventana.children().eq(0).addClass("active");
               
			   //despues ago q todos bajen
               ventana.children().slideDown(1000, function(){
						//cuando todos hayan bajado, 
						//remuevo la clase "active"
						//de la ultima figura.
                         activeFigure.removeClass("active");
                    });
               
          } else {
               
			   // si no es la ultima figura,
			   //entonces solo ago q suba y remuevo la clase "active".
               activeFigure.slideUp(2000, function(){
                    activeFigure.removeClass("active");
               });
               
			   //a la siguiente figura le asigno la clase "active".
               activeFigure.next().addClass("active");
          }
          
     });
});

$(document).ready(function(){
     
	 // el mismo proceso aqui, solo que en ves de subir vamos a bajar las figuras.
     $(".last").click(function(){
          
          var ventana = $(".ventana");
          var activeFigure = $(".active");
          
          if (activeFigure.index() == 0) {
				//si la figura es la primera, 
				//tenemos que bajar a la ultima figura.
				
				//para eso llamo a los hermanos de figura.
               activeFigure.siblings().each(function(){
                    
                      var curr = $(this);
                      
					  //si es el ultimo hermano le agrego la clase "active"
                      if (curr.index() == (ventana.children().length - 1)) {
                           curr.addClass("active");
                      } else {
                           
						   //si no lo es, remuevo la clase, si la tiene claro.
                           curr.slideUp(2000, function(){
                                   
                                   if (curr.hasClass("active")) {
                                        curr.removeClass("active");   
                                   }
                                   
                              });
                      }
                 });
               
			   //no nos olvidemos de la figura activa, 
			   //tambien tenemos que subirla 
			   //y quitarle la clase "active".
               activeFigure.slideUp(2000, function(){
                    activeFigure.removeClass("active");
               });
               
               
          } else {
               
               //si no es la primera figura,
			   //solo le decimos que baje
			   //y le quitamos la clase "active".
               activeFigure.prev().slideDown(2000, function(){
                    activeFigure.removeClass("active");     
               });
               
			   //despues le asignamos la clase "active"
			   //a la figura previa.
               activeFigure.prev().addClass("active");
          }
          
     });     
     
});


//eso es todo, si encuentran algun error, u otra manera de hacerlo, 
//envien me un e-mail a programacion.gratis.peru@gmail.com
//recuerden que sus conocimientos, son el mejor legado que pueden dejar a la humanidad.
//¡gracias!