#!/bin/bash
rm -rf server/public/*
cd client
ng build --prod --aot=false
cd ..
mv client/dist/* server/public