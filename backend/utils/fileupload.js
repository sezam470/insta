const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')

const app = express();

// middleware
app.use(express.static('public')); // для доступа к файлам в папке public
app.use(cors());
app.use(fileUpload());

// API для загрузки файлов
app.post('/upload', (req, res) => {
  if (!req.files) {
    throw new GeneralError('Файл не найден');
  }
   
  const myFile = req.files.file;
 
  // метод mv() помещает файл в папку public
  myFile.mv(`${__dirname}/public/${myFile.name}`,
    function (err) {
      if (err) {
        console.log(err)
        throw new GeneralError('Произошла ошибка');
      }
      // возвращаем ответ с именем файла и его расположением
      return res.sendStatus({name: myFile.name, path: `/${myFile.name}`});
  });
})


app.listen(4500, () => {
  console.log('server is running at port 4500');
})