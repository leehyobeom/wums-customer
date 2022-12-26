FROM node:lts-alpine as build-stage

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./
COPY .npmrc .npmrc

RUN npm install
RUN rm -f .npmrc

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
