// 1 - Alterando backgroundColor
function eventClique() {
    console.log('titulo');

    const titulo = document.getElementById('titulo');
    titulo.style.backgroundColor = 'yellow';
}

// 2 - Negrito
function eventClique2() {
    console.log('#negrito');

    let items = document.getElementsByClassName('item');
    console.log(items);
    console.log(items[4]);
    items[4].style.fontWeight = 'bold';
}
