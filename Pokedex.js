
function ObtenerNombre(){
    const Entrada = document.getElementById("TextBoxPokemon");
    let NombrePoke = Entrada.value;
    NombrePoke = NombrePoke.toLowerCase();
    return NombrePoke;
}

function ConsultarAPI(){
    const NombrePoke = ObtenerNombre();
    const Buscar = "https://pokeapi.co/api/v2/pokemon/" + NombrePoke;
    fetch(Buscar).then((Respuesta) => {
        if (Respuesta.status != "200") {
            console.log(Respuesta);
            MostrarImagen("./PantallaInicio.png")
            MostrarNombre("No hay registro")
        }
        else {
            return Respuesta.json();
        }
    }).then((Datos) => {
        if (Datos) {
            let DirImagenPokemon = Datos.sprites.front_default;
            MostrarImagen(DirImagenPokemon);
            EntraIntOrString(NombrePoke, Datos);
            MostrarTipos(Datos);
        }
    });
}

function MostrarImagen(DirImagenPokemon){
    const PictureBoxPokemon = document.getElementById("PictureBoxPokemon");
    PictureBoxPokemon.src = DirImagenPokemon;
}

function EntraIntOrString(NombrePoke, Datos){
    if (!isNaN(parseInt(NombrePoke))){
        let NombreRegistrado = Datos.name;
        MostrarNombre(NombreRegistrado);
    }
    else{
        let NumeroRegistrado = Datos.id;
        MostrarNumero(NumeroRegistrado);
    }
}

function MostrarNombre(NombreRegistrado){
    const LabelTituloPokemon = document.getElementById("LabelTituloPokemon");
    LabelTituloPokemon.innerHTML = "Nombre";
    const LabelNombrePokemon = document.getElementById("LabelNombrePokemon");
    LabelNombrePokemon.innerHTML = NombreRegistrado.charAt(0).toUpperCase() + NombreRegistrado.slice(1);
}

function MostrarNumero(NumeroRegistrado){
    const LabelTituloPokemon = document.getElementById("LabelTituloPokemon");
    LabelTituloPokemon.innerHTML = "Numero";
    const LabelNombrePokemon = document.getElementById("LabelNombrePokemon");
    LabelNombrePokemon.innerHTML = NumeroRegistrado;
}

