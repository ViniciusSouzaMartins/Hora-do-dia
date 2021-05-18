function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('{ERRO} Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade <10)
            {
                //kid
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if(idade <21)
            {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if(idade<50)
            {
                //homem
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade <10)
            {
                //kid
            }
            else if(idade <21)
            {
                //jovem
            }
            else if(idade<50)
            {
                //homem
            }
            else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idaide} Anos`
        res.appendChild(img)
    }

}