
const skills = [
    "Team Work",
    "MERN Stack",
    "Problem Solving & Debugging"
];

const profileCard = document.getElementById("profileCard");
const favoriteBtn = document.getElementById("favoriteBtn");
const skillsList = document.getElementById("skillsList");
const nameHeading = document.getElementById("nameHeading");
const nameInput = document.getElementById("nameInput");

// Render Skills Dynamically
skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

favoriteBtn.addEventListener("click", () => {
    profileCard.classList.toggle("favorite");

    if (profileCard.classList.contains("favorite")) {
        favoriteBtn.textContent = "💖 Favorited";
    } else {
        favoriteBtn.textContent = "⭐ Mark Favorite";
    }

    console.log("Favorite button clicked!");
});

// Live Name Update
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        nameHeading.textContent = "Syed Junaid Iqbal";
    } else {
        nameHeading.textContent = nameInput.value;
    }
});