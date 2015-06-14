/**
 * Realizar en JavaScript un programa, de nombre “merge”, que integre n ficheros 
 * en uno solo.
 * 
 * El programa se debe invocar de la siguiente forma
 * 
 * 		node merge.js <dest> <f1> <f2> .. <fn>
 * 
 * El programa debe crear un fichero <dest> concatenando los contenidos de <f1> 
 * a <fn>, siendo n un número variable de ficheros.
 * 
 *  
 */
var fs = require('fs');			// importa módulo file system

//
// Comprobación de parámetros...
//
if (process.argv.length < 4){	// parámetros mal?
	console.log('  syntax: "node merge <dest> <f1> <f2> ... <fn>"');
	process.exit();				// finaliza si parámetros mal
}

// 
// Abre ficheros como flujos (streams) de lectura y escritura
//
var writeStream = fs.createWriteStream(process.argv[2]);   // Flujo de salida

// Recorre el array de los parámetros de entrada
for (var i=3; i < process.argv.length; i++) {
	
	// Prepara el flujo de entrada con el fichero recibido en el parámetro i 
	var readStream = fs.createReadStream(process.argv[i]); // Flujo de entrada

	// Escribe el fichero en el flujo de salida.
	readStream.pipe(writeStream);
}