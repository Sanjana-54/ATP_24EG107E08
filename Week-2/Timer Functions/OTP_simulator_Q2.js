//2.OTP Countdown Simulator (Console App)

// Show “OTP Sent Successfully”
console.log(`OTP Sent Successfully`)

// Start 10-second countdown
let secs=10;

let timer=setInterval(()=>{
    secs--;
    console.log(`OTP can be resent in ${secs} seconds`)
    
    //Allow resend only after countdown ends
    if (secs==0){
         console.log("Resend OTP")
         clearInterval(timer)
    }
},1000);



