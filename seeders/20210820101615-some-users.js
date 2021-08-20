'use strict';
const bcrypt = require("bcrypt");
const { NOW } = require("sequelize");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "mail@email.com",
          phone: "06 12345678",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser2",
          email: "mail@maile.com",
          phone: "06 87654321",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser3",
          email: "email@mail.com",
          phone: "06 12345678",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser4",
          email: "test@mail.com",
          phone: "06 87654321",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser5",
          email: "mail@test.com",
          phone: "06 12345678",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser6",
          email: "user@mail.com",
          phone: "06 87654321",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser7",
          email: "mail@user.com",
          phone: "06 12345678",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser8",
          email: "new@mail.com",
          phone: "06 87654321",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser9",
          email: "mail@new.com",
          phone: "06 12345678",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser10",
          email: "last@mail.com",
          phone: "06 87654321",
          password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
