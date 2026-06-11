const whatsappLink = document.querySelector("#whatsappLink");

if (whatsappLink) {
  const message = "Hola, vengo desde LPS Company y quiero información.";
  whatsappLink.href = `https://wa.me/19296429620?text=${encodeURIComponent(
    message,
  )}`;
}
