const root = document.getElementsByClassName('container');
root[0].addEventListener('click', (event)=> {
    if (event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
});