const petId = 1; // Assuming we have a single pet with ID 1

// Update stat
function updateStat(statId, value) {
    const stat = document.getElementById(statId);
    let newValue = parseInt(stat.value) + value;
    if (newValue > 100) newValue = 100;
    if (newValue < 0) newValue = 0;
    stat.value = newValue;
}

// Play music based on mood
function playMoodMusic(mood) {
    const happyMusic = document.getElementById('happy-music');
    const anxiousMusic = document.getElementById('anxious-music');
    const sadMusic = document.getElementById('sad-music');
    const calmMusic = document.getElementById('calm-music');
    const defaultMusic = document.getElementById('default-music'); // Default background music

    // Ensure the audio elements are correctly referenced
    if (happyMusic && anxiousMusic && sadMusic && calmMusic && defaultMusic) {
        // Stop all music
        happyMusic.pause();
        anxiousMusic.pause();
        sadMusic.pause();
        calmMusic.pause();
        defaultMusic.pause();

        // Reset music to start
        happyMusic.currentTime = 0;
        anxiousMusic.currentTime = 0;
        sadMusic.currentTime = 0;
        calmMusic.currentTime = 0;
        defaultMusic.currentTime = 0;

        // Play music based on mood
        switch (mood) {
            case 'happy':
                happyMusic.play();
                break;
            case 'anxious':
                anxiousMusic.play();
                break;
            case 'sad':
                sadMusic.play();
                break;
            case 'calm':
                calmMusic.play();
                break;
            default:
                defaultMusic.play(); // Play default background music
                break;
        }
    } else {
        console.error('Audio elements not found');
    }
}

// Function to handle mood change
function handleMoodChange(mood) {
    let message = '';
    switch (mood) {
        case 'happy':
            message = 'Glad to see you happy!';
            animatePet('happy');
            changeBackground('happy');
            playMoodMusic('happy');
            break;
        case 'sad':
            message = "Don't worry, I am here with you.";
            animatePet('sad');
            changeBackground('sad');
            playMoodMusic('sad');
            break;
        case 'anxious':
            message = "It's okay to feel anxious. Take a deep breath.";
            animatePet('anxious');
            changeBackground('anxious');
            playMoodMusic('anxious');
            break;
        case 'calm':
            message = "Feeling calm is great. Enjoy the moment.";
            animatePet('calm');
            changeBackground('calm');
            playMoodMusic('calm');
            break;
        default:
            message = "I'm here with you.";
            animatePet('default');
            changeBackground('default');
            playMoodMusic('default');
            break;
    }
    alert(`VirtuPet Says: ${message}`);
}

// GSAP animation
function animatePet(action) {
    const petContainer = document.getElementById('pet-animation');
    switch (action) {
        case 'feed':
            gsap.to(petContainer, { duration: 0.5, scale: 1.2, yoyo: true, repeat: 1 });
            break;
        case 'play':
            gsap.set(petContainer, { rotation: 0 }); // Reset rotation
            gsap.to(petContainer, { duration: 0.5, rotation: 360 });
            break;
        case 'rest':
            gsap.to(petContainer, { duration: 0.5, opacity: 0.5, yoyo: true, repeat: 1 });
            break;
        case 'happy':
            gsap.to(petContainer, { duration: 0.5, scale: 1.2, yoyo: true, repeat: 1 });
            break;
        case 'sad':
            gsap.to(petContainer, { duration: 0.5, y: -20, yoyo: true, repeat: 1 });
            break;
        case 'anxious':
            gsap.to(petContainer, { duration: 0.5, x: 20, yoyo: true, repeat: 5 });
            break;
        case 'calm':
            gsap.to(petContainer, { duration: 0.5, scale: 1.1, yoyo: true, repeat: 1 });
            break;
        default:
            gsap.to(petContainer, { duration: 0.5, scale: 1 });
    }
}

// Play sound effects
function playSound(action) {
    let sound;
    switch (action) {
        case 'feed':
            sound = new Audio('assets/feed-sound.mp3');
            break;
        case 'play':
            sound = new Audio('assets/play-sound.mp3');
            break;
        case 'rest':
            sound = new Audio('assets/rest-sound.mp3');
            break;
        default:
            return;
    }
    sound.play();
}

