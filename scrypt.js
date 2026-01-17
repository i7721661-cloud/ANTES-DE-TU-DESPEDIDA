// =========================================
// 1. CONFIGURACIÓN Y DATOS
// =========================================
const CLAVE_SECRETA = "morenita";

const MI_CARTA = `Para mi niña, con todo mi corazón 💖

Hola, mi morenita. 👧🏾 Te escribo estas palabras desde lo más profundo de mi honestidad, porque sé que últimamente las cosas han estado tensas ⛈️ y, sobre todo, porque reconozco que en lugar de ser tu paz 🕊️, me convertí en un ruido más en tu cabeza 🧠.

Primero que nada, quiero pedirte perdón 🙏. Sé que he sido intenso, sé que mis inseguridades se tradujeron en dramas innecesarios 🎭 y que, en un momento donde ya te sentías abrumada por cosas que llevas en silencio 😶, yo terminé añadiéndote una carga que no merecías 🎒. Mi intención siempre fue estar cerca de ti, pero entiendo que mi forma de hacerlo terminó invadiendo tu espacio y agotando tu paciencia ⌛. Perdóname por no saber leer tus tiempos y por dejar que mis impulsos nublaran lo que realmente necesitas de mí: calma 🌊.

Sé que hoy el mundo se siente pesado sobre tus hombros, corazón 🌎. He notado que hay temas que te agobian y que prefieres callar, y quiero que sepas que respeto eso ✨. No tienes que decirme nada si no estás lista, pero lo que sí necesito que entiendas, mi negrita, es que no estás sola 🤝. A pesar de mis errores y de mis dramas, mi compromiso contigo es inquebrantable ⚓. Estoy aprendiendo a amarte mejor, a amarte de una forma más sana y madura, porque mi meta no es solo estar a tu lado en las buenas, sino ser el hombre en el que puedas confiar ciegamente cuando todo lo demás falle 🛡️.

Te amo de una manera que trasciende cualquier pelea o malentendido ❤️. Te amo con la certeza de quien ha encontrado a su compañera para toda la vida 💍. Quiero una vida contigo, una de verdad; con sus días grises y sus mañanas brillantes ☀️. Me visualizo contigo en el futuro, no como alguien que te presiona, sino como ese puerto seguro donde llegas a descansar después de un día agotador 🏠. Quiero que sepas que aquí, en mis brazos, siempre habrá un refugio donde puedes soltar las armas, dejar de ser fuerte por un momento y simplemente ser mi niña, cuidada y protegida 🐣.

Perdona mi intensidad, es solo el reflejo de lo mucho que me importas, aunque sé que debo canalizarlo mejor ❤️‍🔥. A partir de hoy, quiero que este texto sea mi promesa: voy a trabajar en mí para ser el apoyo que te mereces. No quiero ser un problema más, quiero ser tu solución, tu silencio tranquilo y tu mano firme 🤝.

Tómate el tiempo que necesites para respirar, mi vida 🌬️. Aquí voy a estar, no para presionarte ni para hacerte dramas, sino para recordarte que te amo con toda mi alma y que, pase lo que pase, cuentas conmigo para siempre ♾️. Eres la mujer de mi vida, mi morenita, y nada me hace más feliz que saber que, a pesar de las tormentas, seguimos siendo tú y yo contra el mundo 🌎❤️.

Te amo hoy, mañana y para toda la vida. 💍👩‍❤️‍👨`;

