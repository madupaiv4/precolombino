// --------------------- SLIDESHOW ---------------------
let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');

function showSlides() {
    slides.forEach((slide) => slide.classList.remove('active')); // Remove a classe ativa de todos os slides
    slideIndex = (slideIndex + 1) % slides.length; // Move para o próximo slide
    slides[slideIndex].classList.add('active'); // Adiciona a classe ativa ao slide atual
}

// Inicia o slideshow com intervalo de 3 segundos
setInterval(showSlides, 3000);
slides[0].classList.add('active'); // Mostra o primeiro slide inicialmente


// --------------------- BOTÃO VOLTAR AO TOPO AAAAAAAAAAAAAAAA ---------------------
const btnTopo = document.getElementById('btnTopo');
let btnVisivel = false; // Controla se o botão está visível ou não

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // Verifica se o botão deve ser mostrado ou oculto
    if ((scrollPos + windowHeight) >= (pageHeight - 100) && !btnVisivel) {
        btnTopo.classList.add('show');
        btnVisivel = true;
    } else if ((scrollPos + windowHeight) < (pageHeight - 100) && btnVisivel) {
        btnTopo.classList.remove('show');
        btnVisivel = false;
    }
});

// Redireciona suavemente para o topo
btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// --------------------- INTERRUPTOR DE TRANSIÇÕES ---------------------
const transitionsToggle = document.getElementById('transitionsToggle');

// Verifica e aplica o estado armazenado no localStorage
const savedState = localStorage.getItem('transitionsEnabled');
if (savedState === 'true') {
    transitionsToggle.checked = true;
    document.body.classList.add('transitions-enabled');
} else {
    transitionsToggle.checked = false;
    document.body.classList.remove('transitions-enabled');
}

// Alterna o estado das transições ao mudar o interruptor
transitionsToggle.addEventListener('change', () => {
    const isChecked = transitionsToggle.checked;
    if (isChecked) {
        document.body.classList.add('transitions-enabled');
        document.body.classList.remove('transition-disabled');
        localStorage.setItem('transitionsEnabled', 'true');
    } else {
        document.body.classList.remove('transitions-enabled');
        document.body.classList.add('transition-disabled');
        localStorage.setItem('transitionsEnabled', 'false');
    }
});

// Garante que o body comece visível após a transição
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('visible');
    }, 10);
});

// --------------------- TRANSIÇÕES NOS LINKS ---------------------
const contentLinks = document.querySelectorAll('.content-block');

contentLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o redirecionamento imediato

        const transitionsEnabled = document.body.classList.contains('transitions-enabled');
        if (transitionsEnabled) {
            const pageTransition = document.createElement('div');
            pageTransition.classList.add('page-transition');
            document.body.appendChild(pageTransition);

            setTimeout(() => pageTransition.classList.add('active'), 10);

            setTimeout(() => {
                window.location = link.href;
            }, 1000); // Ajuste para a duração da animação
        } else {
            window.location = link.href; // Redireciona sem animação
        }
    });
});

// NAO AGUENTO MAIS ESSE TRABALHO








// Obter os elementos do modal e do botão de imagem
var modal = document.getElementById("qrModal");
var btn = document.getElementById("qrButton");
var modalImg = document.getElementById("modalQR");
var captionText = document.getElementById("caption");
var span = document.getElementById("closeBtn");

// Quando clicar no botão (QR Code pequeno), exibir a imagem maior
btn.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "figs/qrcode.png"; // Aqui você pode usar a imagem que deseja exibir em tamanho maior
    captionText.innerHTML = "QR Code";
}

// Quando clicar no botão de fechar, fechar o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando clicar fora da imagem, também fechar o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
