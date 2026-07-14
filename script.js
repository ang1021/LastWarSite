// The URL points to the google apps script that updates the spreadsheet
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxH1S-HyGLSpSOYtxXBkaunpSjksykQtGWRpDxfOyWK5Y4rZiLDrbZv4Qdoh1L5R-jpEA/exec";

document.getElementById("sendButton").addEventListener("click", async () => {

    await fetch(WEB_APP_URL,{
        method:"POST"
    });

    alert("Sent!");

});
