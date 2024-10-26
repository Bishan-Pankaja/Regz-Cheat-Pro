function openPopup(imageSrc, description) {
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
