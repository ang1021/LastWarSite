document.getElementById("canyonForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {};

    const GOOGLE_URL = "YOUR_CANYON_STORM_WEBAPP_URL";

    await fetch(GOOGLE_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData)
    });

    document.getElementById("canyon-confirmation").textContent =
        "Your registration has been submitted!";
});
