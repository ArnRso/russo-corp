FROM node:20-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ./package.json .
RUN npm install

EXPOSE 80

COPY docker-entry.sh .
CMD ["sh","./docker-entry.sh"]
