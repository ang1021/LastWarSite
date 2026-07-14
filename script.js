const WEB_APP_URL = "https://dbt-alliance-dbt1.vercel.app";

document.getElementById("sendButton").addEventListener("click", async () => {

    await fetch(WEB_APP_URL,{
        method:"POST"
    });

    alert("Sent!");

});
