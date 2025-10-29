FROM node:22

WORKDIR /app

COPY package*.json ./
COPY .env* ./

COPY . .

RUN npm install

CMD ["npm", "test"]
