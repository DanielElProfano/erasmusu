# erasmusu prueba técnica FullStack

# FRONT:

  Realizado en react.
  Descargar repositorio y entrar en la carpeta front.
  Teclear: npm run start.
  Abrir navegador y añadir url "localhost:3000"
  
  Dependencias:
    Node Sass: Implementa SCSS, uso metodología BEM.
    React-Router-Dom: Implemeta rutas. Aunque en este caso no es necesario ya que la HOME carga diréctamente desde raiz.
  
# BACK:
  Realizado en node JS.
  Entrar en la carpeta back.
  Teclear: npm run dev, ejecutará nodemon.
  Servidor express en el puerto.
    
  Dependencias:
    express: Para crear el servidor.
    dotenv: Para manejar las variables de entorno, en este caso sólo está el puerto de comunicaciones.
    node-fetch-npm: Permiter implementar fecth para hacer llamadas a otras apis.
    cors: Para permitir comunicacioes entre el front y el back.
    nodemon: Manatiene el servidor siempre encendido.
    
 # PASOS:
 
  Primero he creado el Back ya que desde el front no permite hacer peticiones directamente a la api de erasmusu.
  Se crea una única ruta que simplemente hace una llamada a la API de erasmusu para que devuelva esos datos al front.
  
  Segundo: Creación del front ruta y componente HOME y llamada al back a través de una petición GET.
    Parseado de los datos en un array de objetos.
    Crear el renderizado de los datos.
    Creación de una paginación sencilla.
    Creación de un Select que permite ordenar en forma ascendente por el campo seleccionado.
    Aplicación de estilos sencillos.
