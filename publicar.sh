#!/usr/bin/env bash
# Publica app/ en GitHub Pages (rama gh-pages). Uso: ./publicar.sh  (después de hacer commit en main)
set -e
cd "$(dirname "$0")"
git push -q origin main
git branch -D gh-pages >/dev/null 2>&1 || true
git subtree split --prefix app -b gh-pages >/dev/null
git push -q -f origin gh-pages
echo "Publicado: https://carlosorellanacasco.github.io/carloscan/ (tarda ~1 min)"
