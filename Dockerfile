FROM node:22.23.4

WORKDIR /app

COPY package*.json ./
COPY .env* ./

COPY . .

RUN npm install --ignore-scripts && npm run build

CMD ["npm", "test"]
