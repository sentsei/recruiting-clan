document.getElementById('clanForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevents page reload
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('formStatus');
    
    // Change button state to loading
    submitBtn.textContent = 'Sending Application...';
    submitBtn.disabled = true;

    // Collect form data
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            statusDiv.textContent = "Application Sent Successfully! Check your inbox/Discord soon.";
            statusDiv.className = "success";
            form.reset(); // Clear the inputs
        } else {
            const data = await response.json();
            statusDiv.textContent = data.errors ? data.errors.map(err => err.message).join(", ") : "Oops! There was a problem submitting your application.";
            statusDiv.className = "error";
        }
    } catch (error) {
        statusDiv.textContent = "Network error. Please try again later.";
        statusDiv.className = "error";
    } finally {
        // Reset button state
        submitBtn.textContent = 'Send Application';
        submitBtn.disabled = false;
    }
});
