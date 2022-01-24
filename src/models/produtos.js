const produto = (sequelize, DataTypes) => {
    const Produto = sequelize.define('produtos', {
        thumbnail: {
            type: DataTypes.STRING,
        },
        permalink: {
            type: DataTypes.STRING,
        },
        buscador: {
            type: DataTypes.STRING,
        },
        categoria: {
            type: DataTypes.STRING,
        },
        titulo: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.STRING,
        },
        query: {
            type: DataTypes.STRING,
        }
    })

    return Produto
}

module.exports = produto