FROM node:20-alpine
RUN apk add --no-cache libc6-compat

ARG BACKEND_PORT

EXPOSE $BACKEND_PORT

WORKDIR /app
COPY --link ./package.json .
RUN npm install

VOLUME /app/node_modules

COPY docker-entry.sh .

CMD ["sh","./docker-entry.sh"]

