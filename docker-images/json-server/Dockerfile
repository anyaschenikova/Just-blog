FROM node:16
WORKDIR /usr/src/server

COPY . .

EXPOSE 8000

CMD ["npx", "json-server", "--watch", "data/db.json",  "--host", "0.0.0.0", "--port", "8000" ]