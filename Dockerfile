# Étape 1 : Construction de l'application Angular
FROM node:18 AS build
WORKDIR /app

# Copier les fichiers du projet
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Serveur Nginx
FROM nginx:alpine
COPY --from=build /app/dist/organism-front-end/browser /usr/share/nginx/html

# Copier la configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour servir l'application
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]