// Selecciona todos los enlaces de la página
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.href;

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});


function generatePoem() {

    const word = document.getElementById('wordInput').value.toLowerCase();
    let result = '';

    const context = {
        "mexicanos, al grito de guerra": "Este verso llama a la unidad de los mexicanos ante la guerra, simbolizando el deber patriótico de defender la nación.",
        "el acero a prestad y el bridón": "Se refiere a la preparación de las armas y los caballos, símbolos de la lucha armada en defensa de la patria.",
        "y retiemble en sus centros la tierra": "Este verso enfatiza el impacto y el poder de la guerra, aludiendo a que la tierra misma se sacude por los combates.",
        "al sonoro rugir del cañón": "El cañón es un símbolo de la guerra, cuyo estruendo resuena como una llamada a la resistencia y la defensa.",
        "ciña ¡oh patria! tus sienes de oliva": "Este verso exalta la paz, representada por la corona de olivo, símbolo de victoria sin guerra.",
        "de la paz en arcángel divino": "Se refiere a la paz como un ángel divino que protege a la patria.",
        "que en el cielo tu eterno destino por el dedo de dios se escribió": "Sugiere que el destino de México fue predeterminado por Dios, dándole un carácter sagrado a la patria.",
        "más si osare un extraño enemigo profanar con su planta tu suelo": "Advierte sobre cualquier invasor extranjero que se atreva a violar el suelo mexicano.",
        "piensa ¡oh patria querida! que el cielo un soldado en cada hijo te dio": "Este verso destaca que cada hijo de la patria es un soldado dispuesto a defenderla.",
        "¡guerra! ¡guerra sin tregua al que intente de la patria manchar los blasones!": "Llama a una guerra sin tregua contra cualquiera que intente deshonrar los símbolos de la patria.",
        "¡guerra, guerra! los patrios pendones en las olas de sangre empapad": "Simboliza las banderas patrias empapadas en la sangre de los héroes caídos por la libertad.",
        "¡guerra, guerra! en el monte, en el valle los cañones horrísonos truenen": "Describe el sonido aterrador de los cañones resonando por todas partes durante la guerra.",
        "y los ecos sonoros resuenen con las voces de ¡unión! ¡libertad!": "Enfatiza que, aun en la guerra, las voces de unidad y libertad deben prevalecer.",
        "antes patria, que inermes tus hijos bajo el yugo su cuello dobleguen": "Expresa la idea de que es preferible la muerte a someterse a un invasor o tirano.",
        "tus campiñas con sangre se rieguen sobre sangre se estampe su pie": "Describe la defensa de la patria a toda costa, con la sangre de los héroes fertilizando el suelo.",
        "y tus templos, palacios y torres se derrumben con hórrido estruendo": "Representa la destrucción de los edificios más significativos en caso de invasión o derrota.",
        "y sus ruinas existan diciendo: de mil héroes la patria aquí fue": "Las ruinas contarían la historia de los héroes que defendieron la patria.",
        "¡patria! ¡patria! tus hijos te juran exhalar en tus aras su aliento": "El juramento de los hijos de la patria de dar su vida por ella si es necesario.",
        "si el clarín con su bélico acento los convoca a lidiar con valor": "El clarín llama a los mexicanos a luchar con valentía cuando la patria los necesita.",
        "¡para ti las guirnaldas de oliva!": "La guirnalda de olivo representa la paz que finalmente llegará a la patria.",
        "¡un recuerdo para ellos de gloria!": "El recuerdo de los héroes caídos permanecerá en la gloria eterna.",
        "¡un laurel para ti de victoria!": "El laurel representa la victoria que la patria conseguirá.",
        "¡un sepulcro para ellos de honor!": "Los caídos en la guerra serán honrados con sepulcros dignos de héroes."
    };

    for (let verse in context) {
        if (verse.includes(word)) {
            result = context[verse];  // Mostrar la explicación del verso
            break;  // Detener la búsqueda cuando se encuentre una coincidencia
        }
    }

    if (!result) {
        result = "No se ha encontrado una explicación para ese verso.";
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultOutput').innerHTML = result;
}

/*PARA LA GALERIA*/
const images = [
    { src: 'images/escudo.png', description: 'Estas observando el Escudo Nacional Mexicano, está compuesto por una simbólica águila real, que sostiene una serpiente en su pico y una garra, mientras se posa sobre un nopal, el cual crece sobre una roca en medio de un lago. Alrededor del águila y el nopal se encuentran dos ramas: una de encino (a la izquierda), que representa la fortaleza del pueblo mexicano, y otra de laurel (a la derecha), que simboliza la victoria. Estas ramas están unidas en la parte inferior con un lazo tricolor, que hace referencia a los colores de la bandera nacional: verde, blanco y rojo. El escudo refleja tanto los elementos naturales del país como sus raíces prehispánicas y su identidad como nación independiente.' },
    { src: 'images/bandera.png', description: 'La imagen que observas es a Bandera de México, está compuesta por tres franjas verticales de igual tamaño, con los colores verde, blanco y rojo, de izquierda a derecha. En el centro de la franja blanca, se encuentra el Escudo Nacional Mexicano.Cada color de la bandera tiene un simbolismo particular: Verde: originalmente representaba la independencia de México respecto de España, pero con el tiempo ha llegado a simbolizar la esperanza y el amor por la patria. Blanco: en un principio, representaba la pureza de la religión católica, pero en la actualidad se asocia más con la unidad y la paz entre los mexicanos. Rojo: inicialmente simbolizaba la sangre derramada por los héroes que lucharon por la independencia, y hoy es un símbolo del valor y la sangre de quienes defendieron la patria. El Escudo Nacional, ubicado en el centro de la franja blanca, representa la leyenda de la fundación de Tenochtitlán, donde los mexicas vieron la señal divina del águila devorando a la serpiente, posada sobre un nopal.' },
    { src: 'images/himno.png', description: 'Observas una representación del Himno Nacional Mexicano, es uno de los símbolos patrios de México, lleno de historia y fervor. Fue compuesto en 1854 por Francisco González Bocanegra, quien escribió la letra, y por Jaime Nunó, quien compuso la música. El himno se caracteriza por su tono bélico y patriótico, haciendo un llamado a la defensa de la patria y el sacrificio por la nación. La letra del himno está inspirada en la historia de las luchas de México por la libertad y la soberanía, haciendo especial énfasis en la valentía de los soldados que han defendido la nación en tiempos de guerra. Es un canto al heroísmo y al amor por la patria, destacando la idea de que los mexicanos están dispuestos a dar su vida por la defensa de su tierra.' },
    { src: 'images/parro.jpg', description: 'Observas una imagen representativa según la madrugada del 16 de septiembre el cura Miguel Hidalgo y Costilla hizo un llamado a sus feligreses y partidarios para levantarse en armas contra el gobierno español. Para reunir a la comunidad, Hidalgo tocó las campanas de la Parroquia del Pueblo de Dolores en Dolores Hidalgo, Guanajuato.' },
    { src: 'images/castillo.jpg', description: 'La imagen que observas es el Castillo de Chapultepec en la Ciudad de México, es evocar años de historia colonial mexicana. Construido entre 1785 y 1787, fue concebido en primera instancia como un lugar de descanso por el virreinato de la época y construido en la cima del bosque de Chapultepec. Fue en 1833 que acogió en su seno a la escuela militar y para 1847 se suscitó la batalla de Chapultepec donde los “niños héroes” de la escuela se sumaron a la resistencia del ataque en la guerra contra Estados Unidos.' },
    { src: 'images/independencia.jpg', description: 'Observas una imagen representativa de La independencia de México se consumó el 27 de septiembre de 1821. La ceremonia de la consumación tuvo lugar en la Ciudad de México, cuando el último virrey de la Nueva España, Juan O Donojú, firmó el Acta de Independencia y entregó el poder a Agustín de Iturbide, quien se convirtió en el primer emperador de México.'},
    { src: 'images/movimiento.jpg', description: 'Observas la primera bandera, fue el estandarte que utilizó Miguel Hidalgo en 1810 para el inicio de la lucha por la independencia de México, ésta tenía pintado con acuarela la Virgen de Guadalupe y en un extremo el escudo Español.'},
    { src: 'images/maria.jpg', description: 'La imagen que observas es José María Morelos y Pavón nació el 30 de septiembre de 1765 en Valladolid, Michoacán (hoy Morelia en su honor). Fue un sacerdote, militar insurgente y patriota mexicano que organizó y lideró la segunda etapa de la Guerra de Independencia Mexicana.'},
    { src: 'images/miguel.png', description: 'Observas a Miguel Hidalgo y Costilla (1753-1811) fue un sacerdote y líder insurgente que es considerado el Padre de la Independencia de México. Nació en Pénjamo, Guanajuato, y fue un hombre culto, educado en teología y filosofía. Hidalgo es conocido por haber iniciado el movimiento de independencia contra el dominio español. El 16 de septiembre de 1810, Hidalgo lanzó el Grito de Dolores, un llamado a la rebelión en el pueblo de Dolores (hoy Dolores Hidalgo, Guanajuato), incitando a la población a luchar por la libertad. Con una bandera de la Virgen de Guadalupe, encabezó un ejército popular compuesto principalmente por campesinos, indígenas y mestizos. Aunque su movimiento no logró consolidar la independencia durante su vida, su liderazgo encendió la chispa del levantamiento que, finalmente, culminaría en la independencia de México en 1821.'},
    { src: 'images/josefa.png', description: 'Miras a Josefa Ortiz de Domínguez (1768-1829), también conocida como "La Corregidora", fue una figura clave en la conspiración que dio inicio a la lucha por la independencia de México. Nació en la Ciudad de México y se casó con Miguel Domínguez, el corregidor de Querétaro, de donde proviene su famoso apodo. Josefa jugó un papel crucial en las reuniones secretas que organizaban los insurgentes en Querétaro, junto con figuras como Miguel Hidalgo, Ignacio Allende y Juan Aldama. Cuando la conspiración fue descubierta por las autoridades españolas en 1810, ella logró advertir a los líderes insurgentes de que habían sido delatados. A pesar de estar vigilada en su casa, envió un mensaje a Ignacio Allende para que iniciaran el levantamiento antes de ser arrestados, lo que permitió que el movimiento comenzara con el Grito de Dolores.'},
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const descriptionText = document.getElementById('image-description');

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

document.getElementById('infoButton').addEventListener('click', () => {
    descriptionText.textContent = images[currentIndex].description;
});

// Función para actualizar la galería
function updateGallery() {
    galleryImage.src = images[currentIndex].src;
    descriptionText.textContent = ''; // Limpiar la descripción cuando se cambia de imagen
}

// Llamar a `updateGallery()` cuando la página cargue para mostrar la primera imagen
window.onload = function() {
    updateGallery();
};
