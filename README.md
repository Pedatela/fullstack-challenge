# Installation

```bash
# Download repository
git clone https://github.com/Pedatela/fullstack-challenge.git
```

## Backend
```bash
# Install node 12 

# Access the director: server 
cd example/server

# Install packages
npm install or yarn install

# Run Migrates
npx sequelize db:migrate or yarn sequelize db:migrate 

# Access the director: server/src/script/database/script; 
# Copy the SQL file and run it
psql postgres -h <YOUR HOST> -d <YOUR DB_NAME> -a -f Insert-Books.sql or 
open your database manager (pgAdmin or Postico) and copy the file content, 
paste it in your database manager and run it.


# Run tests
npm test or yarn test

# Run server (backend)
npm start or yarn start

# Server is runnin on: http://localhost:3333/
```

## Frontend - React
```bash
# Instalar nvm (https://github.com/creationix/nvm#install-script)

# Install node 12 
nvm install stable

# # Access the director: client 
cd example/client

# Install packages
npm install or yarn install

# Run client (frontend)
npm start or yarn start

# Client is runnin on: http://localhost:3000/
```
