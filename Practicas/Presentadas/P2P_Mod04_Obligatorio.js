// Dependencias
var express = require('express');
var app = express();

// Variables configuración
var port = 8027;

// Plantilla para la pagina de respuesta
app.locals.respuestaHTML = '<html><title> Respuesta </title>' 
    +    '<body>' 
    +        '<h1> $RESULTADO </h1>'
    +        '<p>Su respuesta a la pregunta: <i><b> $PREGUNTA </b></i>&nbsp;'
    +           'ha sido: <i><b> $RESPUESTA </b></i></br>'
    +           ' $SOLUCION </p>'
    +        '<p><a href="./preguntas">Volver</a></p>'
    +    '</body></html>';

// Lista de preguntas
app.locals.preguntas = {
		1: "¿Quién descubrió América?", 
		2: "¿Capital de Portugal?"
			};

//Lista de respuestas válidas (como expresiones regulares)
app.locals.respuestas = {
		1: '^Crist[óo]bal Col[óo]n$', 
		2: '^[Ll]isboa$'
			};

//Lista de soluciones a las preguntas
app.locals.soluciones = {
		1: 'Cristóbal Colón', 
		2: 'Lisboa'
			};

// Establecer la página de preguntas como página inicial
app.get('/',function (req,res) {
	res.redirect('/preguntas');
});

// Componer la página de preguntas
app.get('/preguntas',function(req,res){	
	var preguntaHTML='<html><title> Pregunta </title>'
			+   '<body> <h1> Preguntas </h1>'
			+		'<ol><li>¿Quién descubrió América?<br>'
			+       '<form method="get" action="/respuesta">'
			+           '<input type="text" name="respuesta"/>'
			+       	'<input type="submit" value="Enviar"/>'
			+           '<input type="hidden" name="pregunta" value="1"/>'
			+       '</form>'
			+       '</li><li>¿Cual es la capital de Portugal?<br>'
			+       '<form method="get" action="/respuesta">'
			+           '<input type="text" name="respuesta"/>'
			+       	'<input type="submit" value="Enviar"/>'
			+           '<input type="hidden" name="pregunta" value="2"/>'
			+       '</form>'
			+   	'</li></ol>'
			+ 	'</body>'
			+ '</html>';	
	res.send(preguntaHTML);
});

// Tratamiento de la solicitud de respuesta
app.get('/respuesta',function(req,res){
	
	var pregunta = req.query.pregunta;
	var respuesta = req.query.respuesta;
	var html = app.locals.respuestaHTML;

	// Comprobar que se ha introducido una respuesta
	if ( respuesta === "") {		
		var html ='<html><title> Respuesta </title>'
	         + '<body>'
	         + '<h1>Sin RESPUESTA</h1>'
	         + '<p>Se debe proporcionar una respuesta a la pregunta: <i><b>' 
	         + 	app.locals.preguntas[req.query.pregunta] + '</b></i></p>'
	         + '<p><a href="./preguntas">Volver a intentarlo</a></p>'
	         + '</body>'
	         + '</html>'		
	} else {
		
		// Tratamiento de la solicitud de respuesta
		var patron = new RegExp( '\\b'
				+ app.locals.respuestas[pregunta] 
				+ '\\b', 'i');
		var h1, p;
		
		// Comprobar si la respuesta recibida es correcta para componer 
		// adecuadamente el contenido de la página de respuesta 
		if (respuesta.match(patron)) {
			h1 =  'Respuesta CORRECTA';
			p = "<br>";
		} else {
			h1 = 'Respuesta INCORRECTA';
			p  = 'La respuesta correcta es <i><b>' 
				+ app.locals.soluciones[pregunta] + '</b></i><br>';
		}		

		// Mostrar el resultado de la respuesta en la Cabecera html 
		html = html.replace(/\$RESULTADO/g, h1);
		// Mostrar el texto de la pregunta 
		html = html.replace(/\$PREGUNTA/g, app.locals.preguntas[pregunta]);
	    // Mostrar el texto de la respuesta introducida  
		html = html.replace(/\$RESPUESTA/g, respuesta);
	    // Mostrar la solución en caso de error  
		html = html.replace(/\$SOLUCION/g, p);
							
	}
    res.send(html);

});

//Al intenta acceder a cualquier otra ruta, mostrar siempre página de preguntas
app.get('*',function (req,res) {
	res.redirect('/preguntas');
});

console.log('Esperando conexiones en el puerto ' + port);
app.listen(port);
