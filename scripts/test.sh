#!/usr/bin/env bash

GLOB="solutions/${1:-*}-*.ts"

for file in $GLOB; do
  echo "Checking $file..."
  npx tsc --noEmit "$file"
done
