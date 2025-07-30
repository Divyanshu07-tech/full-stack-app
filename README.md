# Full Stack App – Assignment

This is a **full stack web application** built with **Next.js (App Router)**, **MongoDB**, and **NextAuth.js**.  
The application includes key features like user registration, login, protected dashboard routes, and a modular layout with reusable components.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **Language:** TypeScript
- **Styling:** CSS / Tailwind (optional)

---

## ⚙️ Installation & Setup

> ⚠️ **Important Note**  
To reduce the file size while submitting the assignment, the `node_modules` folder has been **intentionally deleted**.  
Without it, the project **will not run**. Please follow the steps below to set it up correctly.

### 1. Extract the Project

After extracting the project folder, open it in your code editor or terminal.

### 2. Install Dependencies

To download the missing `node_modules` folder, run:

```
npm i 
```

To install all required packages, run:
```
npm install
```
This command will restore all the deleted dependencies.


### 4. Run the Development Server
Once the environment and dependencies are set up, start the development server:
```
npm run dev
```

The project will be available at:
http://localhost:3000

### Authentication
- User authentication is handled using NextAuth.js
- Includes both register and login flows
- The dashboard route is protected using middleware

### Notes
- Do not forget to run npm i after extracting the project, or it will not work.