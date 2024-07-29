This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Disclaimer!
I'm new to NextJS and therefore actively learning how to use it. None of my code is copied from external sources but I have used several resources and guides. I'll list any significant resources below.
* [NextJS Authentication Guide](https://www.youtube.com/watch?v=1MTyCvS05V4&t=17471s)
  * I used this guide for learning the tools and techniques to create a secure and enjoyable authentication experience for my app.

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

### .env

```dotenv
# Database postgresql connection.
DATABASE_URL=
DIRECT_URL=
# Email Authentication
EMAIL_HOST=
EMAIL_USER=
EMAIL_PASS=
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
