import { LOGIN, SIGNIN, GET_USERS, GET_USER } from '../actions/user.action';
import WebSocket = require('ws');
import UserService from '../services/user.service';
import { respond } from '../utils/respond';


async function userHandler(socket: WebSocket.WebSocket, message: any) {
    const body = JSON.parse(message)

    switch (body.type) {
        case SIGNIN:
            console.log(message);
            break;
        case LOGIN:
            console.log(message)
            break;
        default:
            break;
    }
}

// export default userHandler;


class UserController {
    socket: WebSocket.WebSocket
    message: any

    constructor(socket: WebSocket.WebSocket, message: any) {
        this.socket = socket
        this.message = message
    }
    private userService = new UserService();
    public mappingRoute = async () => {
        const body = JSON.parse(this.message)
        switch (body.type) {
            case GET_USERS:
                return this.getUsers(body.data)
            case GET_USER:
                return this.getUser(body.data.id)
            default:
                break;
        }
    }

    private getUsers = async (data: any) => {
        const { limit, offset } = data || {};

        try {
            const users = await this.userService.findAll(limit, offset);
            return this.socket.send(JSON.stringify(respond(users)));
        } catch (error) {
            console.log(error);
        }
    }

    private getUser = async (id: string) => {
        try {
            const user = await this.userService.findOneById(id);
            if (!user) {
                this.socket.send(JSON.stringify(respond(`not found`, true)))
            }
            return this.socket.send(JSON.stringify(respond(user)));
        } catch (error) {
            console.log(error);
            this.socket.send(JSON.stringify(respond(error, true)))
        }
    }


}

export default UserController