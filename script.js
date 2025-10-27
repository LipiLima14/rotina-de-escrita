const FORM = document.querySelector('#form')

const TEMA = document.querySelector('#tema')
const REPERTORIO = document.querySelector("#repertorio")

const DEFINIR_TEMA = document.querySelector('.definir-tema')
const TEMA_SELECIONADO = document.querySelector('.tema-selecionado')

const DEFINIR_REPERTORIO = document.querySelector('.definir-repertorio')
const REPERTORIO_SELECIONADO = document.querySelector('.repertorio-selecionado')

const MUDAR_INFO = document.querySelector('.mudar')


let tema_proposto = document.querySelector('.tema-proposto')
let repertorio_proposto = document.querySelector('.repertorio-proposto')
let DIA = document.querySelector('.dia')

let redacao = {}

function check() {
    const GET_REDACAO = localStorage.getItem('redacao')
    const OBJETO_REDACAO = JSON.parse(GET_REDACAO)
    if (GET_REDACAO) {
        DEFINIR_TEMA.classList.add('disabled')
        TEMA_SELECIONADO.classList.remove('disabled')
        DEFINIR_REPERTORIO.classList.add('disabled')
        REPERTORIO_SELECIONADO.classList.remove('disabled')
        tema_proposto.textContent = OBJETO_REDACAO.tema
        repertorio_proposto.textContent = OBJETO_REDACAO.repertorio
    } else {
        DEFINIR_TEMA.classList.remove('disabled')
        TEMA_SELECIONADO.classList.add('disabled')
        DEFINIR_REPERTORIO.classList.remove('disabled')
        REPERTORIO_SELECIONADO.classList.add('disabled')
    }
}

function get_day() {
    let data = new Date()
    let dia_da_semana = data.getDay()

    const DIAS_SEMANAIS = [
        'DOMINGO - consuma repertorios de alta qualidade que tenham haver com temas recentes que possivelmente cairam neste enem de agora.',
        'SEGUNDA - escolha um tema. Desenvolva apenas o planejamento (Tese, 2 Argumentos e 5 elementos da Proposta).', 
        'TERÇA - escreva 2 ou 3 versões de introduções para o mesmo tema. Varie a Contextualização (ex: uma com alusão histórica, outra com citação).', 
        'QUARTA - escreva o proximo parágrafo de desenvolvimento (D2) completo. Garanta que ele tenha Tópico Frasal, a Fundamentação e a Análise.', 
        'QUINTA - tente escrever uma redação completa (mesmo que rascunho) OU uma introdução e um parágrafo de desenvolvimento de alta qualidade.', 
        'SEXTA - escreva 2 versões de Propostas de Intervenção para o mesmo tema, focando nos 5 elementos.', 
        'SÁBADO - tente escrever uma redação completa (mesmo que rascunho) OU uma introdução e um parágrafo de desenvolvimento de alta qualidade.'
    ]

    DIA.textContent = DIAS_SEMANAIS[dia_da_semana]
}

get_day()

FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    redacao.tema = TEMA.value
    redacao.repertorio = REPERTORIO.value

    localStorage.setItem('redacao', JSON.stringify(redacao))
    check()
})

MUDAR_INFO.addEventListener('click', () => {
    TEMA.value = ''
    REPERTORIO.value = ''
    DEFINIR_TEMA.classList.remove('disabled')
    TEMA_SELECIONADO.classList.add('disabled') 
    DEFINIR_REPERTORIO.classList.remove('disabled')
    REPERTORIO_SELECIONADO.classList.add('disabled') 
})

check()



