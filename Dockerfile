FROM node:current-alpine3.17

COPY . /app

WORKDIR /app

RUN apk update && \
    apk upgrade

RUN npm install

CMD [ "npm", "start" ]
