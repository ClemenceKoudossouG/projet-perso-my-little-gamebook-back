const request = require('supertest');

// GET /actions - liste des actions
describe('GET /actions', function () {
    it('should return an array of actions', async function () {
        const response = await request('http://localhost:3000')
            .get('/actions')

        // Condition 1 - le retour doit être un tableau
        expect(response.body).toEqual(expect.any(Array));

        // Je parcours le tableau retourné
        for (const action of response.body) {
            // Condition 2 - le retour doit contenir uniquement des objets
            expect(action).toEqual(expect.any(Object));

            // Condition 3 - chaque objet du tableau doit avoir une propriété/clef id
            expect(action).toHaveProperty('id');
            // Condition 4 - chaque objet du tableau doit avoir une propriété/clef label
            expect(action).toHaveProperty('label');
            // Condition 5 - chaque objet du tableau doit avoir une propriété/clef class
            expect(action).toHaveProperty('class');
            // Condition 6 - chaque objet du tableau doit avoir une propriété/clef consequence
            expect(action).toHaveProperty('consequence');
        }
    });
});