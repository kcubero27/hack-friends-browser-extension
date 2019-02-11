function rotateView () {
    setTimeout(function(){
        document.onmousemove = document.onkeypress =
            function(){
                document.body.style['transition'] = 'transform 3s';
                document.body.style['transform'] = 'rotate(180deg)';
            }
    }, 5000);
}

rotateView();