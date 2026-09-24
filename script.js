// Welcome message

const welcomeText = document.getElementById("welcomeText");

const hour = new Date().getHours();

if (hour < 12) {
    welcomeText.innerText = "Good Morning! Welcome to our website.";
}
else if (hour < 18) {
    welcomeText.innerText = "Good Afternoon! Welcome to our website.";
}
else {
    welcomeText.innerText = "Good Evening! Welcome to our website.";
}


// Dynamic Services

const services = [
    {
        title: "Web Development",
        description: "Modern and responsive websites."
    },

    {
        title: "Cloud Computing",
        description: "Cloud solutions using AWS."
    },

    {
        title: "DevOps",
        description: "CI/CD and automation solutions."
    }
];


const serviceContainer =
    document.getElementById("serviceContainer");


services.forEach(function(service) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;

    serviceContainer.appendChild(card);

});


// Visitor Counter

let count = 0;

const visitorCount =
    document.getElementById("visitorCount");


setInterval(function() {

    count++;

    visitorCount.innerText = count;

}, 1000);


// Current Time

function updateTime() {

    const now = new Date();

    document.getElementById("currentTime")
        .innerText =
        "Current Time: " + now.toLocaleTimeString();

}

setInterval(updateTime, 1000);

updateTime();


// Button Message

function showMessage() {

    alert("Welcome! JavaScript is working successfully.");

}


// Dark Mode

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});