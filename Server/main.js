const express = require('express');
const userRouter = require('./routers/userRouter');
const todosRouter = require('./routers/todosRouter')
const postsRouter = require('./routers/postsRouter')


const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

require('./config/database');

app.use('/api/users' , userRouter);
app.use('/api/todos', todosRouter);
app.use('/api/posts', postsRouter);



app.listen(4150)