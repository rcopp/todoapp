#!/bin/bash
echo 'Este script pondrá en marcha la aplicación sólo si dispone de Node.js, npm y MySQL en las versiones especificadas en README.md'
echo 'Coloque la contraseña de su usuario MySQL'
path = "$(pwd)/database/db.sql" #RUTA AL ARCHIVO DE LA BDD
$(mysql -u root -p bdd_items < $path) #CREA EL ESQUEMA DE LA BDD
$(npm i express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator) #INSTALA LAS DEPENDENCIAS
echo 'Abra su navegador web en la dirección localhost:4000'
$(npm run dev) #CORRE EL SERVIDOR LOCAL

