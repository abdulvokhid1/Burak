console.log("Signup frontend javascript file");

$(function(){
  
  });

  function validateSignupForm() {
    const memberNick = $(".member-nick").val()
    const memberPhone = $(".member-phone").val()
    const memberPassword = $(".member-password").val()
    const confirmPassword = $(".confirm-password").val()

    if( memberNick === "" || memberPhone === "" || memberPassword === "" || confirmPassword === ""){
        alert("fill in all required inputs");
        return false
    }

    if( memberPassword !== confirmPassword) {
        alert("password not match, please check again");
        return false
    }
  }