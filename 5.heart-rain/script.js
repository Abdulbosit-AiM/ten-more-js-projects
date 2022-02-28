
function createHeart() {
    // const symbol = document.getElementById('symbol')
    const heart = document.createElement('div')
    heart.classList.add('heart')

    heart.style.left = Math.random() * 100 + 'vw'

    heart.innerHTML = '💚'
    // heart.innerHTML = symbol.value

    document.body.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 5000)
}

setInterval(createHeart, 300)