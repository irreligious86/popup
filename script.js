const popup = document.querySelector('.popup');

document.querySelector('.popup-button').addEventListener('click', () => {
    popup.classList.add('hidden')
});

document.querySelector('.some-button').addEventListener('click', () => {
    popup.classList.remove('hidden');
});