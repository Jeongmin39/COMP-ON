module.exports = (sequelize, DataTypes) =>{
    const write = sequelize.define('Write', {
        title:{
            field: 'title',
            type: DataTypes.STRING(30),
            allowNull: false
        },
        content: {
            field: 'content',
            type: DataTypes.STRING(300),
            allowNull: false
        },
        count:{
            field: 'count',
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        underscored: true,
        freezeTableName: true,
        tableName: 'write'
    });
    return write;
};