#!/bin/bash
cd /home/user/WebstormProjects/kmb\ tasks/Task\ 10/
docker compose up -d
sleep 15
npm test
docker compose down