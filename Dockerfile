FROM node:14

WORKDIR /Users/samjohnson/Documents/hrfiles/petco/description_directions_attributes_

COPY package.json ./

RUN npm install

COPY ./ ./