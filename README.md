# Cool Media Backend

## Description

Cool Media is a social media application backend built with Node.js, Express, and MongoDB. It provides RESTful APIs for user authentication, posjs, chat messages, and user interactions like following and unfollowing.

## Features

- User authentication (register, login)
- Create, update, delete, like, and comment on posjs
- Follow and unfollow users
- Real-time chat messaging
- Fetch user timelines

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zamanmonirbu/cool-media-backend/tree/deploy-code
   cd cool-media-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=5000
   JWTKEY=hello
   MONGODB_CONNECTION=mongodb+srv://monir1181:monir1181087@cluster0.fwfzjhi.mongodb.net/cool-media?retryWrites=true&w=majority&appName=Cluster0
   ```
   
4. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

### API Endpoinjs

#### Auth

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login a user

#### User

- `GET /user/:id`: Get a user by ID
- `GET /user`: Get all users
- `PUT /user/:id`: Update a user
- `DELETE /user/:id`: Delete a user
- `PUT /user/:id/follow`: Follow a user
- `PUT /user/:id/unfollow`: Unfollow a user

#### Post

- `POST /post`: Create a new post
- `GET /post/:id`: Get a post by ID
- `PUT /post/:id`: Update a post
- `DELETE /post/:id`: Delete a post
- `PUT /post/:id/like`: Like/Dislike a post
- `GET /post/timeline/:id`: Get timeline posjs

#### Chat

- `POST /chat`: Create a new chat
- `GET /chat/:userId`: Get all chats for a user
- `GET /chat/find/:firstId/:secondId`: Find a chat between two users

#### Message

- `POST /message`: Add a new message
- `GET /message/:chatId`: Get all messages for a chat

### Project Structure

```plaintext
cool-media-backend/
├── controllers/
│   ├── AuthController.js
│   ├── ChatController.js
│   ├── MessageController.js
│   ├── PostController.js
│   └── UserController.js
├── models/
│   ├── ChatModel.js
│   ├── MessageModel.js
│   ├── PostModel.js
│   └── UserModel.js
├── routes/
│   ├── auth.js
│   ├── chajs.js
│   ├── messages.js
│   ├── posjs.js
│   └── users.js
├── .env
├── package.json
└── index.js
```

### Author

Md. Moniruzzaman
- [GitHub](https://github.com/zamanmonirbu)
- [LinkedIn](https://www.linkedin.com/in/mdmoniruzzamanbu)
- [Email](mailto:monir.cse6.bu@gmail.com)
```

