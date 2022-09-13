#!/bin/bash

docker build -f Dockerfile -t batchmode/dsp-overview:latest "$(dirname "$0")"