# Exp 10 - WebSocket Chat App

This project demonstrates a simple real-time chat application built with:

- Spring Boot WebSocket backend
- React + Vite frontend
- SockJS and STOMP for client/server messaging

The backend receives chat messages and broadcasts them to all connected clients. The frontend lets a user enter a name, type a message, and see messages appear live in the chat window.
<img width="778" height="998" alt="image" src="https://github.com/user-attachments/assets/3ac96477-8418-431d-8b69-fe01793d85fe" />

## Project Structure

```text
exp10/
  Demo_WebSocket/   # Spring Boot WebSocket backend
  client/           # React + Vite frontend
  tools/            # Local Maven toolchain used in this workspace
```

## Features

- Real-time WebSocket chat
- STOMP-based message publishing and subscription
- Simple broadcast broker using `/topic/messages`
- React UI for username entry, message list, and message input
- Spring Boot devtools for faster backend development

## Prerequisites

Install the following before running the project:

- Java 17 or later
- Maven 3.9.x or later
- Node.js 18 or later

If Maven is not available globally on your machine, you can use the local Maven copy under `exp10/tools/apache-maven-3.9.11`.

## Backend: Spring Boot WebSocket Server

Backend location:

- `Demo_WebSocket`

Important classes:

- `com.AML3B.Demo_WebSocket.DemoWebSocketApplication`
- `com.AML3B.Demo_WebSocket.config.WebSocketConfig`
- `com.AML3B.Demo_WebSocket.controller.ChatController`
- `com.AML3B.Demo_WebSocket.model.Message`

### Backend Dependencies

The backend uses these Spring Boot starters:

- `spring-boot-starter-web`
- `spring-boot-starter-websocket`
- `spring-boot-devtools`
- `spring-boot-starter-test`

### Backend WebSocket Endpoints

- STOMP endpoint: `/ws`
- Application prefix: `/app`
- Broker destination: `/topic`
- Message destination used by the client: `/app/chat`
- Broadcast destination: `/topic/messages`

## Frontend: React Chat Client

Frontend location:

- `client`

Important files:

- `src/App.jsx`
- `src/App.css`
- `src/index.css`
- `src/main.jsx`
- `src/components/Chat.jsx`
- `src/components/MessageInput.jsx`
- `src/components/MessageList.jsx`

### Frontend Dependencies

- `react`
- `react-dom`
- `vite`
- `sockjs-client`
- `@stomp/stompjs`
- `buffer`
- `process`

The Vite config includes browser-compatible aliases for `buffer` and `process` so the STOMP/SockJS client works in the browser build.

## How It Works

1. The React client connects to `http://localhost:8080/ws` using SockJS.
2. The client subscribes to `/topic/messages`.
3. When the user sends a message, the frontend publishes JSON to `/app/chat`.
4. Spring receives the message in `ChatController`.
5. The backend broadcasts the same message to `/topic/messages`.
6. All connected clients receive and render the message in real time.

## Running the Project

Run the backend and frontend in separate terminals.

### 1. Start the backend

Open a terminal in `exp10/Demo_WebSocket` and run:

```powershell
mvn spring-boot:run
```

If Maven is not on your PATH, run it using the local Maven folder:

```powershell
$env:JAVA_HOME='C:\Path\To\JDK17'
$env:M2_HOME='D:\Codes\CUBS\FSD\exp10\tools\apache-maven-3.9.11'
$env:Path="$env:JAVA_HOME\bin;$env:M2_HOME\bin;" + $env:Path
& "$env:M2_HOME\bin\mvn.cmd" spring-boot:run
```

Backend URL:

- `http://localhost:8080`

WebSocket URL:

- `http://localhost:8080/ws`

### 2. Start the frontend

Open a terminal in `exp10/client` and run:

```powershell
npm install
npm run dev
```

Frontend URL:

- `http://localhost:5173`

If port 5173 is already in use, Vite may automatically start on the next free port, such as `5174`.

## User Flow

1. Open the frontend in the browser.
2. Enter a username.
3. Type a message.
4. Click Send.
5. The message is broadcast through the backend and appears in the message list.

## Code Notes

- `Chat.jsx` creates the STOMP client and manages the WebSocket connection.
- `MessageInput.jsx` handles message entry and send actions.
- `MessageList.jsx` renders the live message feed.
- `WebSocketConfig.java` enables the broker and registers the `/ws` endpoint.
- `ChatController.java` handles incoming chat messages.
- `Message.java` is the message DTO shared by the controller and client payload.

## Troubleshooting

### Backend does not start

- Verify Java 17 is installed.
- Verify Maven is installed or use the local Maven copy in `exp10/tools`.
- Ensure port 8080 is free.

### Frontend cannot connect

- Make sure the backend is running on port 8080.
- Check that the WebSocket endpoint is available at `/ws`.
- Confirm the frontend is sending messages to `/app/chat` and subscribing to `/topic/messages`.

### Messages do not appear

- Refresh the browser after both servers are running.
- Open the browser console and check for STOMP or connection errors.
- Confirm the username field is not empty before sending a message.

## Quick Verification

After starting both servers:

- Open `http://localhost:5173`
- Enter a username
- Send a message
- Open the page in another browser window or tab and send another message
- Both clients should receive the broadcast live

## Summary

This exp10 workspace contains a complete WebSocket chat demo:

- Spring Boot backend on port 8080
- React frontend on Vite dev server
- Real-time message broadcast using STOMP over SockJS
