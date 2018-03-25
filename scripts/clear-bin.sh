#!/usr/bin/env bash
source "$(dirname $0)/environment.sh"

curl -X PUT \
  https://api.jsonbin.io/b/$1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H "secret-key: ${JSONBIN_API_TOKEN}" \
  -d '[{"drinkId": 1, "name": "Dieter Van Peer", "afgeleverd": true}]'
