// Select Element
let shotcuts = document.querySelector(".shortcuts");
let viewedImg = document.querySelector(".iphone-img img");

// Event Handler
shotcuts.addEventListener('click', e => {
    viewedImg.src = e.target.src;
    changeBg(e.target.src);
});

// Function
function changeBg(color) {
    let colorId = color.slice(-5)[0];
    let colorArr = [
        '#000', "#227dc4", "#1e1e1e", "#c79c57", "#ca2528"
    ];
    document.body.style.backgroundColor = colorArr[colorId];
};