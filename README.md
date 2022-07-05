# Deb8
Real-time Chat App using Javasript and socket.io
![Login Page](https://user-images.githubusercontent.com/62300368/177407290-89ec0f5a-2c97-454f-b1de-fa29435f2185.jpg)
![Chat Window](https://user-images.githubusercontent.com/62300368/177408259-67f98b70-ed32-4ae5-ac95-afb8faf83470.jpg)

#heroku link
Link: https://floating-tundra-61987.herokuapp.com/

#Features
1. Uses Express as the application Framework.
2. Real-time communication between a client and a server using Socket.io.

#Installation
 #Running Locally
  1. Clone or Download the repository
  2. Install Dependencies
  3. Start the Application
 Application runs from localhost:3000.
 
 #How It Works
 Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using TCP sockets. This is made possible by Socket.io.

 The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit  and listen to events.
