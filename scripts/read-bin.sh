#!/usr/bin/env bash
source "$(dirname $0)/environment.sh"

curl -X GET \
  https://api.jsonbin.io/b/$1/latest \
  -H 'cache-control: no-cache' \
  -H "secret-key: ${JSONBIN_API_TOKEN}"
