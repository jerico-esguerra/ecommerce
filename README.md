
# Ecommerce App

## Overview
A fully responsive full stack ecommerce application with payments functionality. The application utilizes a CMS that enables the addition and edit of products. Moreover, advanced cart functionalities and use of Stripe to accept payments is integrated.

## Key Topics
Built using modern technologies:

* ReactJS
* NextJS
* Sanity
* Stripe
* React Context API

## Getting Started

1. Clone this repository (e.g., using `create-next-app`)

	`npx create-next-app -e https://github.com/jerico-esguerra/ecommerce-app project-name`

2. Create .env file containing your own variables (reference **.env.example**) and configure ***lib/client.js*** to your own sanity backend.
3. Run locally: `npm run dev`

## Deployment

1. Create a new [Github](https://github.com/) repository that contains your ecommerce application code.
2. Login to [Vercel](https://vercel.com/login) with Github and import your Git repository.
3. Add your environment variables to Vercel and "authorize" the domain (e.g., add the domain to sanity CORS Origins).
4. DEPLOY!

- - -
© 2023 Jerico Esguerra. All Rights Reserved.