document.getElementById('submit-btn').addEventListener('click', function() {
    // Get the values from the form inputs
    const ign = document.getElementById('ign').value;
    const uid = document.getElementById('uid').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if fields are empty
    if (!ign || !uid || !email || !message) {
        alert("Please fill out all fields before sending!");
        return;
    }

    // Your clan email address
    const yourEmail = ""; 
    
    // Create the email subject and body text
    const subject = encodeURIComponent("CODM Clan Application - " + ign);
    const body = encodeURIComponent(
        "In-Game Name: " + ign + "\n" +
        "CODM UID: " + uid + "\n" +
        "Applicant Email: " + email + "\n\n" +
        "Why I want to join:\n" + message
    );

    // This creates a direct link to Gmail's compose window in the browser
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${body}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
});
