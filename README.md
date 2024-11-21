# AI-Powered Todo List

This is a basic version of AI-Powered Todo List. 
Upon creating a new todo entry, AI will generate helpfully information how to achieve the result.
This generated text will be saved to a database and can be viewed later. 
App has a resilient design and can be used via mobile.

## Features

- TypeScript
- App router
- React Server Components
- Server Actions with the new React hooks `useFormState` and `useFormStatus`
- [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction) using OpenAI with text streaming
- PostgreSQL with raw SQL queries to manipulate database directly without API
- [shadcn/ui](https://ui.shadcn.com/) library based on [Tailwind CSS](https://tailwindcss.com/)  and [Radix UI](https://www.radix-ui.com/)
- Internationalization with [next-intl](https://next-intl-docs.vercel.app/) including the translations and a language switcher


## Online Demo
https://www.openaitodo.com

## Medium Article
This [article](https://medium.com/javascript-in-plain-english/using-enterprise-react-stack-to-build-ai-powered-applications-in-2024-25-b89d1de4b985) explains the basic tech ideas behind this solution.

## Getting Started Locally

- Install Postgres, create a Postgres database, add the database credentials in `.env` file.  Do not change the variable names.
- Create the table using `/db_init.sql` file
- Create account in OpenAI and get the API key (paid service). Add the key in `.env` file. Do not change the variable name.
- Install dependencies with `npm i`

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



