#!/bin/bash
set -euox pipefail
IFS=$'\n\t'

# Make sure only root can run our script
if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

npm install -g npm && \
     npm cache clean -f && \
     npm install -g n && \
     n 0.12.7 && \
     npm install -g wrench && \
     npm install -g bower && \
     npm install -g --save-dev gulp && \
     bower install --allow-root

# Uncomment if you want to run http-server. This is only used in the deployed docker instance.
# Otherwise, run gulp serve for local development
#npm install -g http-server
