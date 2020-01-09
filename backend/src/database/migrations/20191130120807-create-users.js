module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                allowNull: false,
                unique: true,
                isEmail: true,
                type: Sequelize.STRING,
                validate: {
                    isEmail: {
                        msg: 'Email address deve ser válido',
                    },
                },
            },
            password_hash: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            provider: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('users');
    },
};
