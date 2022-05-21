FROM node:lts-alpine

ENV PORT "$PORT"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE $PORT

CMD [ "node", "server.js" ]