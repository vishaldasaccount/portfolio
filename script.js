var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ---------------sidemenubar-------------->

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// --------------typed js------------>

const typed = new Typed(".multiple-text", {
    strings: ["Front-End Developer", "Web Designer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// -----------contact form--------->

const scriptURL = 'https://script.google.com/macros/s/AKfycbwy6X13HLmHdPDC03y5t8NW6zvnlxSCpKD9ZJOR7EcQvYp1q9hufVbKRI2tJUnDnhw_/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Massage sent successfully"
          setTimeout(function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })