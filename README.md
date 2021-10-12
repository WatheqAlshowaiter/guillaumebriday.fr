[![Netlify Status](https://api.netlify.com/api/v1/badges/f1ff9daf-4123-4b27-9aab-761073812859/deploy-status)](https://app.netlify.com/sites/guillaumebriday/deploys)
![](https://github.com/guillaumebriday/guillaumebriday.fr/workflows/Lint/badge.svg)

# guillaumebriday.fr

Source code of [guillaumebriday.fr](https://guillaumebriday.fr) built with [Gatsby](https://www.gatsbyjs.org) and [Tailwind CSS](https://tailwindcss.com/).

## Running in development

1. Make an <https://www.algolia.com/> Account.
2. Copy the `.env.example` to yout `.env` file using `cp .env.example .env`, it will create an `.env` file if you don't have one.
3. Copy all these keys to your `.env` file to have the functionality of algolia search.  
    they are:
    ```
    ALGOLIA_API_KEY=
    ALGOLIA_APP_ID=
    ALGOLIA_INDEX_NAME=
    ```
4. run the commands:
```bash
$ yarn
$ yarn develop
```

if you want to Format the code:
```bash
$ yarn format
```

5. To run the final result with all of the optimizations (i,e to run it on the server):
```
yarn serve
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.