const TEXTOS_CINEMA = {
    0: "Han pasado 8 meses desde que empezamos esta historia.\nCada día a tu lado ha sido un regalo del cielo.\nNo puedo imaginar mi vida sin tu risa y tu luz.\nEres la razón por la que siempre tengo una sonrisa.\nTe amo más de lo que las palabras pueden expresar. ❤️",
    1: "Recuerdo el primer día como si fuera ayer mismo.\nMiro nuestras fotos y veo cuánto hemos crecido juntos.\nGracias por aguantar mis días malos y celebrar los buenos.\nEres mi puerto seguro y mi aventura favorita.\nEstos 8 meses son solo el inicio de nuestra eternidad. 😍",
    2: "Lo que más me gusta de ti es tu mirada profunda.\nMe encanta porque cuando me ves, siento que el mundo se detiene.\nEs esa chispa de ternura que solo tú tienes la que me atrapa.\nMe hace sentir que soy la persona más afortunada del mundo.\nEres simplemente perfecta tal como eres. ✨",
    3: "Me fascina tu forma de reírte de mis tonterías.\nMe gusta porque me haces sentir que puedo ser yo mismo siempre.\nEs esa complicidad la que hace que cada momento sea especial.\nPorque una vida sin tu risa no sería vida para mí.\nTe amo por esa alegría que contagias. 💖",
    4: "Amo la paciencia infinita que tienes conmigo.\nMe gusta porque me demuestras que el amor de verdad es saber esperar.\nEs tu calma la que equilibra mi locura diaria.\nPorque a tu lado aprendo a ser una mejor persona cada día.\nEres mi paz en medio de cualquier tormenta. 🌹",
    5: "El Amor '3000' (Devoción Absoluta):\nEsta es mi forma de decirte que mi amor por ti no tiene un techo ni un final lógico. Como Tony con Morgan, no te amo en una escala del 1 al 10, te amo en una cifra que inventé porque las palabras normales no alcanzan. Te amo así porque eres mi mayor legado y mi mayor tesoro; eres esa persona por la que daría hasta lo que no tengo para asegurarme de que estés bien. Eres mi hogar en medio de cualquier batalla. ❤️",
    6: "El Amor de la 'Próxima Danza' (Lealtad Eterna):\nA veces siento que mi alma te ha estado buscando desde siempre, como Steve buscó a Peggy a través del tiempo. La razón por la que te amo así es porque mi compromiso contigo no es un impulso del momento, sino una promesa de vida. Sin importar cuántos 'años de hielo' o dificultades pasemos, mi corazón siempre guardará ese último baile solo para ti. Eres mi constante en un mundo que no para de cambiar. 💃",
    7: "El Amor del 'Sacrificio' (Protección Pura):\nComo Peter Parker con MJ, mi amor se traduce en cuidarte, a veces incluso en silencio. Te amo de esta manera porque tu felicidad es el motor que me mueve; si tú estás bien, mi mundo está en paz. Estoy dispuesto a enfrentar cualquier desafío y a dejar de lado mi ego con tal de que tú puedas brillar y sentirte segura. Amarte significa ser tu apoyo incondicional, el que siempre te atrapa cuando sientes que vas a caer. 🕸️",
    8: "El Amor de la 'Perseverancia' (Conexión de Almas):\nEste es el amor de Wanda y Vision: un amor que no huye del dolor, sino que lo atraviesa. Te amo así porque entiendo que nuestra relación no es solo para los días de sol, sino para sostenernos cuando todo se vuelve gris. Nuestra conexión es profunda porque se basa en entendernos de verdad, en saber que incluso si el mundo se desmorona, lo que sentimos nosotros es la única realidad que importa. ✨",
    9: "El Amor de 'Socios en el Crimen' (Aventura y Cambio):\nComo Quill y Gamora, te amo porque eres mi compañera de equipo, mi mejor amiga y mi mayor aventura. Me encanta que no somos perfectos, que discutimos por tonterías pero que, al final del día, nadie me entiende mejor que tú. Te amo porque sacaste mi lado más humano, me enseñaste a bailar bajo la lluvia y transformaste mi caos en una melodía que ahora no puedo dejar de escuchar. 🎶",
    10: "Por tu autenticidad sin filtros:\nTe amo precisamente por esas facetas tuyas que el resto del mundo no ve. Te amo cuando te despiertas despeinada, cuando estás de mal humor porque tienes hambre o cuando lloras viendo una película. Esas 'imperfecciones' son las que me hacen sentir que tengo el privilegio de conocer a la mujer real detrás de la máscara. 🌸",
    11: "Por la madurez ante las tormentas:\nLo nuestro no es perfecto, y eso es lo que más valoro. Te amo porque, cuando tenemos problemas, no buscas la puerta de salida, sino que buscas mi mirada para arreglar las cosas. Esa capacidad que tienes de enfrentar los conflictos con honestidad, de decirme qué te duele y de escucharme a mí, es lo que me da la seguridad de que podemos con todo. ⛈️",
    12: "Por ser mi santuario y mi hogar:\nHay días en los que el mundo exterior es agotador, pero basta con estar a tu lado para que todo el peso desaparezca. Te amo porque eres el único lugar donde puedo ser vulnerable sin miedo. No es solo que me gustes, es que contigo me siento a salvo; eres esa paz mental que no sabía que necesitaba hasta que llegaste a poner orden a mi desorden. 🏠",
    13: "Por la evolución constante a tu lado:\nA veces me miro al espejo y me doy cuenta de que soy alguien mucho más íntegro desde que estás conmigo. No es que me hayas cambiado, es que me has inspirado a querer ser mejor por mi propio bien y por el nuestro. Te amo porque crees en mi potencial incluso cuando yo mismo lo dudo, y esa confianza tuya es la fuerza más grande que he tenido jamás. 💪",
    14: "Por el misterio de tus detalles:\nMe pierdo observando tus pequeñas manías: la forma en que mueves las manos al hablar, el tono de voz que usas cuando estás emocionada o ese gesto que haces cuando algo no te convence. Te amo por todas esas minucias que nadie más nota, pero que para mí son el mapa de quién eres. Cada pequeño detalle tuyo es una razón más para confirmar que eres la persona correcta. 🧐",
    15: "Por el arte de la paciencia y el perdón:\nSé que a veces soy difícil de llevar, y te amo profundamente por la paciencia que me tienes. Valoro que nuestra relación sea un espacio de aprendizaje, donde nos permitimos fallar y volver a empezar. El hecho de que sepamos perdonarnos de corazón y aprender de nuestros errores demuestra que lo nuestro es mucho más fuerte que cualquier orgullo. 🙏",
    16: "Por los silencios que no incomodan:\nUna de las cosas que más amo es que podemos estar horas sin decir una sola palabra y sentirnos plenamente acompañados. No necesito impresionarte constantemente con charlas vacías; simplemente estar en el mismo espacio que tú, compartiendo el aire y el silencio, me hace sentir más conectado que mil conversaciones con cualquier otra persona. 😶‍🌫️",
    17: "Por su admirable fuerza interior:\nTe admiro profundamente por la guerrera que eres. Me encanta ver cómo enfrentas tus propios retos y cómo, a pesar de las cicatrices que puedas tener, siempre encuentras la manera de brillar. Esa fortaleza que llevas dentro no solo me atrae, sino que me llena de un respeto inmenso hacia la mujer que has decidido ser. 🤺",
    18: "Por la libertad absoluta de ser yo:\nContigo no tengo que actuar ni medir lo que digo. Te amo porque puedo contarte mis miedos más absurdos o mis sueños más locos y sé que no me vas a juzgar. Me das la libertad de ser un niño, de ser un hombre, de ser un desastre y de ser un éxito, todo al mismo tiempo. Eres la única persona ante la cual soy 100% yo. 🔓",
    19: "Por la elección consciente de cada mañana:\nAl final del día, lo que más importa es que te elijo. Te amo porque, sabiendo que el amor requiere esfuerzo y que la vida tiene altibajos, cada vez que abro los ojos decido que eres tú con quien quiero caminar. No es solo un sentimiento que me sucede, es una decisión que tomo con todo mi ser: te elijo hoy, mañana y cada día que me quede por delante. 💍"
};

