console.log("This is my next project!")




let result = {
  tag: "",
  free: true,
  role: false,
  user: "souritnandymuaha",
  email: "souritnandymuaha@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true
}

submitBtn.addEventListener("click", async(e) => {
       e.preventDefault()
  console.log("Clicked!")
  let key = "ema_live_2wPhRfH8mjhnTOgSbFFmaPa500ffKWYKNyt2lRTW"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    str = str + `<div>${key}: ${result[key]}</div>`
  }
  console.log(str)
  resultCont.innerHTML = str
})


