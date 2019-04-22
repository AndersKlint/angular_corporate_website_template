#!/bin/bash
ng build --prod --base-href "https://andersklint.github.io/angular_corporate_website_template/"
npx angular-cli-ghpages --dir=dist/corporate-website-template
