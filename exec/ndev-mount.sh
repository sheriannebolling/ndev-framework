#!/usr/bin/env bash

##
cd $1
mkdir ndev_modules > /dev/null 2>&1
ln -s ../node_modules/$2 ndev_modules/$2
