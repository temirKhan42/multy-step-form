import "./config/dotenv.config.js";
import https from "node:https";
import createApp from "./app.js";
import { PORT } from "./config/dotenv.config.js";
import logger from "./utils/logger.js";
import { disconnectDB } from "./config/mongo.config.js";

const app = createApp();

// const server = https
//   .createServer(certConfig, app)
//   .listen(PORT, () => {
//     logger.log(`Server Started on ${PORT}`);
//   });

const server = app.listen(PORT, () => {
  logger.log(`Server Started on ${PORT}`);
});

server.timeout = 30000;

process.on('SIGINT', async () => {
  await disconnectDB();
  process.exit(0);
});

server.on('timeout', (socket) => {
  socket.end('HTTP/1.1 408 Request Timeout\r\n\r\n');
});