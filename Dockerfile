# using the node version I am using
FROM node:16-alpine3.16

# need to specify workdir for node v15 and above:
# https://stackoverflow.com/a/65443098 
WORKDIR /app

COPY package*.json /app/
RUN npm install --no-optional && npm cache clean --force
COPY . /app/

# switch to user with lesser priviliege
USER node 


