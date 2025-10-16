
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

# How to Run the Project
Follow these steps to set up and run the app locally:

1. **Clone the repository**
    https://github.com/zanasad/Company-Admin.git
    cd company-admin

2. **Install dependencies (Make sure you have Node.js and npm installed.)**
    npm install

3. **Install Expo CLI (if not already installed)**
    npm install -g expo-cli

4. **Start the development server**
    npx expo start

This command will:
start the Metro bundler
display a QR code in your terminal
open a local development dashboard

5. **Open the app**
You have multiple ways to preview the app:
| Platform    | How to Run                                                                         |
| ----------- | ---------------------------------------------------------------------------------- |
| **Android** | Open the [Expo Go](https://expo.dev/client) app on your phone and scan the QR code |
| **iOS**     | Open your iPhone Camera app and scan the QR code, or use Expo Go                   |
| **Web**     | Press `w` in the terminal or go to [http://localhost:8081](http://localhost:8081)  |

6. **Optional: Clear the cache(If you experience any errors or old data, run)**
    npx expo start -c

