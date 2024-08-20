# Cool Media Backend

[Live Link](https://cool-media-client.vercel.app) | [Front-end Code](https://github.com/zamanmonirbu/cool-media-client) | [Back-end Code](https://github.com/zamanmonirbu/cool-media-backend) | [Socket Code](https://github.com/zamanmonirbu/cool-media-socket) | [Demo Video](https://youtu.be/BMk6zPf6T8U)

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
   git clone https://github.com/zamanmonirbu/cool-media-backend.git
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


## Connect with Me

- **Email:** [monir.cse6.bu@gmail.com](mailto:monir.cse6.bu@gmail.com)
- **GitHub:** [![GitHub Icon](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zamanmonirbu)
- **LinkedIn:** [![LinkedIn Icon](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdmoniruzzamanbu/)
- **Codeforces:** [![Codeforces Icon](https://img.shields.io/badge/Codeforces-00FF00?style=for-the-badge&logo=codeforces&logoColor=white)](https://codeforces.com/profile/ZaMo)
- **LeetCode:** [![LeetCode Icon](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/moniruzzamancse6/)
- **Portfolio:** [![Portfolio Icon](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=codeforces&logoColor=white)](https://moniruzzamanbu.netlify.app/)
- **Medium:** [![Medium Icon](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@zamanmonirbu)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.