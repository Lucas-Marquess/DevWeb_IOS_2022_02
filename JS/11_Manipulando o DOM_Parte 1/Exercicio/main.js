// objeto window
console.log(window);
window.alert('Boas Vindas!');

// Alterar o título
document.title = "pichuruco";
console.log(document.title);

// Elemento section com um h1 e um paragrafo(p)
const sec = document.createElement('section')
document.body.appendChild(sec)

const  h = document.createElement('h1')
h.innerHTML = "Toy Story"
sec.appendChild(h)

const  p1 = document.createElement('p')
p1.innerHTML = "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500"
sec.appendChild(p1)

// Elemento article com um h1 e um paragrafo(p)
const art = document.createElement('article')
document.body.appendChild(art)

const  h2 = document.createElement('h1')
h2.innerHTML = "Carros 2"
art.appendChild(h2)

const  p2 = document.createElement('p')
p2.innerHTML = "Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem."
art.appendChild(p2)
