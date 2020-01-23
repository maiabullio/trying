var txtentrada = document.querySelector('input#entrada')
var txtsaida = document.querySelector('input#saida')
var selentrada = document.querySelector('select#selentrada')
var selsaida = document.querySelector('select#selsaida')
var resentrada = document.querySelector('div#res1')
var ressaida = document.querySelector('div#res2')
var res = document.querySelector('div#res')
var more = []
var less = []

function isNumber(n) {
    if (Number(n) > 0) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add1() {
    if (isNumber(txtentrada.value) && !inLista(txtentrada.value, more)) {
        more.push(Number(txtentrada.value))
        var item = document.createElement('option')
        item.text = `Valor R$${Number(txtentrada.value).toFixed(2).replace('.', ',')} adicionado.`
        selentrada.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    txtentrada.value = ''
    txtentrada.focus()
    res.innerHTML = ''
    document.querySelector('div#res').style.background = 'rgb(255, 255, 255)'
}

function add2() {
    if (isNumber(txtsaida.value) && !inLista(txtsaida.value, less)) {
        less.push(Number(txtsaida.value))
        var item = document.createElement('option')
        item.text = `Valor R$${Number(txtsaida.value).toFixed(2).replace('.', ',')} adicionado.` 
        selsaida.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    txtsaida.value = ''
    txtsaida.focus()
    res.innerHTML = ''
    document.querySelector('div#res').style.background = 'rgb(255, 255, 255)'
}

function finalizar() {
    if (more.length == 0 && less.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var mais = 0
        var menos = 0
        for (var pos in more) {
            mais += more[pos]
        }
        for (var pos in less) {
            menos += less[pos]
        }
        var valor = mais - menos
        res.innerHTML += `O valor total da sua conta é de <strong>R$${valor.toFixed(2).replace('.', ',')}</strong>.`
    }
    if (valor >= 0) {
        document.querySelector('div#res').style.background = 'green';
    } else {
        document.querySelector('div#res').style.background = 'red';
    }
}

