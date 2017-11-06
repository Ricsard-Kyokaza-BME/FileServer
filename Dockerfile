# This image will be based on the official nodejs docker image
FROM node:latest

# Set in what directory commands will run
WORKDIR /home/file-server/app
ADD . /home/file-servers/app

# Install dependencies
RUN cd /home/file-server/app && \
    npm install

# The command to run our app when the container is run
VOLUME ["/home/file-server/app"]
CMD npm run-script prod