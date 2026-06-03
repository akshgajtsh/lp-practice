window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('fade_out')
    }, 1500)
});

// 波アニメーション
$('#wave').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: 'rgb(126, 229, 250)',
    speed: .25
});

// オリジナルアニメーション
const skills = document.querySelector('.skills');
for (let i = 0; i <= 50; i++) {
    const rounds = document.createElement('div');
    rounds.classList.add('round');
    rounds.style.left = anime.random(0, window.innerWidth);
    rounds.style.top = anime.random(0, 1000);
    skills.appendChild(rounds);
}
function animateRounds() {
    anime({
        targets: '.round',
        translateX: function() {
        return anime.random(-800, 1000);
        },
        translateY: function () {
            return anime.random(-500, 1000);
        },
        scale: function () {
            return anime.random(1, 3);
        },
        duration: 2500,
        delay: anime.stagger(15),
        complete: animateRounds,
    });
}
animateRounds();


