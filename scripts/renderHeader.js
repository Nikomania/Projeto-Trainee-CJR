function renderHeader(){
    // Pegar o Header da página
    const header = document.querySelector('header')

    // Criar divs do Header
    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')

    // Adicionar a leftDiv a classe "cjrLogoHeader"
    leftDiv.classList.add("cjrLogoHeader")

    // Definir o HTML dentro de leftDiv
    leftDiv.innerHTML = `
        <a href=''> 
            <img class="cjrLogoHeaderImg" src="../imgs/cjr_logo.png" alt="logo cjr">
        </a> 
    `

    // Definir o HTML dentro de rightDiv
    rightDiv.innerHTML = `
        <a href=''> 
            <a href="" class="criarConta semSublinhado">Criar Conta</a>
            <a href="" class="entrar">Entrar</a>
        </a> 
    `
    header.appendChild(leftDiv)
    header.appendChild(rightDiv)
}

renderHeader()