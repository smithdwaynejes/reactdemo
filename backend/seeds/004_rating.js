const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rating').del()
    .then(function() {
      // Inserts seed entries
      return knex('rating').insert([
        {id: 1, key: uuidv4(), rating_for: 163, rating_by: 163, skill_id: 1, rating: 3 } ,
        {id: 2, key: uuidv4(), rating_for: 163, rating_by: 164, skill_id: 1, rating: 4 },
        {id: 3, key: uuidv4(), rating_for: 164, rating_by: 164, skill_id: 3, rating: 2 }
      ])
    }).then(function() {
      // Moves id column (PK) auto-incrementer to correct value after inserts
      return knex.raw("SELECT setval('rating_id_seq', (SELECT MAX(id) FROM rating))")
    })
}


// INSERT INTO rating (id, key, rating, rating_by, rating_for, skill_id) VALUES 
// (1, 'b6a7c07b-802e-4747-8ec1-27224182a3c8', 3, 1, 1, 3), 
// (2, 'cb72720f-7980-4f12-96c8-b59408d3ccfa', 4, 2, 1, 4), 
// (3, '80569039-4196-405c-89f4-e85e31f45dba', 2, 2, 2, 2);




