function welcome(){
    alert('ยินดีต้อนรับ')
}

function hightLight(obj) {
    obj.style.background = "yellow"
}

function unHightLight(obj) {
    obj.style.background = 'red'
}

function getMenu() {
    const menu = document.getElementById('menu')
    console.log(menu.value.toUpperCase());

    const display = document.getElementById('display')
    display.innerText = menu.value
}