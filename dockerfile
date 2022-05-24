FROM node:lts-alpine

ENV PORT "$PORT"

WORKDIR /app

COPY . .

RUN npm install

EXPOSE $PORT

CMD [ "npm", "run", "dev" ]