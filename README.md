![image](https://github.com/user-attachments/assets/229abd2c-c81e-4356-9ed1-3b5b6f6506ce)Overview:
This is a Real Estate Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse properties, sign in/sign up, and manage their profiles. The app also includes features for dealers to manage property listings and an admin section for overall management.

Features:
  1. User authentication (Sign up, Sign in, Sign out)
  2. Google Sign-In integration
  3. Password reset functionality
  4. Browse properties
  5. Dealer dashboard for managing listings
  6. Responsive design
  7. User profile

Technologies:
  1. MongoDB
  2. Express.js
  3. React.js
  4. Node.js
  5. Bootstrap
  6. JWT (JSON Web Tokens)
  7. Nodemailer (for email notifications)
   
Setup:
Prerequisites --> Node.js, MongoDB

Installation:
1. Clone the repository:
   git clone https://github.com/your-username/real-estate-management-system.git
   cd real-estate-management-system
2. Install server dependencies:
  cd server
  npm install
3. Install client dependencies:
  cd client
  npm install
Environment Variables:
  Create a .env file in the server directory and add the following environment variables:
  MONGO_URI=your-mongodb-uri
  JWT_SECRET=your-jwt-secret
  EMAIL_USER=your-email@example.com
  EMAIL_PASS=your-email-password
Running the App
1. Start the server:
  cd server
  npm run dev
2. Start the client:
  cd client
  npm start

Usage:
User Authentication:
  Sign up with email and password.
  Sign in with email and password or Google.
  Reset password functionality.
Browsing Properties:
  View available properties on the homepage.
  Detailed view of each property.
Dealer Dashboard:
  Add, edit, and delete property listings.
Admin Dashboard:
  Manage users and properties.

Screenshots:
Homepage:
![Screenshot (932)](https://github.com/user-attachments/assets/b76d5aeb-6115-40f0-9509-4cb499ac3acf)
ContactUS:
![Screenshot (936)](https://github.com/user-attachments/assets/4570e66c-ff46-47ae-b520-db5b951be31d)
Login:
![Screenshot (935)](https://github.com/user-attachments/assets/1c28c3f9-009c-4f51-95bf-c94dd2846e4c)
Lifestyle page:
![Screenshot (934)](https://github.com/user-attachments/assets/19e16692-edb4-4ac0-ae05-209cff207c51)
Top properties in selected city section in Homepage:
![Screenshot (933)](https://github.com/user-attachments/assets/c02ec73d-0292-40a2-a2c4-506710dd3bef)
