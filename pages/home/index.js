
function listarItens (baseDados){
    let ul = document.querySelector('.main-ul')

    baseDados.forEach((dado) =>{
        let template = criarTemplate(dado)
        ul.appendChild(template)
    })

}
listarItens(products)

function criarTemplate (item){

    let li = document.createElement('li')
    li.classList = 'teste'

    let img = document.createElement('img')
    img.src = item.img

    let div = document.createElement('div')
    div.classList = 'flex line gap'

    let p1 = document.createElement('p')
    p1.innerText = item.title

    let p2 = document.createElement('p')
    p2.innerText = item.year

    let h4 = document.createElement('h4')
    h4.innerText = item.band

    let div2 = document.createElement('div')
    div2.classList = 'flex justify m-top'

    let p3 = document.createElement('p')
    p3.innerText = `R$ ${item.price}`

    let button = document.createElement('button')
    button.classList = 'botao-comprar'
    button.innerText = 'Comprar'

    div.append(p1,p2)
    div2.append(p3,button)
    li.append(img,div,h4,div2)

    return li


}


function eventFilter(){
    let filtroBotoes = document.querySelectorAll('.filtros')
    let ul = document.querySelector('.main-ul')

    filtroBotoes.forEach((botao) =>{
        botao.addEventListener('click',function(){
            ul.innerHTML = ''
            let filtro = botao.innerText

            if(filtro === 'Todos'){
                listarItens(products)
            }

            const botoesFiltrados =  filtroBotao(filtro)
            listarItens(botoesFiltrados)
        })
    })
}
eventFilter()

function filtroBotao(texto){
    const filtrosBotoes = products.filter(categoria => categoria.category.includes(texto))
    console.log(filtrosBotoes)
    return filtrosBotoes
}


let range = document.getElementById('range')
range.addEventListener('mousemove', ()=> {
    let span = document.querySelector('.filtro')
    span.innerText = `Até R$ ${range.value}`
    let arrayFiltrado = []
    let ul = document.querySelector('.main-ul')
    products.forEach((produto) =>{
        if(range.value >= produto.price){
            ul.innerHTML=''
            arrayFiltrado.push(produto)
        }else {
            ul.innerHTML=''
        }
        listarItens(arrayFiltrado)
        })
})

