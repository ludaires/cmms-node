'use strict';
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('Issue', {
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    codeType: DataTypes.STRING
  }, {});
  Issue.associate = function(models) {
    // associations can be defined here
  };
  return Issue;
};