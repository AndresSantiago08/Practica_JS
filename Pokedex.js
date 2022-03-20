
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
            MostrarImagen("./PantallaInicio.png");
            MostrarNombre("No hay registro");
            MostrarTiposError();
            MostrarEstadisticasError();
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
            MostrarEstadisticas(Datos);
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
    LabelTituloPokemon.innerHTML = "Nombre:";
    const LabelNombrePokemon = document.getElementById("LabelNombrePokemon");
    LabelNombrePokemon.innerHTML = NombreRegistrado.charAt(0).toUpperCase() + NombreRegistrado.slice(1);
}

function MostrarNumero(NumeroRegistrado){
    const LabelTituloPokemon = document.getElementById("LabelTituloPokemon");
    LabelTituloPokemon.innerHTML = "Numero:";
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
    const LabelTipo = document.getElementById("LabelTipo");
    LabelTipo.innerHTML = "Tipo:";
    const LabelTipo1 = document.getElementById("LabelTipo1");
    LabelTipo1.innerHTML = Tipo1;
    const LabelTipo2 = document.getElementById("LabelTipo2");
    LabelTipo2.innerHTML = Tipo2;
}

function MostrarTiposError(){
    const LabelTipo = document.getElementById("LabelTipo");
    LabelTipo.innerHTML = "Tipo:";
    const LabelTipo1 = document.getElementById("LabelTipo1");
    LabelTipo1.innerHTML = "";
    const LabelTipo2 = document.getElementById("LabelTipo2");
    LabelTipo2.innerHTML = "";
}

function MostrarEstadisticas(Datos){
    const headLabelPS = document.getElementById("headPS");
    headLabelPS.innerHTML = "Puntos de Salud:";

    const headAtaque = document.getElementById("headAtaque");
    headAtaque.innerHTML = "Ataque:";

    const headDefensa = document.getElementById("headDefensa");
    headDefensa.innerHTML = "Defensa:";

    const headAE = document.getElementById("headAE");
    headAE.innerHTML = "Ataque Especial:";

    const headDE = document.getElementById("headDE");
    headDE.innerHTML = "Defensa Especial:";

    const headVelocidad = document.getElementById("headVelocidad");
    headVelocidad.innerHTML = "Velocidad:";

    let PS = Datos.stats[0].base_stat;
    const LabelPS = document.getElementById("LabelPS");
    LabelPS.innerHTML = PS;

    let Ataque = Datos.stats[1].base_stat;
    const LabelAtaque = document.getElementById("LabelAtaque");
    LabelAtaque.innerHTML = Ataque;

    let Defensa = Datos.stats[2].base_stat;
    const LabelDefensa = document.getElementById("LabelDefensa");
    LabelDefensa.innerHTML = Defensa;

    let AtaqueE = Datos.stats[3].base_stat;
    const LabelAE = document.getElementById("LabelAE");
    LabelAE.innerHTML = AtaqueE;

    let DefensaE = Datos.stats[4].base_stat;
    const LabelDE = document.getElementById("LabelDE");
    LabelDE.innerHTML = DefensaE;

    let Velocidad = Datos.stats[5].base_stat;
    const LabelVelocidad = document.getElementById("LabelVelocidad");
    LabelVelocidad.innerHTML = Velocidad;
}

function MostrarEstadisticasError(){
    const headLabelPS = document.getElementById("headPS");
    headLabelPS.innerHTML = "Puntos de Salud:";

    const headAtaque = document.getElementById("headAtaque");
    headAtaque.innerHTML = "Ataque:";

    const headDefensa = document.getElementById("headDefensa");
    headDefensa.innerHTML = "Defensa:";

    const headAE = document.getElementById("headAE");
    headAE.innerHTML = "Ataque Especial:";

    const headDE = document.getElementById("headDE");
    headDE.innerHTML = "Defensa Especial:";

    const headVelocidad = document.getElementById("headVelocidad");
    headVelocidad.innerHTML = "Velocidad:";

    const LabelPS = document.getElementById("LabelPS");
    LabelPS.innerHTML = "";

    const LabelAtaque = document.getElementById("LabelAtaque");
    LabelAtaque.innerHTML = "";

    const LabelDefensa = document.getElementById("LabelDefensa");
    LabelDefensa.innerHTML = "";

    const LabelAE = document.getElementById("LabelAE");
    LabelAE.innerHTML = "";

    const LabelDE = document.getElementById("LabelDE");
    LabelDE.innerHTML = "";

    const LabelVelocidad = document.getElementById("LabelVelocidad");
    LabelVelocidad.innerHTML = "";
}