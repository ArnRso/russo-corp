FROM node:20-alpine
RUN apk add --no-cache libc6-compat

EXPOSE 80
WORKDIR /app
COPY --link ./package.json .
RUN npm install

VOLUME /app/node_modules

COPY docker-entry.sh .

CMD ["sh","./docker-entry.sh"]

