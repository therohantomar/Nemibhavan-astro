function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("hidden");
  }
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("bg-themeBlue-0", "text-white");
  }
  document.getElementById(tabName).classList.remove("hidden");
  evt.currentTarget.classList.add("bg-themeBlue-0", "text-white");
}
