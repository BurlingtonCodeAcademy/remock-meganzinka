let sendButton = document.getElementsByTagName("sendbutton"); 


let sayThanks = (event) => {
    event.preventDefault(); 
    alert("Thanks for your message!")
    
}

sendButton.addEventListener("mousedown", sayThanks)