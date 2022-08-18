FROM node:16.16.0-alpine3.16

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

RUN cp .env.example .env

EXPOSE 3000
CMD [ "yarn", "start" ]