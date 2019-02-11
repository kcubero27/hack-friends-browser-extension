function catPictures () {
    Array.prototype.slice.call(
        document.querySelectorAll('img')).map(function(tag){
        tag.src = 'http://bit.ly/2okYTfn';
    });
}

catPictures();