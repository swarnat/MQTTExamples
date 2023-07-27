#!/bin/bash

docker run -it --rm \
                --name mqtt \
                -e "DOCKER_VERNEMQ_ACCEPT_EULA=yes" \
                -e "DOCKER_VERNEMQ_ALLOW_ANONYMOUS=on" \
                -p 1883:1883 \
                -p 8080:8080 \
                vernemq/vernemq:1.12.6.2