function escolherOpcao() {
    var firtRes = document.querySelector('#text1').value;
    var secRes = document.querySelector('#text2').value;

    var opcoes = [firtRes, secRes]

    var chooseRamdom = opcoes[Math.floor(Math.random() * opcoes.length)]

    document.getElementById('res').innerHTML = `O polvo escolheu: <br> ${chooseRamdom} </br>`
}