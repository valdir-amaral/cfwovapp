FROM node:14

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/client
RUN npm install && npm run build

WORKDIR /app

WORKDIR /app/server
RUN npm install && npm start

EXPOSE 8080

CMD ["./pocketbase", "serve"]