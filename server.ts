import { WebSocketServer } from "ws";
import UserController from "./src/controllers/user.controller";

const port = 1234;
const wss = new WebSocketServer({ port });

wss.on("connection", ws => {
    ws.on('message', async(message) => {
        const user = new UserController(ws, message)
        user.mappingRoute()
        // userHandler(ws, message)
    })
})


console.log(`Listening on port ${port}....`)