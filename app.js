const express = require('express');
const { createServer } = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Connected');

  socket.on("send-location", (data) => {
    io.emit("receive-location", { id: socket.id, ...data })
  })

  // Optional: Handle other socket events here

  socket.on('disconnect', () => {
    io.emit("user-disconnected", socket.id)
          console.log('user disconnected');
      });
});

// Define a route to render the index view
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
