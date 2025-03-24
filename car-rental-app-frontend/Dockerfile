# Stage 1: Build Next.js App
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build && npm run export

# Stage 2: NGINX + Serve static files
FROM nginx:alpine

ENV NGINX_PORT=80
ENV API_BACKEND_URL=localhost
ENV API_BACKEND_PORT=4000
# Copy Nginx template
COPY nginx/templates /etc/nginx/templates/
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE ${NGINX_PORT}
CMD ["nginx", "-g", "daemon off;"]