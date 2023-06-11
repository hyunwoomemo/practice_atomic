const express = require('express')
const app = express()
const port = 3001
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 회원가입 데이터를 저장할 배열
let users = [];
let todos = [];

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/auth/signup', (req, res) => {
  const { email, password } = req.body;

  // 회원 데이터 저장
  users.push({ email, password });
  res.json()
})

app.post('/auth/signin', (req, res) => {
  const { email, password } = req.body;

  // 유저 정보 확인
  const user = users.find((user) => user.email === email && user.password === password);

  if (!user) {
    // 인증 실패 시 에러 응답
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // JWT 생성
  const token = jwt.sign({ userEmail: user.email }, 'secretKey', { expiresIn: '1h' });

  // JWT를 응답에 포함하여 반환
  res.json({ token });
})

app.post('/todos', (req, res) => {
  const { inputValue, length } = req.body;
  todos.push({
    'id': length + 1,
    'todo': inputValue,
    "isCompleted": false,
    "userId": 1,
  })
  res.json(todos)
})

app.get('/todos', (req, res) => {
  console.log(todos)
  res.json(todos)
})

// todo 업데이트

app.put('/todos/done/:id', (req, res) => {
  const todoId = req.params.id;
  const { isCompleted } = req.body;
  const todoToUpdate = todos.find(todo => todo.id === parseInt(todoId));

  if (todoToUpdate) {
    todoToUpdate.isCompleted = isCompleted
  }

  res.json(todoToUpdate)
})

app.put('/todos/edit/:id', (req, res) => {
  const todoId = req.params.id;
  const { todo } = req.body;
  const todoToUpdate = todos.find(todo => todo.id === parseInt(todoId));

  if (todoToUpdate) {
    todoToUpdate.todo = todo
  }

  res.json(todoToUpdate)
})

app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;

  todos = todos.filter((v) => v.id !== parseInt(todoId));

  res.json(todos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})