## Lista de Comandos
1 - npm init -y
2 - git init 
3 - yarn add express mysql2 sequelize
4 - yarn add sequelize-cli -D 
5 - yarn add nodemon -D 
6 - yarn sequelize db:create (Cria o banco de dados)
7 - yarn sequelize migration:create --name=create_users (Cria uma migrate)
8 - yarn sequelize db:migrate (Execunta a migrate)
9 - yarn sequelize db:migrate:undo (Desfaz a última migrate que foi executada)