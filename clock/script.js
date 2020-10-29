function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hAtual = data.getHours()
    
    msg.innerHTML = `Agora são ${hAtual} horas.`
    if(hAtual >= 0 && hAtual < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#ffe666'
        msg.innerHTML += ' BOM DIA!'
    }else if(hAtual >= 12 && hAtual < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#fe952f'
        msg.innerHTML += ' BOA TARDE!'
    } 
    else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#2d363f'
        msg.innerHTML += ' BOA NOITE!'
    }
}