// Example daily affirmations
const affirmations = [
    "You are doing great!",
    "Keep up the good work!",
    "You are capable of amazing things!",
    "Believe in yourself!",
    "You are stronger than you think!",
    "You are enough!",
    "You are allowed to feel upset, angry, and sad sometimes—that’s part of being human",
    "You don’t have to give up your hopes and dreams",
    "You are worthy of love and respect",
    "You are not alone",
];

function displayDailyAffirmation() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    alert(`VirtuPet Says: ${randomAffirmation}`);
}

// Call the function to display the daily affirmation on page load
window.addEventListener('load', () => {
    displayDailyAffirmation();
});

// Schedule random events
function scheduleRandomEvents() {
    setInterval(() => {
        displayDailyAffirmation();
    }, 86400000); // Change affirmation daily
}

// Start random events
scheduleRandomEvents();

// Change background based on mood
function changeBackground(mood) {
    const body = document.body;
    switch (mood) {
        case 'happy':
            body.style.backgroundImage = 'linear-gradient(to right, #f6d365, #fda085)';
            break;
        case 'sad':
            body.style.backgroundImage = 'linear-gradient(to right, #bdc3c7, #2c3e50)';
            break;
        case 'anxious':
            body.style.backgroundImage = 'linear-gradient(to right, #a18cd1, #fbc2eb)';
            break;
        case 'calm':
            body.style.backgroundImage = 'linear-gradient(to right, #89f7fe, #66a6ff)';
            break;
        default:
            body.style.backgroundImage = 'linear-gradient(to right, #667eea, #764ba2)';
    }
}

// Save journal entry to local storage
function saveJournal() {
    const journalEntry = document.getElementById('journal').value;
    alert('Journal entry saved!');
}

// Load journal entry from local storage
function loadJournal() {
    // No local storage functionality
}

// Add event listener to the save button
document.getElementById('save-journal-btn').addEventListener('click', saveJournal);

// Load journal entry on page load
loadJournal();

// Daily challenges
const dailyChallenges = [
    "Take a 10-minute walk",
    "Drink a glass of water",
    "Write down three things you're grateful for",
    "Do a 5-minute meditation",
    "Stretch for 5 minutes"
];

// Display a random daily challenge
function displayDailyChallenge() {
    const randomIndex = Math.floor(Math.random() * dailyChallenges.length);
    document.getElementById('daily-challenge').textContent = dailyChallenges[randomIndex];
}

// Mark the daily challenge as completed
function completeDailyChallenge() {
    alert('Great job! You completed the daily challenge.');
    displayDailyChallenge(); // Display a new challenge
}

// Add event listener to the complete button
document.getElementById('complete-challenge-btn').addEventListener('click', completeDailyChallenge);

// Display a daily challenge on page load
displayDailyChallenge();

// Schedule a wellness reminder
function scheduleWellnessReminder() {
    setTimeout(() => {
        alert('Take a deep breath and hydrate!');
        scheduleWellnessReminder(); // Schedule the next reminder
    }, 3600000); // Remind every hour (3600000 milliseconds)
}

// Schedule the first wellness reminder on page load
scheduleWellnessReminder();

