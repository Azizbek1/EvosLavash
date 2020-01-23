window.addEventListener('load', function (e) {
    var btn = document.querySelector('.for');

    btn.addEventListener('click', function () {
        btn.classList.toggle('active');
    })
});