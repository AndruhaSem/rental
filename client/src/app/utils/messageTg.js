import axios from "axios";

export function messageTg(name, phone, product) {
    const TOKEN = "5706258825:AAHBJvoS0fZ4b-vA3RqQDruu1U3RJGmUv-k";
    const CHAT_ID = "-1001445129429";
    const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let message = `<b>Заявка с сайта.</b>\n`;
    message += `<b>Товар: ${product}</b>\n`;
    message += `<b>Отправитель: ${name}</b>\n`;
    message += `<b>Телефон: ${phone}</b>`;

    axios
        .post(URI, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message
        })
        .then(() => {})
        .catch(() => {
            console.log("error");
        });
}