// =========================================
// 2. VARIABLES DE ESTADO
// =========================================
let currentPhotoIdx = 0;
let isTextVisible = false;
let letterStarted = false;
let reasonInterval;
let typingTimeout;

// =========================================
// 3. LOGIN E INTRO
// =========================================
function intentarEntrar() {
    const input = document.getElementById('password');
    const pass = input.value.toLowerCase();
    const errorMsg = document.getElementById('error-msg');

    if (pass === CLAVE_SECRETA) {
        document.getElementById('login-screen').classList.add('hidden');
        startIntro();
    } else {
        errorMsg.classList.remove('hidden');
        input.style.animation = "shakeAnim 0.5s";
        setTimeout(() => {
            input.style.animation = "";
            errorMsg.classList.add('hidden');
        }, 2000);
    }
}

function startIntro() {
    const intro = document.getElementById('intro-screen');
    intro.classList.remove('hidden');
    intro.style.display = 'flex';
    setTimeout(() => {
        intro.classList.add('hidden');
        intro.style.display = 'none';
        const menu = document.getElementById('menu-screen');
        menu.classList.remove('hidden');
        menu.style.display = 'flex';
    }, 16000); // 16 segundos para frases
}

// =========================================
// 4. NAVEGACIÓN
// =========================================
function showSection(id) {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('menu-screen').style.display = 'none';
    const target = document.getElementById(id);
    target.classList.remove('hidden');
    target.style.display = 'flex';

    if (id === 'photos-section') {
        currentPhotoIdx = 0;
        updateCinema();
    } else if (id === 'reasons-section') {
        startReasonsCycle();
    }
}

function goBack() {
    const sections = ['letter-section', 'photos-section', 'reasons-section'];
    sections.forEach(s => {
        const el = document.getElementById(s);
        if(el) { el.classList.add('hidden'); el.style.display = 'none'; }
    });

    // Resetear estados
    clearInterval(reasonInterval);
    clearTimeout(typingTimeout);
    resetCarta();

    const menu = document.getElementById('menu-screen');
    menu.classList.remove('hidden');
    menu.style.display = 'flex';
}

