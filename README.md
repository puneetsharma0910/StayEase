# StayEase 🏡 - A MERN-Stack Rental Platform
StayEase is a **MERN-stack** application that allows users to list and explore rental properties. It provides features like adding, editing, and deleting listings, along with a review system.

---

## 🚀 Key Features

### 🔑 User Authentication
- Secure login and signup using **Passport.js**.
- Session-based authentication with **express-session**.
- Flash messages for user-friendly notifications.

### 🏠 Listings Management
- **View** all rental property listings.
- **Add** new listings with title, price, location, country, and images.
- **Edit/Delete** listings (authorization required).

### ⭐ Reviews System
- Users can submit, edit, and delete reviews for listings.
- Only the author of a review can modify or remove it.
- One-to-Many relationship between Users and Reviews.

### 🗺️ Interactive Map Integration
- **Mapbox** integration for visualizing property locations.
- Users can view property locations on an interactive map.

### 📱 Responsive Design
- **Bootstrap-based UI** for a seamless experience across devices.

---

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript), Bootstrap, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication & Security**: Passport.js, Express Sessions, Flash Messages
- **Mapping**: Mapbox API

---

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

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```bash
MONGO_URL=mongodb://localhost:27017/StayEase
SESSION_SECRET=your_secret_key
MAPBOX_TOKEN=your_mapbox_token
```

### 4️⃣ Start MongoDB
Ensure MongoDB is installed and running locally:
```bash
mongod
```
Or use MongoDB Atlas by updating the **MONGO_URL** in `.env`.

### 5️⃣ Run the Application
```bash
npm start
```
Visit `http://localhost:8080` in your browser.

---

## 📁 Project Structure
```
StayEase/
│-- models/         # Mongoose schemas (User, Listing, Review)
│-- routes/         # Express routes (listings, users, reviews)
│-- views/          # EJS templates for frontend UI
│-- middleware/     # Custom middlewares for authentication & validation
│-- public/         # Static assets (CSS, JS, images)
│-- utils/          # Utility functions & error handling
│-- app.js          # Main application file
│-- server.js       # Entry point for the app
│-- .env            # Environment variables
```

---

## 🌍 Deployment
StayEase is deployed on **Vercel**.

---

## 🛡️ Security & Best Practices
- **Passport.js** for authentication.
- **express-session** for session management.
- **Joi** for input validation.
- Secure error handling middleware.

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

---

## 📧 Contact
For any queries, reach out to [puneetsharma0910](https://github.com/puneetsharma0910).

