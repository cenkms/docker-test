FROM node:10

# create the app folder
WORKDIR /usr/src/app/nodeapp

# copy package.json 
COPY package*.json ./

# install necessary packages - just express in this case
# RUN npm install --only=production # for prod
RUN npm install

# copy app files
COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]
