const socket =io()

let name;

let textarea= document.querySelector('#textarea')
let messageArea=document.querySelector('.message_area')


do{
      name = prompt('Please enter your name: ')
   }while(!name)

 const element = document.getElementById("textarea");
 element.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value)
    }
 })

 function sendMessage(message){
    let msg={
        usr: name,
        message:message.trim()
    }
    //append
    appendMessage(msg,'outgoing')
    textarea.value = ''
    scroollbottom()
    //send to server
    socket.emit('message', msg)
 }

 function appendMessage(msg,type){
   let mainDiv = document.createElement('div')
   let className=type
   mainDiv.classList.add(className,'message')
   let markup= `
   <h4>${msg.usr}</h4>
   <p>${msg.message}</p>
   `
   mainDiv.innerHTML=markup
   messageArea.appendChild(mainDiv)
}


 // Receive message
 socket.on('message',(msg)=>{
    appendMessage(msg,'incoming')
    scroollbottom()
 })

 function scroollbottom(){
     messageArea.scrollTop=messageArea.scrollHeight
 }