#!/usr/bin/env bash
source "$(dirname $0)/environment.sh"

curl -X PUT \
  https://api.jsonbin.io/b/$1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'secret-key: $2a$10$9mNMmTmhL37eGDo3Eeiac.me76D6aZuw/J9pg4lRrr9o.znKfOelq' \
  -d '[{"drinkId": 1, "name": "Dieter Van Peer", "afgeleverd": true}]'
