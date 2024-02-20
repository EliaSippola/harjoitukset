FROM node:20.10.0

COPY ./package*.json ./
COPY ./app.js ./
COPY ./.env ./

RUN npm install

EXPOSE 3030

CMD ["node", "./app.js"]