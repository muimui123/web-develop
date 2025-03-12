const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const makeRandonColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rbg(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', function() {
    const newColor = makeRandonColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})



