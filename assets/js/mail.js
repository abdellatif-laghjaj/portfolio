// get all input data
const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");
const submitBtn = document.getElementById("submit");

const preloader = document.getElementById("preloader");

// add event listener to submit button
submitBtn.addEventListener("click", (e) => {
    sendMail(e, email.value, subject.value, message.value);
});

function sendMail(e, email, subject, message) {
  const secrureToken = "00782b15-7e79-4762-9b31-f89f10cfb590";
  const username = "abdelatiflaghjaj@gmail.com";
  const password = "95B1E2CD6AEE9A023269BA097E6792ABF1FA";
  const host = "smtp.elasticemail.com";
  const my_email = username;
  
  e.preventDefault();
  Email.send({
    SecureToken: secrureToken,
    Host: host,
    Username: username,
    Password: password,
    To: my_email,
    From: email,
    Subject: subject,
    Body: message,
  }).then((message) => alert(message));
}
