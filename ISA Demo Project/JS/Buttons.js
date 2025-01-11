document.getElementById('mainButton').addEventListener('click', function() {
    var popUp = document.getElementById('popUp');
    var body = document.querySelector('add-drop-content');
    if (popUp.style.display === 'none' || popUp.style.display === '') {
        popUp.style.display = 'flex';
        body.classList.add('blurred');
    } else {
        popUp.style.display = 'none';
        body.classList.remove('blurred');
    }
});