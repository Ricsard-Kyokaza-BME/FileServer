# This image will be based on the official nodejs docker image
FROM node:latest

# Set in what directory commands will run
WORKDIR /home/fs/app
ADD . /home/fs/app

# Install dependencies
RUN cd /home/fs/app && \
    npm install

# The command to run our app when the container is run
VOLUME ["/home/fs/app"]
CMD npm run-script prod