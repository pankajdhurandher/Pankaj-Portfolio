function sendMail() {
  var params = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("emailAddress").value,
    message: document.getElementById("message").value,
  };
}

const serviceID = "service_vvk220j";
const templateID = "template_ibdyv24";
emailjs
  .sendForm(serviceID, templateID, params)
  .then((res) => {
    document.getElementById("fullName").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("your message sent sucessfully");
  })
  .catch((err) => console.log(err));
  
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.fullName.value.trim();
    const email = form.emailAddress.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill all fields.');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    try {
      await emailjs.send("service_vvk220j", "template_nyafrcl", templateParams);
      form.reset();
      alert('Message sent successfully!');
    } catch (err) {
      console.error('EmailJS send error:', err);
      alert('Failed to send message. Please try again later.');
    }
  });
});

console.log('EmailJS:', emailjs);

// /* ===== Contact form (EmailJS) handling ===== */
// /*
//   Instructions to set up EmailJS:
//   1. Create an account at https://www.emailjs.com/
//   2. Add an email service (e.g., Gmail) and note your Service ID (e.g., 'service_xxx').
//   3. Create an email template and note the Template ID (e.g., 'template_xxx').
//      - Make sure the template uses variables: from_name, from_email, subject, message
//   4. Get your Public Key (formerly user ID) from EmailJS dashboard (e.g., 'user_xxx').
//   5. Replace the placeholders below: SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY.
//   6. The EmailJS SDK script must be included before this script (see index.html snippet).
// */

// const EMAILJS_SERVICE_ID = 'service_vvk220j';
// const EMAILJS_TEMPLATE_ID = 'template_nyafrcl';
// const EMAILJS_PUBLIC_KEY  = 'qk_--j4dbvC7NI-pT';

// // /* init will run after the SDK is loaded; it's safe to call multiple times */
// if (typeof emailjs !== 'undefined') {
//   emailjs.init("qk_--j4dbvC7NI-pT");
//   console.log('EmailJS initialized successfully.');
// } else {
//   console.error('EmailJS SDK not loaded.');
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contact-form');
//   if (!form) return;

//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const name = form.fullName.value.trim();
//     const email = form.emailAddress.value.trim();
//     const subject = form.subject.value.trim();
//     const message = form.message.value.trim();

//     if (!name || !email || !subject || !message) {
//       alert('Please fill all fields.');
//       return;
//     }

//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       subject: subject,
//       message: message,
//     };

//     try {
//       await emailjs.send("service_vvk220j", "template_nyafrcl", templateParams);
//       form.reset();
//       alert('Message sent successfully!');
//     } catch (err) {
//       console.error('EmailJS send error:', err);
//       alert('Failed to send message. Please try again later.');
//     }
//   });
// });
