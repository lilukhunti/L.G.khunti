
const campsData = [
    {
        title: "Mega Blood Donation Drive 2026",
        organizer: " Civil Hospital",
        date: "25-08-2026",
        time: "09:00 AM to 04:00 PM",
        venue: "Town Hall, Main Market Road, Porbandar",
        contact: "9876543210"
    },
    {
        title: "Youth Donors Camp",
        organizer: "MG road chhaya (Student Union)",
        date: "02-09-2026",
        time: "10:00 AM to 05:00 PM",
        venue: "BCA Shree swaminarayan gurukul College Campus",
        contact: "9123456789"
    },
    {
        title: "Festival Special Blood Drive",
        organizer: "shudama chowk , porbandar",
        date: "12-09-2026",
        time: "08:30 AM to 02:00 PM",
        venue: "sudama mandir porbandar",
        contact: "8866554433"
    }
];


const campsContainer = document.getElementById("camps-container");


campsData.forEach((camp) => {
    
    const card = document.createElement("div");
    card.classList.add("camp-card");

    
    card.innerHTML = `
        <div>
            <div class="camp-title">${camp.title}</div>
            <div class="camp-info"><strong>Organizer:</strong> ${camp.organizer}</div>
            <div class="camp-info"><strong>Date:</strong> ${camp.date}</div>
            <div class="camp-info"><strong>Time:</strong> ${camp.time}</div>
            <div class="camp-info"><strong>Venue:</strong> ${camp.venue}</div>
            <div class="camp-info"><strong>Contact:</strong> ${camp.contact}</div>
        </div>
        <button class="btn-register" onclick="window.location.href='form.html'">Register Now</button>
         
    `;

    
    campsContainer.appendChild(card);
});

