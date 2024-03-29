FROM node:18

WORKDIR /src/frontend/proyecto

COPY package*.json ./

RUN npm install -g @ionic/cli @angular-devkit/build-angular && npm install

EXPOSE 8100

CMD ["npm", "start"]