function clicar() {
    var res = document.getElementById('res')
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    //contagem.innerHTML += 'jáaaaaaaaaaaaaaaaaaa'
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML += "Erro! O usuário não digitou corretamente!"
        document.getElementById('res').style.color = '#fd0000'
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido!')
            p = 1
        }
        if (i < f) { // montagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
        }
        } else { // montagem decrescente
            for(let c = i; c>=f; c -=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}