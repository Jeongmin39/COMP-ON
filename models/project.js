module.exports = (sequelize, DataTypes) =>{
    const write = sequelize.define('Write', {
        site:{
            field: 'site',
            type: DataTypes.STRING(100),
            allowNull: false
        },
        git: {
            field: 'git',
            type: DataTypes.STRING(100),
            allowNull: false
        },
        year:{
            field: 'year',
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },

    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        underscored: true,
        freezeTableName: true,
        tableName: 'Write',
        timestamps: true,
        paranoid: true,
    });
    return write;
};
