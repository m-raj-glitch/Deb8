# Deb8
Real-time Chat App using Javasript and socket.io
![image](https://user-images.githubusercontent.com/62300368/163442879-0d1dac4d-be64-4e84-ade0-d9089d4973b6.png)


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
