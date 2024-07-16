import 'dotenv/config';
import app from './app.js';
import db from './config/db.js';


const PORT = process.env.PORT || 3000;

db.sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


