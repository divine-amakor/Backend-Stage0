# 🐱 Backend Stage0 - `/me` API

This project implements a **GET /me endpoint** that returns user information and a random cat fact fetched dynamically from the [Cat Facts API](https://catfact.ninja/fact).

Built with **Node.js + Express**, it follows modern backend practices and is deployable to **Railway** (Vercel and Render are not allowed).

---

## 🚀 Features
- **GET /me** endpoint that returns:
  - Personal info (email, name, backend stack)
  - Current UTC timestamp (ISO 8601 format)
  - Random cat fact from the Cat Facts API 🐾
- Graceful handling of API errors and timeouts
- Proper **application/json** response header
- Clean code structure and logging
- Railway deployment ready

---

## 🧰 Technologies Used
- **Node.js / Express.js** — for server setup
- **Axios** — for fetching cat facts
- **Dotenv** — for managing environment variables
- **CORS** — for cross-origin support

---

## 📁 Project Structure
```
Backend-Stage0/
│
├── index.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/Backend-Stage0.git
cd Backend-Stage0
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the project root:
```env
PORT=3000
USER_EMAIL=youremail@example.com
USER_NAME=Your Full Name
USER_STACK=Node.js/Express
CAT_FACT_API=https://catfact.ninja/fact
```

### 4️⃣ Run Locally
```bash
npm start
```
Or:
```bash
node index.js
```
Then open **http://localhost:3000/me** in your browser.

---

## 🧩 Example Response
```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
```



---





## 👨‍💻 Author
**Name:** Your Full Name  
**Email:** youremail@example.com  
**Stack:** Node.js / Express  
**GitHub:** [github.com/your-username](https://github.com/your-username)

---

## 📄 License
This project is open source under the [MIT License](LICENSE).

