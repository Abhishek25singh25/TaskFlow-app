# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# dependencies
COPY package*.json ./
RUN npm install

# source code
COPY . .

# build vite app
RUN npm run build


# Stage 2: Production (nginx)
FROM nginx:stable-alpine

# remove default nginx files (IMPORTANT)
RUN rm -rf /usr/share/nginx/html/*

# copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# expose port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]