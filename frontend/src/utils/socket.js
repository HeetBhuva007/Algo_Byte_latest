import { io } from "socket.io-client";
//https://algo-byte.onrender.com
//http://localhost:3000
const socket = io(
  "https://algobyte.live",

  {
    withCredentials: true,
  }
);

export default socket;