function MostrarTipos(Datos){
    let Tipos = Datos.types;
    let Tipo1;
    let Tipo2;
    if (Tipos.length > 1){
        if (Datos.types[0].type.name == "fire"){
            Tipo1 = "Fuego";
        }
        else if (Datos.types[0].type.name == "water"){
            Tipo1 = "Agua";
        }
        else if (Datos.types[0].type.name == "electric"){
            Tipo1 = "Eléctrico";
        }
        else if (Datos.types[0].type.name == "grass"){
            Tipo1 = "Planta";
        }
        else if (Datos.types[0].type.name == "ice"){
            Tipo1 = "Hielo";
        }
        else if (Datos.types[0].type.name == "fighting"){
            Tipo1 = "Luchador";
        }
        else if (Datos.types[0].type.name == "poison"){
            Tipo1 = "Veneno";
        }
        else if (Datos.types[0].type.name == "ground"){
            Tipo1 = "Tierra";
        }
        else if (Datos.types[0].type.name == "flying"){
            Tipo1 = "Volador";
        }
        else if (Datos.types[0].type.name == "psychic"){
            Tipo1 = "Psíquico";
        }
        else if (Datos.types[0].type.name == "bug"){
            Tipo1 = "Bicho";
        }
        else if (Datos.types[0].type.name == "rock"){
            Tipo1 = "Roca";
        }
        else if (Datos.types[0].type.name == "ghost"){
            Tipo1 = "Fantasma";
        }
        else if (Datos.types[0].type.name == "normal"){
            Tipo1 = "Normal";
        }
        else if (Datos.types[0].type.name == "dragon"){
            Tipo1 = "Dragón";
        }
        else if (Datos.types[0].type.name == "dark"){
            Tipo1 = "Siniestro";
        }
        else if (Datos.types[0].type.name == "steel"){
            Tipo1 = "Acero";
        }
        else if (Datos.types[0].type.name == "fairy"){
            Tipo1 = "Hada";
        }

        if (Datos.types[1].type.name == "fire"){
            Tipo2 = "Fuego";
        }
        else if (Datos.types[1].type.name == "water"){
            Tipo2 = "Agua";
        }
        else if (Datos.types[1].type.name == "electric"){
            Tipo2 = "Eléctrico";
        }
        else if (Datos.types[1].type.name == "grass"){
            Tipo2 = "Planta";
        }
        else if (Datos.types[1].type.name == "ice"){
            Tipo2 = "Hielo";
        }
        else if (Datos.types[1].type.name == "fighting"){
            Tipo2 = "Luchador";
        }
        else if (Datos.types[1].type.name == "poison"){
            Tipo2 = "Veneno";
        }
        else if (Datos.types[1].type.name == "ground"){
            Tipo2 = "Tierra";
        }
        else if (Datos.types[1].type.name == "flying"){
            Tipo2 = "Volador";
        }
        else if (Datos.types[1].type.name == "psychic"){
            Tipo2 = "Psíquico";
        }
        else if (Datos.types[1].type.name == "bug"){
            Tipo2 = "Bicho";
        }
        else if (Datos.types[1].type.name == "rock"){
            Tipo2 = "Roca";
        }
        else if (Datos.types[1].type.name == "ghost"){
            Tipo2 = "Fantasma";
        }
        else if (Datos.types[1].type.name == "normal"){
            Tipo2 = "Normal";
        }
        else if (Datos.types[1].type.name == "dragon"){
            Tipo2 = "Dragón";
        }
        else if (Datos.types[1].type.name == "dark"){
            Tipo2 = "Siniestro";
        }
        else if (Datos.types[1].type.name == "steel"){
            Tipo2 = "Acero";
        }
        else if (Datos.types[1].type.name == "fairy"){
            Tipo2 = "Hada";
        }
    }
    else{
        if (Datos.types[0].type.name == "fire"){
            Tipo1 = "Fuego";
        }
        else if (Datos.types[0].type.name == "water"){
            Tipo1 = "Agua";
        }
        else if (Datos.types[0].type.name == "electric"){
            Tipo1 = "Eléctrico";
        }
        else if (Datos.types[0].type.name == "grass"){
            Tipo1 = "Planta";
        }
        else if (Datos.types[0].type.name == "ice"){
            Tipo1 = "Hielo";
        }
        else if (Datos.types[0].type.name == "fighting"){
            Tipo1 = "Luchador";
        }
        else if (Datos.types[0].type.name == "poison"){
            Tipo1 = "Veneno";
        }
        else if (Datos.types[0].type.name == "ground"){
            Tipo1 = "Tierra";
        }
        else if (Datos.types[0].type.name == "flying"){
            Tipo1 = "Volador";
        }
        else if (Datos.types[0].type.name == "psychic"){
            Tipo1 = "Psíquico";
        }
        else if (Datos.types[0].type.name == "bug"){
            Tipo1 = "Bicho";
        }
        else if (Datos.types[0].type.name == "rock"){
            Tipo1 = "Roca";
        }
        else if (Datos.types[0].type.name == "ghost"){
            Tipo1 = "Fantasma";
        }
        else if (Datos.types[0].type.name == "normal"){
            Tipo1 = "Normal";
        }
        else if (Datos.types[0].type.name == "dragon"){
            Tipo1 = "Dragón";
        }
        else if (Datos.types[0].type.name == "dark"){
            Tipo1 = "Siniestro";
        }
        else if (Datos.types[0].type.name == "steel"){
            Tipo1 = "Acero";
        }
        else if (Datos.types[0].type.name == "fairy"){
            Tipo1 = "Hada";
        }
        Tipo2 = "";
    }
    const LabelTipo1 = document.getElementById("LabelTipo1");
    LabelTipo1.innerHTML = Tipo1;
    const LabelTipo2 = document.getElementById("LabelTipo2");
    LabelTipo2.innerHTML = Tipo2;
}