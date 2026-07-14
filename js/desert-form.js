document.getElementById("desertForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // TODO: Insert Google Form fields here
    const formData = {};

    // TODO: Replace with your Google Apps Script URL
    const GOOGLE_URL = "YOUR_DESERT_STORM_WEBAPP_URL";

    await fetch(GOOGLE_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData)
    });

    document.getElementById("desert-confirmation").textContent =
        "Your registration has been submitted!";
});

