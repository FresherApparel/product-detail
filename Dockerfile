# What image do you want to start building on?
FROM node:12.18.3

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/overview

# Tell your container where your app's source code will live
WORKDIR /src/overview

# What source code do you want to copy, and where to put it?
COPY . /src/overview

# Does your app have any dependencies that should be installed?
RUN npm install

RUN npm run build

# What port will the container talk to the outside world with once created?
EXPOSE 3030

# How do you start your app?
CMD [ "npm", "run", "server" ]