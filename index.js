//Importamos los paquetes que requerimos
const expres = requiere('expres');
const hbs = requiere('hbs');

//creamos la aplicacion
const app = expres();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utilizar HBS)
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/views/index.hbs'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index');
});

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});