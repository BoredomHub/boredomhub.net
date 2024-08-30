// Discord Button
let _debounce = false;

const footer = document.querySelector('footer');
const discordLogo = document.getElementById("discord");

discordLogo.addEventListener('click', e => {
  if (_debounce) return
  _debounce = true

  footer.classList.add("clicked");
  discordLogo.classList.add("clicked");
  setTimeout(() => {
    window.location = 'https://discord.gg/9kguZWDnc3'
  }, 500)
})