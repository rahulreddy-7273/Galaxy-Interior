// scripts.js
function toggleServices() {
    const servicesSection = document.getElementById("services");
    if (servicesSection.style.display === "none" || servicesSection.style.display === "") {
        servicesSection.style.display = "block";
    } else {
        servicesSection.style.display = "none";
    }
}
function toggleContact() {
    var contactSection = document.getElementById("contact");
    if (contactSection.style.display === "none" || contactSection.style.display === "") {
        contactSection.style.display = "block";
    } else {
        contactSection.style.display = "none";
    }
}
