
const images = document.querySelectorAll('.cursor-image');
const moveAmount = 40; // Adjust this value for how much the images should move

document.addEventListener('mousemove', (e) => {
    images.forEach((img, index) => {
        const x = (e.clientX / window.innerWidth - 0.5) * moveAmount;
        const y = (e.clientY / window.innerHeight - 0.5) * moveAmount;
        img.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
});