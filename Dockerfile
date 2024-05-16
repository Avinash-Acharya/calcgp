
ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-alpine


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 3000


CMD npm run dev
