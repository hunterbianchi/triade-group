#!/bin/bash

version=`(0.0.1)`

message="Finally at GitHub"

git init

git remote add origin git@github.com:hunterbianchi/triade-group.git

git add .

git commit -m "$version $message"

git push --set-upstream origin main

git push