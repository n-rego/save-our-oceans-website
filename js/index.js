const email = "nuno.rego@outlook.pt";

const onSendEmail = () => {
   let message = document.getElementById("message-input");
   let href = "mailto:" + email + "?subject=Save%20Our%20Oceans%20|%20Email%20form%20submission&body="+message.value;
   document.getElementById('contact-btn').href = href;
} 