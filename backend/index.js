const express = require('express');
const cors = require('cors');
const handleErrors = require('./middleware/handleErrors');
const { BadRequest } = require('./utils/errors');
 
const PORT = process.env.PORT || 3001;
const app = express();
// const urlencodedParser = express.urlencoded({extended: false});

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/api/auth/login', (req, res) => {
//   res.json({ data: login });
// });

// app.get('/', (req, res) => {
//   res.sendFile("login");
// });

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    if (!email || !password) {
      throw new BadRequest('Отсутствуют обязятельные параметры запроса: email и пароль');
    }
    const login = require('./api/login.json');
    // const login = await db.login.insert({ email, password });
    res.json({data: login});
  } catch (err) {
    next(err)
  }
});

app.use(handleErrors);
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});