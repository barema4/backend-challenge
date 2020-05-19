# Command to fire up the a container with a volume
# Specify base image
FROM node:alpine

WORKDIR /usr/hackerbay-backend-challenge

COPY ./package.json ./

# Install some dependencies
RUN npm install

COPY ./ ./

# Default command
CMD ["npm", "start"]