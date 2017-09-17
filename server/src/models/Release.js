module.exports = (sequelize, DataTypes) => {
  const Release = sequelize.define('Release', {
    artist: DataTypes.STRING,
    title: DataTypes.STRING,
    label: DataTypes.STRING,
    genre: DataTypes.STRING,
    format: DataTypes.STRING,
    tracks: DataTypes.JSON,
    image: DataTypes.STRING
  })

  return Release
}
