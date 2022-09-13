FROM node:alpine

COPY src /opt/app/src
COPY index.html /opt/app
COPY vite.config.js /opt/app
COPY package.json /opt/app
COPY package-lock.json /opt/app
COPY postcss.config.cjs /opt/app
COPY tailwind.config.cjs /opt/app

WORKDIR /opt/app
RUN npm install
RUN npm run build

USER 1000:1000

ENTRYPOINT node src/server/server.js