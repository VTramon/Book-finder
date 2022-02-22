FROM node:16-alpine
WORKDIR /app

COPY . /app
COPY package.json /app/package.json
COPY src /app/src
COPY tsconfig.json /app/tsconfig.json

RUN yarn
CMD [ "yarn", "dev" ]
EXPOSE 3000

