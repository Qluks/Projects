let musicas = [
    {titulo:'Been Away',artista:'Brent Faiyaz', src:newFunction(), img:'imagens/Andres.jpg'},
    {titulo:'Dont break your heart',artista:'Brock Tyler', src:'musicas/Dont_Break_Your_Heart.mp3', img:'imagens/Nicola.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Eventos
document.querySelector('.play').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
});

function newFunction() {
    return 'musicas/Enemy.mp3';
}

//Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.setAttribute('src', musicas[index].img);
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
});
}

function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none'; 
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinuto + ':' + campoSegundos;
}