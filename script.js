const valid = () => {
  const email = document.getElementById("email");
  const error_msg = document.getElementById("error-msg");
  const main_wrapper = document.getElementById("main-wrapper");
  const sucess_wrapper = document.getElementById("sucess-wrapper");
  const email_place = document.getElementById('email-place')
  if (email.value.length >= 5 && email.value.includes("@")) {
    console.log("Success");
    email_place.innerText = email.value;
    main_wrapper.style.display = "none"
    sucess_wrapper.style.display = "flex"
  } else {
    email.style.border = "1px solid hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    error_msg.style.display = "block";
  }
};
