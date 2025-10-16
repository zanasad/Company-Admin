
# Company Admin App

**Company Admin** is a mobile application built with **React Native** and **Expo**, designed to manage company users through a clean and modern interface.  
This project demonstrates a solid understanding of **React Native**, **TanStack Query**, **Async Storage**, and **React Navigation**.

---

## Key Features
- **User Authentication (Login)** – Verifies user credentials from `digitalflow_users.json`
- **User Dashboard** – Displays all existing users with complete details (Full Name, Email, Country, City, Street, Company, Job Title)
- **Dynamic Search** – Filter users by any field (name, email, city, company, etc.)
- **User Profile** – View detailed information for each selected user
- **Add New User** – Create new users through a user-friendly form
- **Data Management with TanStack Query** – Efficient local data handling and updates

---

## Tech Stack

| Category      | Technology |
|---------------|-------------|
| Framework     | [React Native](https://reactnative.dev/) |
| Platform      | [Expo](https://expo.dev/) |
| Data Fetching | [TanStack Query](https://tanstack.com/query/latest) |
| Navigation    | [React Navigation](https://reactnavigation.org/) |
| Local Storage | [Async Storage](https://github.com/react-native-async-storage/async-storage) |
| Language      | JavaScript (ES6+) |

---

## How to Run the Project

Follow these steps to set up and run the app locally:

```bash
# 1️⃣Clone the repository
git clone https://github.com/zanasad/Company-Admin.git
cd company-admin

# 2️⃣Install dependencies (Make sure you have Node.js and npm installed)
npm install

# 3️⃣Install Expo CLI (if not already installed)
npm install -g expo-cli

# 4️⃣Start the development server
npx expo start

# This command will:
# - Start the Metro bundler
# - Display a QR code in your terminal
# - Open a local development dashboard

# 5️⃣Open the app
# You have multiple ways to preview the app:
#   • Android → Open the Expo Go app and scan the QR code
#   • iOS → Open your iPhone Camera app and scan the QR code, or use Expo Go
#   • Web → Press "w" in the terminal or open http://localhost:8081 in your browser

# 6️⃣(Optional) Clear the cache if you experience any errors or old data
npx expo start -c