// =========================================
// 5. SECCIÓN FOTOS (CINEMA)
// =========================================
function updateCinema() {
    const imgEl = document.getElementById('cinema-img');
    const counterEl = document.getElementById('current-photo');
    const overlay = document.getElementById('cinema-text-overlay');
    const frame = document.querySelector('.cinema-frame');

    imgEl.src = `imagenes/image${currentPhotoIdx + 1}.jpg`;
    if(counterEl) counterEl.innerText = currentPhotoIdx + 1;
    
    isTextVisible = false;
    overlay.classList.add('hidden');
    frame.classList.remove('blur');
}

function handleCinemaClick() {
    const overlay = document.getElementById('cinema-text-overlay');
    const textEl = document.getElementById('cinema-long-text');
    const frame = document.querySelector('.cinema-frame');

    if (!isTextVisible) {
        textEl.innerText = TEXTOS_CINEMA[currentPhotoIdx] || "Te amo mucho. ❤️";
        overlay.classList.remove('hidden');
        frame.classList.add('blur');
        isTextVisible = true;
    } else {
        currentPhotoIdx++;
        if (currentPhotoIdx >= 20) currentPhotoIdx = 0;
        const card = document.getElementById('cinema-card');
        card.style.animation = 'none';
        card.offsetHeight; 
        card.style.animation = 'zoomInCinema 0.5s ease-out';
        updateCinema();
    }
}

// =========================================
// 6. SECCIÓN RAZONES (RUEDA 3D)
// =========================================
function flipCard(element) {
    element.classList.toggle('flipped');
}

function startReasonsCycle() {
    let rIdx = 0;
    const RAZONES_LIST = Object.values(TEXTOS_CINEMA); // Usamos tus textos como razones
    const textEl = document.getElementById('changing-reason');
    
    clearInterval(reasonInterval);
    reasonInterval = setInterval(() => {
        if(textEl) {
            textEl.style.opacity = 0;
            setTimeout(() => {
                textEl.innerText = RAZONES_LIST[rIdx].split('\n')[0]; // Primera línea
                textEl.style.opacity = 1;
                rIdx = (rIdx + 1) % RAZONES_LIST.length;
            }, 500);
        }
    }, 4000);
}

// =========================================
// 7. SECCIÓN CARTA (BUZÓN 3D)
// =========================================
function entregarSobre() {
    const box = document.getElementById('mailbox');
    const env = document.getElementById('envelope-container');
    const msg = document.getElementById('instruction-msg');

    if (!box.classList.contains('open')) {
        box.classList.add('open');
        setTimeout(() => {
            env.classList.remove('hidden');
            setTimeout(() => {
                env.classList.add('emerge');
                msg.innerText = "¡Ha llegado algo! Toca el sobre ❤️";
            }, 50);
        }, 700);
    }
}

function abrirSobreCompleto(event) {
    event.stopPropagation();
    const env = document.getElementById('envelope-container');
    if (env.classList.contains('emerge') && !env.classList.contains('open')) {
        env.classList.add('open');
        if (!letterStarted) {
            letterStarted = true;
            setTimeout(iniciarEfectoEscritura, 1500);
        }
    }
}

function iniciarEfectoEscritura() {
    const elemento = document.getElementById('typewriter-text');
    const papel = document.getElementById('letter-paper');
    let i = 0;
    elemento.innerHTML = ""; 

    function escribir() {
        if (i < MI_CARTA.length) {
            elemento.innerHTML += MI_CARTA.charAt(i) === "\n" ? "<br>" : MI_CARTA.charAt(i);
            i++;
            papel.scrollTop = papel.scrollHeight;
            typingTimeout = setTimeout(escribir, 45); 
        }
    }
    escribir();
}

function resetCarta() {
    const box = document.getElementById('mailbox');
    const env = document.getElementById('envelope-container');
    const msg = document.getElementById('instruction-msg');
    if(box) box.classList.remove('open');
    if(env) {
        env.classList.add('hidden');
        env.classList.remove('emerge', 'open');
    }
    if(msg) msg.innerText = "Toca el buzón para recibir tu correo ❤️";
    const txt = document.getElementById('typewriter-text');
    if(txt) txt.innerHTML = "";
    letterStarted = false;
}

// =========================================
// 8. EVENTOS DE CARGA
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('loginBtn');
    const input = document.getElementById('password');

    if(btn) btn.addEventListener('click', intentarEntrar);
    if(input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') intentarEntrar();
        });
    }

    const toggle = document.getElementById('togglePassword');
    if(toggle) {
        toggle.addEventListener('click', function() {
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            this.classList.toggle('fa-eye-slash');
            this.classList.toggle('fa-eye');
        });
    }
});