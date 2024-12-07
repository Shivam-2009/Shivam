 // Function to show only the selected course section and hide the main content
    function showSection(sectionId) {
        // Hide the main content
        document.getElementById("main-content").style.display = "none";

        // Hide all course sections
        const sections = document.querySelectorAll(".course-section");
        sections.forEach(section => section.style.display = "none");

        // Display the selected course section
        document.getElementById(sectionId).style.display = "block";
    }

    // Function to return to the main content view
    function showMainContent() {
        // Show the main content
        document.getElementById("main-content").style.display = "block";

        // Hide all course sections
        const sections = document.querySelectorAll(".course-section");
        sections.forEach(section => section.style.display = "none");
    }