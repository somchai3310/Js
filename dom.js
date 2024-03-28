const titleEl = document.getElementById('title')
const contentEl = document.querySelector('.content')
const allEl = document.querySelectorAll('p')

const box = document.querySelector('.light')

function displayText() {
    titleEl.style.color = 'red'
    titleEl.style.fontSize = '50px'
    titleEl.style.backgroundColor = 'blue'

}

function displayContent() {
    contentEl.setAttribute('class', 'somchai')   
    
}

function darkMode() {
    console.log('check Dark Mode ->',box);
    const textMode = document.getElementById('textDarkMode')
    if (box == document.querySelector('.light')) {
        box.setAttribute('class','dark')
        textMode.innerText = 'โหมดกลางวัน'
    } else {
        box.setAttribute('class','light')
        textMode.innerText = 'โหมดกลางคืน'
    }
}