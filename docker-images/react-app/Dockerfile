FROM node:16
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

COPY . .

EXPOSE 3000

CMD ["npm", "start"]