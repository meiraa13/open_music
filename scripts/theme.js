function darkMode () {
    const botaoDm = document.getElementById('darkmode')
    const iconedm = document.getElementById('icone')
    const html = document.querySelector('html')

    botaoDm.addEventListener('click', () =>{
        html.classList.toggle('dark-mode')
        iconedm.classList.toggle('text-white')

        const dmPref = localStorage.getItem('darkmode')

        if(!dmPref){
            localStorage.setItem('darkmode', true)
        }
        if(dmPref){
            localStorage.removeItem('darkmode')
        }

        if(iconedm.classList.contains('text-white')){
            iconedm.src = '../../assets/img/sun.png'
        } else {
            iconedm.src = '../../assets/img/moon.png'
        }
    })

}
darkMode()

