// Initialize Animations
AOS.init({ duration: 1500 });

// Music Control & Loader
function startExperience() {
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music needs interaction first"));
    
    document.querySelector('.hero-content').style.transform = "translateY(-100vh)";
    setTimeout(() => {
        window.location.href = "memories.html"; // Smooth Page Transition
    }, 800);
}

// Advanced Particle System for Background
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
// ... (Particle logic from before, but optimized for mobile performance)
