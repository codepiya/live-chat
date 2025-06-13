const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);

// 3. Initialize Socket.io by passing it the HTTP server
const io = new Server(server);

// 4. Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// 5. Keep track of who connected (optional for two‐person, but helpful to see in console)
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // When a client sends a "new-message" event, broadcast it to everyone
  socket.on('new-message', (data) => {
    // data will be an object: { username: 'Alice', msg: 'Hello!' }
    io.emit('broadcast-message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// 6. Start the server on port 3000 (you can change the port if you want)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
