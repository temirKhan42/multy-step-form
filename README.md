
# Multy-Step Form Application

This is a **fullstack monorepo application** with a **Next.js client** and **Node.js server** powered by **TypeScript**.  
It includes clear environment separation, typed logic, modular architecture, and production-ready configurations. This application serves as an example of an architectural solution option. 

---

## 📁 Monorepo Structure


apps/  
├── client/ # Frontend (Next.js + TypeScript)  
├── server/ # Backend (Node.js + Express + TypeScript)


---

## 🖥️ Client

### 📦 Technologies

- [Next.js](https://nextjs.org/) (TypeScript, `type: "module"`)
- ESLint configured for TypeScript and React
- Environment split for development and production

### 📁 Architecture


client/  
├── pages/ # Next.js routes  
│ └── page-name/ # Specific route folder  
├── src/  
│ ├── containers/ # Logic and UI for pages  
│ │ └── page-name/  
│ │ ├── index.tsx # Component logic  
│ │ └── ui/  
│ │ │ └── desktop/ # Desktop-specific styles/components  
│ │ │ └── mobile/ # Mobile-specific styles/components  
│ ├── core/ # Shared logic  
│ │ ├── hooks/  
│ │ ├── types/  
│ │ ├── utils/  
│ │ ├── store/ # RTK Store setup  
│ │ │ └── api/ # RTK Query endpoints  
│ ├── globalComponents/ # Shared React components  
│ └── styledComponents/ # Themed styled-components


### 📜 Available Scripts

Inside `apps/client`:

- `npm run dev` – Start development server
- `npm run build:prod` – Build application for production
- `npm run serve` – Serve the production build
- `npm run lint` – Run ESLint checks


## 🧠 Server

### 📦 Technologies

- Node.js (ESM mode)
- Express
- MongoDB with Mongoose
- Environment separation via `.env.development` and `.env.production`
- Centralized config using `tsconfig.*.json`

### 📁 Architecture


server/  
├── src/  
│ ├── app/ # Express app setup (middlewares, routers)  
│ ├── server/ # Entry point to start server  
│ ├── config/ # Environment & app config  
│ ├── middlewares/ # Custom middlewares  
│ ├── routes/ # Routes -> Controllers -> Services  
│ ├── types/ # Global TypeScript types  
│ ├── utils/ # Helper functions and utilities  
│ └── models/ # Mongoose schemas and models  
├── tsconfig/  
│ ├── tsconfig.base.json  
│ ├── tsconfig.dev.json  
│ └── tsconfig.prod.json  
├── env/  
│ ├── .env.development  
│ └── .env.production

### 📜 Available Scripts

Inside `apps/server`:

- `npm run dev` – Start development server
- `npm run build:prod` – Build application for production
- `npm run serve` – Serve the production build

---

## 🚀 Deployment

- **Client** is deployed via **Vercel**
- **Server** is deployed via **Railway**
- MongoDB connected via **Railway MongoDB**

---

## 📌 Notes

- This project is using **`type: module`** in both client and server.
- All environment-specific configurations (API endpoints, DB URLs, tokens, etc.) must be added to the respective `.env.*` files.
- The structure is optimized for scalability and separation of concerns.

---

## 🛠️ Author & Maintenance

Temirhan Seisengaliyev 

---
