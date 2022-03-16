
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

