// get all input data
const form = document.querySelector(".conatct-form");
const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message");

// add event listener to form
form.addEventListener("submit", (e) => {
  console.log("Form submitted");
  e.preventDefault();
  // check if inputs are empty
  if (email.value === "" || subject.value === "" || message.value === "") {
    // show error message
    notie.alert({
      type: "error",
      text: "Please fill in all fields",
      time: 2,
    });
  } else {
    // send email
    sendMail(e, email.value, subject.value, message.value);
    // show success message
    notie.alert({
      type: "success",
      text: "Email sent successfully",
      time: 2,
    });
  }
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
