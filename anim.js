// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Y van quedando los vasos vacíos", time: 11},
  
  { text: "Vino derramado, tu cuerpo y el mío", time: 16.8 },

  { text: "Ya pasó tiempo y nada ha cambiado", time: 23 },
  { text: "En todas las noches, te sigo pensando", time: 29 },
  { text: "Y ya no puedo, vivir esperando", time: 36 },
  { text: "No sé si es un sueño o estoy despertando", time: 42},
  { text: "Y quiero contarte las cosas que siento", time: 48 },
  { text: "No quiero perderme en este momento", time: 53.5},
  { text: "Aquí estoy, otra vez", time: 60},
  { text: "No te preocupes, no todo es en vano", time: 66},

  { text: "Aunque siempre pierdas la primera mano", time: 72},
  { text: "Quiero contarte siempre el mismo cuento", time: 78},
  { text: "Porque ya sabemos, quién pierde primero", time:84},
  { text: "No me arrepiento de nada contigo", time: 90
   },
  { text: "Contigo me muero, contigo revivo", time: 96 },
  { text: "Y sos mi victoria, y sos mi fracaso", time: 102 },
  { text: "Sos todo lo bueno, sos todo lo malo", time: 108 },
  { text: "Aquí estoy, otra vez", time: 115 },
  { text: "Soy tu soldado de brazos rendidos", time: 121 },
  { text: "Siempre en esta guerra salimos heridos", time: 127},
  { text: "Cómo explicarte este sentimiento", time: 133},
  { text: "Si no me acostumbro, si no lo resuelvo", time: 139 },
  { text: "Nunca te olvides, que te doy mi vida", time:145 },
  { text: "Te extraño de noche, te quiero de día", time: 151 },
  { text: "Y quiero llevarte por siempre conmigo", time: 157 },
  { text: "Hacia ningún lado, hacia el infinito", time: 163 },
  { text: "Aquí estoy, otra vez ", time: 170 },
  { text: " TÚ ", time: 177 },
  { text: "Quiero perderme en tu laberinto", time: 230 },
  { text: "Quiero ser tu esclavo morirme contigo", time: 236 },
  { text: "Aunque lo intente, no puedo olvidarte", time: 242 },
  { text: "No puedo mentirte, no quiero marcharme", time: 248 },
  { text: "Nunca te olvides que te doy mi vida", time: 254 },
  { text: "Te extraño de noche, te quiero de día", time: 260.5 },
 
  { text: "Y sos el remedio de todas mis penas", time: 266 },
  { text: "Sos la fantasía, mi dulce condena", time: 272 },
  { text: "Aquí estoy, otra vez", time: 279 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time +5 ,
  );


  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);