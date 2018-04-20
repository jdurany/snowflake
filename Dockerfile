FROM node:9-alpine

RUN apk --update add yarn

COPY yarn.lock .
COPY package.json .

RUN yarn install

COPY . .

ARG port
ENV PORT port

RUN yarn export

CMD ["node", "server/server.js"]
