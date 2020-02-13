//Config
import { SOCKET_URL } from "./config";
import io from "socket.io-client";
//Instruments

export const socket = io(SOCKET_URL);
