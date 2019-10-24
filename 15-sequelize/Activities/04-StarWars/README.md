* Folder: `04-StarWars/Unsolved`

* STEPS TO SEQUELIZE THE STAR WARS APP.

  1. Install the sequelize and mysql2 npm packages.
  2. Delete the orm from config. In your app folder, create a model folder
     with a character.js file in the model
  3. In character.js, model out the character table, as detailed
     in the schema.sql file located in the root of this project directory.
  4. Remove all references to the old orm file,
     and replace it with character.js
  5. Use Sequelize methods in place of the orm calls
     to retrieve and insert data.
  6. Update connection.js to use sequelize instead of the mysql package.
