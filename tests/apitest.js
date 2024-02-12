import request from 'supertest';

// GET /actions - liste des actions
describe('GET /actions', function () {
    it('should return an array of questions', async function () {
        const response = await request('http://localhost:3000')
            .get('/actions')

        // Condition 1 - le retour doit être un tableau
        expect(response.body).to.be.an('array');

        // Je parcours le tableau retourné
        for (const question of response.body) {
            // Condition 2 - le retour doit contenir uniquement des objets
            expect(question).to.be.an('object');

            // Condition 3 - chaque objet du tableau doit avoir une propriété/clef id
            expect(question).to.have.property('id');
            // Condition 4 - chaque objet du tableau doit avoir une propriété/clef label
            expect(question).to.have.property('label');
        }
    });
});