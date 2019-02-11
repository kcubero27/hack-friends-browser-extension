function changeColours () {
    const allDivs = document.querySelectorAll('div');

    for(let i = 0; i < allDivs.length; i++){
        allDivs[i].style['background-color'] = 'black';
        allDivs[i].style['color'] = 'green';
        allDivs[i].style['font-family'] = 'Monospace';
    }
}

changeColours();