// Load Lottie animation
const petAnimation = lottie.loadAnimation({
    container: document.getElementById('pet-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/pet-animation.json' // Path to your Lottie animation JSON file
});

// Add event listeners for action buttons
document.getElementById('feed-btn').addEventListener('click', () => {
    updateStat('health', 10);
    animatePet('feed');
    playSound('feed');
});

document.getElementById('play-btn').addEventListener('click', () => {
    updateStat('happiness', 10);
    animatePet('play');
    playSound('play');
});

document.getElementById('rest-btn').addEventListener('click', () => {
    updateStat('energy', 10);
    animatePet('rest');
    playSound('rest');
});

document.getElementById('mood-select').addEventListener('change', (event) => {
    handleMoodChange(event.target.value);
});

// Ensure music plays after user interaction
document.body.addEventListener('click', () => {
    playMoodMusic('default');
}, { once: true });

// Initialize Three.js
function initThreeJS() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-container').appendChild(renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Add ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x228B22 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Add water body
    const waterGeometry = new THREE.PlaneGeometry(20, 20);
    const waterMaterial = new THREE.MeshPhongMaterial({ color: 0x1E90FF, transparent: true, opacity: 0.6 });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.position.set(0, 0.1, -30);
    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    // Add trees
    function createTree(x, z) {
        const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 5);
        const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);

        const leavesGeometry = new THREE.SphereGeometry(2.5);
        const leavesMaterial = new THREE.MeshPhongMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 4;

        const tree = new THREE.Group();
        tree.add(trunk);
        tree.add(leaves);
        tree.position.set(x, 2.5, z);
        scene.add(tree);
    }

    createTree(-10, -10);
    createTree(10, -10);
    createTree(-10, 10);
    createTree(10, 10);

    // Add 3D pet model (using the Lottie animation)
    const petContainer = document.getElementById('pet-animation');
    petContainer.style.position = 'absolute';
    petContainer.style.top = '50%';
    petContainer.style.left = '50%';
    petContainer.style.transform = 'translate(-50%, -50%)';
    petContainer.style.zIndex = '10';

    camera.position.z = 20;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    // Add interactive objects
    const foodBowlGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
    const foodBowlMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const foodBowl = new THREE.Mesh(foodBowlGeometry, foodBowlMaterial);
    foodBowl.position.set(0, 0.25, 5); // In front of the pet
    foodBowl.visible = false; // Initially hidden
    scene.add(foodBowl);

    const ballGeometry = new THREE.SphereGeometry(1);
    const ballMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.set(0, 10, 5); // Start above the ground
    ball.visible = false; // Initially hidden
    scene.add(ball);

    const restMatGeometry = new THREE.PlaneGeometry(5, 5); // Increase size
    const restMatMaterial = new THREE.MeshPhongMaterial({ color: 0xA52A2A, side: THREE.DoubleSide });
    const restMat = new THREE.Mesh(restMatGeometry, restMatMaterial);
    restMat.rotation.x = -Math.PI / 2;
    restMat.position.set(0, 0.01, 5); // In front of the pet
    restMat.visible = false; // Initially hidden
    scene.add(restMat);

    // Function to update the environment based on mood
    function updateEnvironment(mood) {
        switch (mood) {
            case 'happy':
                scene.background = new THREE.Color(0x87CEEB); // Light blue sky
                directionalLight.color.set(0xFFFFFF); // Bright white light
                break;
            case 'sad':
                scene.background = new THREE.Color(0x000033); // Dark blue night sky
                directionalLight.color.set(0xAAAAAA); // Dim light
                break;
            case 'calm':
                scene.background = new THREE.Color(0x778899); // Light gray sky
                directionalLight.color.set(0xCCCCCC); // Soft light
                break;
            case 'anxious':
                scene.background = new THREE.Color(0xFF4500); // Orange-pink sunset
                directionalLight.color.set(0xFF6347); // Warm light
                break;
        }
    }

    // Function to show an object for 3-4 seconds
    function showObject(object) {
        object.visible = true;
        gsap.to(object.position, { y: 0, duration: 1, onComplete: () => {
            setTimeout(() => {
                gsap.to(object.position, { y: -10, duration: 1, onComplete: () => {
                    object.visible = false;
                }});
            }, 3000); // Show for 3 seconds
        }});
    }

    // Event listeners for interactive objects
    foodBowl.addEventListener('click', () => {
        // Trigger feed animation and update stats
        console.log('Feed the pet');
    });

    ball.addEventListener('click', () => {
        // Trigger play animation and update stats
        console.log('Play with the pet');
    });

    restMat.addEventListener('click', () => {
        // Trigger rest animation and update stats
        console.log('Rest the pet');
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    // Add event listeners for action buttons
    document.getElementById('feed-btn').addEventListener('click', () => {
        updateStat('health', 10);
        animatePet('feed');
        playSound('feed');
        showObject(foodBowl);
    });

    document.getElementById('play-btn').addEventListener('click', () => {
        updateStat('happiness', 10);
        animatePet('play');
        playSound('play');
        showObject(ball);
    });

    document.getElementById('rest-btn').addEventListener('click', () => {
        updateStat('energy', 10);
        animatePet('rest');
        playSound('rest');
        showObject(restMat);
    });
}

// Initialize Three.js
initThreeJS();