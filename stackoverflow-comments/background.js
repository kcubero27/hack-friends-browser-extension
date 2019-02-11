function stackoverflow () {
    document.querySelectorAll('.post-text').forEach(function(postText) {
        postText.innerText = 'Praesent venenatis ultrices laoreet. Donec dapibus felis nisi.';
    });
    document.querySelectorAll('.comment-copy').forEach(function(comment) {
        comment.innerText = 'Vestibulum molestie sagittis dictum.';
    });
}

stackoverflow();