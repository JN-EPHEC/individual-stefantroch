import User from '../src/models/User.js';
import sequelize from '../src/config/database.js';

async function seed() {
    try {
        await sequelize.sync()

        await User.create({ nom: 'Delice', prenom:'Alice' });
        await User.create({ nom: 'Maurane', prenom:'Bob'});

        console.log('Seed terminé !');
    } catch (error) {
        console.error('Erreur lors du seed:', error);
    }
}

seed();