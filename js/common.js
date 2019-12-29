// navbar
function toggleNav() {
    let symbol = {
        "hamburger": "&#x2630;",
        "cross": "&#10005;"
    }
    if (event.target.classList.toggle('active')) {
        document.getElementsByTagName('Nav')[0].style.display = 'block';
        event.target.innerHTML = symbol["cross"];
    } else {
        document.getElementsByTagName('Nav')[0].style.display = 'none';
        event.target.innerHTML = symbol["hamburger"];
    }
}
function previewImg(imgUrl) {
    var imagePreview = document.getElementById('imagePreview');
    var imgEl = document.getElementById('imgEl');
    
    imgEl.src = imgUrl;
    imagePreview.style.display = 'block';
}

function closePreviewImg(el){
    var imagePreview = document.getElementById('imagePreview');
    imagePreview.style.display = 'none';
}