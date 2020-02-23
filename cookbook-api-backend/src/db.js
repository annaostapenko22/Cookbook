const mongoose = require('mongoose');

class Database {
    static connect(server, database) {
        mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.info('Database connection is successful');
            })
            .catch((err) => {
                console.error('Database connection is unsuccessful', err);
            })
    }
}

module.exports = Database;