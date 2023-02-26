FROM node:latest

COPY . /app

WORKDIR /app

RUN cd client && npm i && npm run build && cd ../server && ./pocketbase serve && node index.js


EXPOSE 8080
CMD ["node", "server/index.js"]