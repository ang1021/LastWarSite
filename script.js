const WEB_APP_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

document.getElementById("sendButton").addEventListener("click", async () => {

    await fetch(WEB_APP_URL,{
        method:"POST"
    });

    alert("Sent!");

});
