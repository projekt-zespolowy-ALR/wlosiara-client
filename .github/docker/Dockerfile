FROM node:19-alpine as builder


WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:19-alpine

USER node

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
