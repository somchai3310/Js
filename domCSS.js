const theme = document.getElementById('theme')
let status;

function addDarkMode() {
    theme.classList.add('darkMode')
}

function removeClass() {
    theme.classList.remove('darkMode')
}

function sitchMode() {
    theme.classList.toggle('darkMode')
    // status = theme.classList.contains('darkMode')
    if (theme.classList.contains('darkMode')) {
        theme.style.color = 'yellow'
    }else{
        theme.style.color = 'red'
    }
}
