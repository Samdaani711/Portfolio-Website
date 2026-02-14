document.addEventListener("DOMContentLoaded", function () {

    /* ================= TYPING ANIMATION ================= */

    const text = "Java Full Stack Developer";
    const typingElement = document.querySelector(".typing");

    let index = 0;
    let isDeleting = false;

    function typeEffect() {

        if (!isDeleting) {
            typingElement.textContent = text.substring(0, index + 1);
            index++;

            if (index === text.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingElement.textContent = text.substring(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, 100);
    }

    typeEffect();


    /* ================= EMAILJS CONTACT FORM ================= */

    emailjs.init("mvTkaGOdtU9FEOSPb");  // 🔴 Replace with your public key

    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm(
                "service_5u88ove",      // ✅ Your Service ID
                "template_2irofw6",     // 🔴 Replace with template ID
                this
            )
            .then(function () {
                alert("Message Sent Successfully ✅");
                form.reset();
            })
            .catch(function (error) {
                console.log(error);
                alert("Failed to send ❌");
            });
        });
    }

});
