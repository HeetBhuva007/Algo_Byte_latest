import { io } from "socket.io-client";
//https://algo-byte.onrender.com
//http://localhost:3000
const socket = io({
  withCredentials: true,
  transports: ["websocket", "polling"],
});


export default socket;
