# StayEase 🏡

StayEase is a **MERN-stack** application that allows users to list and explore rental properties. It provides features like adding, editing, and deleting listings, along with a review system.

## 🚀 Features
- View all rental property listings.
- Add new property listings with title, price, location, country, and image.
- Edit and delete existing listings.
- Submit and manage reviews for listings.

## 🛠️ Tech Stack
- **Frontend:** EJS (Embedded JavaScript), Bootstrap, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication & Security:** Express Sessions, Flash Messages

## 📂 Project Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/puneetsharma0910/StayEase.git
cd StayEase
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start MongoDB
Ensure MongoDB is installed and running locally:
```bash
mongod
```
Or use MongoDB Atlas by updating the **MONGO_URL** in `server.js`.

### 4️⃣ Run the Application
```bash
npm start
```
Visit `http://localhost:8080` in your browser.

## 🌍 Deployment
StayEase is deployed on **Vercel**.
## 📜 Environment Variables
Create a `.env` file in the root directory and add:
```
MONGO_URL=mongodb://localhost:27017/StayEase
SESSION_SECRET=your_secret_key
```


## 🤝 Contributing
Feel free to fork this repository and submit pull requests! 

## 📧 Contact
For any queries, contact [puneetsharma0910](https://github.com/puneetsharma0910).
