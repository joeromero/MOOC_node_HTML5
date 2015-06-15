# [Desarrollo de servicios en la nube con HTML5, Javascript y node.js](https://www.miriadax.net/web/javascript-node-js/inicio)

## Modulo 4. _Introducción a HTTP y a los Servidores Web; Introducción a express y al Middleware Static; Introducción a REST; Aplicaciones express.js y Composición de Middlewares; Formularios GET y POST; Parámetros Ocultos_

###Ejercicio P2P Obligatorio

####Enunciado

>   Construir una aplicaciónn de servidor con express que tenga 2 páginas diferentes, enlazadas entre sí con el siguiente comportamiento:

>###**Página 1**:
Será la página de entrada de la aplicación y tendrá un título y 2 preguntas:
**_¿Quién descubrió América?_** y **_¿Capital de Portugal?_**.
1. Cada pregunta tendrá un formulario asociado, con un cajetín de entrada y un botón de envío, que permitirá enviar la respuesta a esa pregunta en particular (es decir habrá 2 formularios en la página).
2. Cada formulario tendrá además un parámetro oculto que envíe un valor diferente que indique al servidor a que pregunta está contestando el cliente;
3. La página 1 estará asociada a la transacción **_HTTP: GET /preguntas_**

>###**_Página 2_**:
Será la página que muestre la respuesta a la que está contestando el cliente , e indicará si ha contestado correctamente o no con una frase correctamente construida.
1. En caso de contestar incorrectamente, le indicará además cual es la respuesta correcta. La página incluirá además un enlace asociado al texto Volver a la página inicial
2. La página 2 estará asociada a la transacción HTTP: GET /respuesta

>La aplicación debe utilizar solo el paquete **_express_** (no utilizar express-generator).
