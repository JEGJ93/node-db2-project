
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('VIN', 17).unique().notNullable();
      tbl.string('Make', 128).notNullable();
      tbl.string('Model',128).notNullable();
      tbl.string('Mileage').notNullable();
      tbl.string('TransmissionType');
      tbl.string('TransmissionStatus');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
