/* ================= SIDEBAR ================= */

function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("open");

}


/* ================= SCROLL ================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= SEARCH ================= */

function searchContent() {

    const search =
        document.getElementById("search").value.toLowerCase();

    const sections =
        document.querySelectorAll(".page-section");


    if (search === "") {

        sections.forEach(section => {
            section.style.display = "";
        });

        return;

    }


    sections.forEach(section => {

        const text =
            section.innerText.toLowerCase();

        if (text.includes(search)) {

            section.style.display = "";

        } else {

            section.style.display = "none";

        }

    });

}


/* ================= NOTIFICATIONS ================= */

function showNotifications() {

    alert(
        "🔔 Notifications\n\n" +

        "1. Semester exam form submission starts on 10 October.\n\n" +

        "2. Career guidance workshop next week.\n\n" +

        "3. New Chemistry study material available."
    );

}


/* ================= TODAY'S SCHEDULE ================= */

function showSchedule() {

    alert(
        "📅 Today's Schedule\n\n" +

        "09:00 AM - Organic Chemistry\n" +

        "11:00 AM - Botany\n" +

        "02:00 PM - Physics"
    );

}


/* ================= ALL CLASSES ================= */

function showAllClasses() {

    scrollToSection("timetable");

}


/* ================= PROFILE ================= */

function editProfile() {

    const name =
        prompt("Enter your name:", "Husen Bhatt");


    if (name !== null && name.trim() !== "") {

        alert(
            "Profile update request submitted for " +
            name
        );

    }

}


/* ================= SETTINGS ================= */

function showSettings() {

    alert(
        "⚙️ Settings\n\n" +

        "Profile Settings\n" +

        "Notification Settings\n" +

        "Password & Security\n" +

        "Appearance"
    );

}


/* ================= LOGOUT ================= */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");


    if (confirmLogout) {

        alert("You have been logged out.");

    }

}


/* ================= ADD ASSIGNMENT ================= */

function addAssignment() {

    const title =
        prompt("Enter assignment title:");


    if (!title || title.trim() === "") {

        return;

    }


    const subject =
        prompt("Enter subject:");


    if (!subject || subject.trim() === "") {

        return;

    }


    alert(
        "Assignment Added!\n\n" +

        "Title: " + title +

        "\nSubject: " + subject
    );

}


/* ================= PRINT TIMETABLE ================= */

function printTimetable() {

    window.print();

}


/* ================= ACTIVE NAVIGATION ================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", function() {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        /* Close mobile sidebar */

        const sidebar =
            document.getElementById("sidebar");

        sidebar.classList.remove("open");

    });

});


/* ================= WELCOME MESSAGE ================= */

window.addEventListener("load", function() {

    console.log(
        "Smart Campus Student Portal Loaded Successfully."
    );

});