import app from './app'
import config from 'config'


const PORT = process.env.PORT || config.get('port')

const server = app.listen(PORT, (err)=> {
  if (err) console.log(err)
  console.log(`Server start on port:${PORT}`);
})
