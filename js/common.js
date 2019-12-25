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