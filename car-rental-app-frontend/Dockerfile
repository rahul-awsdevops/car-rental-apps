# Stage 1: Build Next.js App
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
# Stage 2: Production container with Node + NGINX reverse proxy

# Base Image
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

# Install NGINX
RUN apk add --no-cache nginx
# Copy Nginx template
COPY nginx/templates /etc/nginx/templates/
ENV NGINX_PORT=80
ENV API_BACKEND_URL=localhost
ENV API_BACKEND_PORT=4000

# Expose ports
EXPOSE ${NGINX_PORT} 3000

# Start both NGINX and Next.js using a shell script
CMD sh -c "next start & nginx -g 'daemon off;'"