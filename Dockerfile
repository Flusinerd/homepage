FROM nginx:alpine

# Copy public folder to nginx
COPY public /usr/share/nginx/html

EXPOSE 80