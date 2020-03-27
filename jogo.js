

var retangulo = document.getElementById('retangulo')
var cortina = document.getElementById('cortina')
var barra = document.getElementById('barra')
var tg = document.getElementById('tg')
var barraRed = document.getElementById('barra-red')
var tgRed = document.getElementById('tg-red')
var r1 = document.getElementById('r1')
var l1 = document.getElementById('l1')
var l2 = document.getElementById('l2')
var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var textoL = document.getElementById('textoL')
var textoR = document.getElementById('textoR')
var barras = [a1, l1, r1, l2, a2]
var x = 0
var isDrawing = false
var isDrawingRed = false
var MIN = -5
var MAX = 105

moverBarras = _ => {
	let percB = Math.floor(Math.random() * 21) * 5 - 10;
	barras.map(b => {
		b.style.left = percB-2.5+"%"
		percB += 5
	})
}


tgRed.addEventListener('mousedown', _ => {
	x = event.clientX - retangulo.offsetLeft
	isDrawingRed = true
	console.log('a')
	moverBarra(barraRed, tgRed);
});

tg.addEventListener('mousedown', _ => {
	x = event.clientX - retangulo.offsetLeft
	isDrawing = true
	moverCortina()
});

window.addEventListener('mouseup', _ => {
	x = event.clientX - retangulo.offsetLeft
	if(isDrawingRed)moverBarra(barraRed, tgRed,true);
	isDrawing = false
	isDrawingRed = false
});

window.addEventListener('mousemove', event => {
	x = event.clientX - retangulo.offsetLeft
	if (isDrawing === true) {
		moverCortina()
	}
	if (isDrawingRed === true) {
		moverBarra(barraRed, tgRed);
	}
});



moverCortina = _ => {
	let porc = x / retangulo.offsetWidth * 100;
	porc = Math.min(Math.max(porc, MIN), MAX)
	cortina.style.width = `${porc}%`
	barra.style.left = retangulo.offsetLeft+cortina.offsetWidth
	moverBarra()
}

moverBarra = (b = barra, t = tg , roundF = false) => {
	let total =  retangulo.offsetWidth
	let battaW = ((b.offsetWidth/2)/total)*100
	let tgW = ((t.offsetWidth/2)/total)*100
	let totalS = (x/total) *100
	if(roundF) totalS = round(totalS)
	b.style.left = calculoLoco(battaW,totalS) +"%"
	t.style.left = calculoLoco(tgW,totalS)  +"%"
}

calculoLoco = (wid, totalS) => {
	let max = MAX - wid
	let min = MIN - wid
	let porc = (totalS - wid)
	let r = Math.min(Math.max(porc, min), max)
	return r
}

setCartas = _ => {
	var item = cartas[Math.floor(Math.random() * cartas.length)]
	textoL.innerHTML = item.l
	textoR.innerHTML = item.r
}


round = x => Math.round(x/5)*5

window.addEventListener('load', function () {
	x = 0
	moverBarra()
	moverCortina()
	moverBarras()
})


var cartas = [
	{l:'parte boa de estar vivo',r:'parte ruim de estar vivo'},
	{l:'animal engraçado',r:'animal sério'},
	{l:'vício',r:'virtude'},
	{l:'acreditável',r:'inacreditável'},
	{l:'atividade subestimada',r:'atividade superestimada'},
	{l:'pode comer',r:'não pode comer'},
	{l:'dividido',r:'inteiro'},
	{l:'esquisito',r:'estranho'},
	{l:'conhecimento geral',r:'teoria da conspiração'},
	{l:'inteligente',r:'boboca'},
	{l:'historicamente importante',r:'historicamente irrelevante'},
	{l:'flexível',r:'inflexível'},
	{l:'bom investimento',r:'mau investimento'},
	{l:'jogo subestimado',r:'jogo superestimado'},
	{l:'vilão',r:'herói'},
	{l:'fruta',r:'vegetal'},
	{l:'habilidade subestimada',r:'habilidade superestimada'},
	{l:'inútil em uma emergência',r:'útil em uma emergência'},
	{l:'difícil de achar',r:'fácil de achar'},
	{l:'coisa não intelectual',r:'coisa intelectual'},
	{l:'sem cabelo',r:'com cabelo'},
	{l:'arte',r:'comércio'},
	{l:'fácil de pronunciar',r:'difícil de pronunciar'},
	{l:'cidade subestimada',r:'cidade superestimada'},
	{l:'livro subestimado',r:'livro superestimado'},
	{l:'tópico chato',r:'tópico super show'},
	{l:'parece uma pessoa',r:'não parece uma pessoa'},
	{l:'preciso',r:'quero'},
	{l:'limitado',r:'infinito'},
	{l:'não é bom se botar na boca',r:'é bom se colocar na boca'},
	{l:'ruim pra você',r:'bom pra você'},
	{l:'poderia derrotar um tubarão',r:'não poderia derrotar um tubarão'},
	{l:'é da paz',r:'não é da paz'},
	{l:'maturo',r:'imaturo'},
	{l:'sem gosto',r:'tem gosto'},
	{l:'a empresa menos má',r:'a empresa mais má'},
	{l:'não fuma',r:'fuma'},
	{l: "80's",r:"90's"},
	{l:'socialista',r:'capitalista'},
	{l:'sábio',r:'inteligente'},
	{l:'molengo',r:'duro'},
	{l:'emoji não sexy',r:'emoji sexy'},
	{l:'exemplo de pessoa',r:'má influêcia'},
	{l:'coisa normal de se ter',r:'coisa estranha de se ter'},
	{l:'sensação ruim',r:'sensação boa'},
	{l:'pior coisa na internet',r:'melhor coisa na internet'},
	{l:'não é popular nos anos 80',r:'é popular nos anos 80'},
	{l:'pontual',r:'atrasado'},
	{l:'cor feia',r:'cor bonita'},
	{l:'guity pleasure',r:'proudly love'}
]