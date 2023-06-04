AOS.init();

const aniversario = new Date('sept 14, 2023 19:00:00');
const diaAniversario = aniversario.getTime();

const contador = setInterval(() => {
    const diaAtual = new Date();
    const tempoReal = diaAtual.getTime();

    const marcoTemporal = diaAniversario - tempoReal;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEms = 1000 * 60;


    const diaDoAniversario = Math.floor(marcoTemporal / diaEmMs);
    const horaDoAniversario = Math.floor((marcoTemporal % diaEmMs) / horaEmMs);
    const mintutosDoAniversario = Math.floor((marcoTemporal % horaEmMs) / minutosEms);
    const segundosDoAniversario = Math.floor((marcoTemporal % minutosEms) / 1000);

    document.getElementById('contagem').innerHTML = `${diaDoAniversario} dia ${horaDoAniversario}hs ${mintutosDoAniversario}Min ${segundosDoAniversario}s`;
    if (marcoTemporal < 0) {
        clearInterval(contador);
        document.getElementById('contagem').innerHTML = 'Acabou o Aniversário';

    }

}, 1000);


//finalizando contador