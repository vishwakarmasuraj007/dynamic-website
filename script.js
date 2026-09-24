/* =========================
   WELCOME MESSAGE
========================= */

const welcomeText = document.getElementById("welcomeText");

const messages = [
    "Welcome! This website is running successfully.",
    "Powered by HTML, CSS and JavaScript.",
    "Deployed automatically using Jenkins CI/CD.",
    "Running on AWS EC2 with Nginx."
];

let messageIndex = 0;

function updateWelcomeMessage() {

    welcomeText.textContent = messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }
}

updateWelcomeMessage();

setInterval(updateWelcomeMessage, 3000);


/* =========================
   BUTTON MESSAGE
========================= */

function showMessage() {

    alert(
        "🚀 Hello! Your website is working successfully!"
    );

}


/* =========================
   VISITOR COUNTER
========================= */

const visitorCount =
    document.getElementById("visitorCount");

let count =
    localStorage.getItem("visitorCount");

if (count === null) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

localStorage.setItem(
    "visitorCount",
    count
);

visitorCount.textContent = count;


/* =========================
   CURRENT TIME
========================= */

function updateTime() {

    const currentTime =
        document.getElementById("currentTime");

    const now = new Date();

    currentTime.textContent =
        now.toLocaleString();

}

updateTime();

setInterval(updateTime, 1000);


/* =========================
   SERVICES
========================= */

const services = [

    {
        icon: "🌐",
        title: "Web Development",
        description:
            "Modern and responsive websites using HTML, CSS and JavaScript."
    },

    {
        icon: "☁️",
        title: "Cloud Deployment",
        description:
            "Deploy applications on cloud infrastructure using AWS."
    },

    {
        icon: "⚙️",
        title: "CI/CD Automation",
        description:
            "Automated testing and deployment using Jenkins pipelines."
    },

    {
        icon: "🔒",
        title: "Secure Infrastructure",
        description:
            "Build reliable and secure cloud infrastructure."
    }

];


const serviceContainer =
    document.getElementById("serviceContainer");


services.forEach(function(service) {

    const card =
        document.createElement("div");

    card.className = "service-card";

    card.innerHTML = `
        <div class="service-icon">
            ${service.icon}
        </div>

        <h3>
            ${service.title}
        </h3>

        <p>
            ${service.description}
        </p>
    `;

    serviceContainer.appendChild(card);

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");

        if (
            document.body.classList.contains("dark")
        ) {

            themeButton.textContent = "☀️";

        } else {

            themeButton.textContent = "🌙";

        }

    }
);