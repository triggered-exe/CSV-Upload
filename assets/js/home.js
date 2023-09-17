document.addEventListener('DOMContentLoaded', function () {
    const showListLink = document.getElementById('showList');
    const fileContainer = document.querySelector('.file-list');
    const closeListButton = document.getElementById('closeList');

    showListLink.addEventListener('click', () => {
        fileContainer.style.left = '0'; // Show the file list
    });

    closeListButton.addEventListener('click', () => {
        fileContainer.style.left = '-250px'; // Hide the file list
    });
});