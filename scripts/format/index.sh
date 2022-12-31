#!/usr/bin/env sh

echo "┏━━━ 🕵️‍♀️ $PACKAGE_NAME: format ━━━━━━━"
npx sort-package-json && prettier --ignore-path .gitignore --write "**/*.+(js|json|ts)"
