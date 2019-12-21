'use strict';
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('Part', {
    description: DataTypes.STRING
  }, {});
  Part.associate = function(models) {
    // associations can be defined here
  };
  return Part;
};