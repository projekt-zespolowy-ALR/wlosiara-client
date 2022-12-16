FROM node:19-alpine as builder


RUN adduser -D node && \
	mkdir -p /home/node/app && \
	chown -R node:node /home/node/app

USER node

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:19-alpine

RUN adduser -D node && \
	mkdir -p /home/node/app && \
	chown -R node:node /home/node/app

USER node

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
