# [Desarrollo de servicios en la nube con HTML5, Javascript y node.js](https://www.miriadax.net/web/javascript-node-js/inicio)

## Modulo 2. _Introducción a JavaScript de servidor y a node.js. Bucles, Clases predefinidas, Objetos, Propiedades y Métodos; Prototipos y Clases; Arrays; JSON; Funciones como Objetos y Cierres (Closures)_


###Ejercicio P2P Obligatorio

####Enunciado

> Dado el siguiente programa JavaScript que implementa la _agenda de telefonos_ **"amigos"**:
>
1. Añadir un método *listar()* al cierre *agenda(..) {...}* que liste por consola cada par _**"nombre, tf"**_ en una línea, de forma que al listar la agenda amigos generase:
`"Pepe, 113278561 \nJosé, 157845123 \nJesús: 178512355 \n" `
2. Incluir, además, una última instrucción en el programa que liste la agenda amigos por consola utilizando el nuevo método listar.
_ _ _

#### Programa de Agenda "Amigos"

```js
function agenda (titulo, inic) {
	var _titulo = titulo;
	var _contenido = inic;
	return {
		titulo: function()           { return _titulo; },
		meter:  function(nombre, tf) { _contenido[nombre]=tf; },
		tf:     function(nombre)     { return _contenido[nombre]; },
		borrar: function(nombre)     { delete _contenido[nombre]; },
		toJSON: function()           { return JSON.stringify(_contenido);}
	}
}
var amigos = agenda ("Amigos",
						{ Pepe: 113278561,
							José: 157845123,
							Jesús: 178512355
						});
```
