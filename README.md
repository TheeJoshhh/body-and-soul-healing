This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Here is the formatting for the .env files.

### process.env

```dotenv
# Database postgresql connection.
DATABASE_URL=
DIRECT_URL=
# Email Authentication
EMAIL_SERVER=
EMAIL_FROM=
# Google Authentication
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### .env.production AND .env.development

```dotenv
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```
