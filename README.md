# FireMovies: React Movie App Documentation  

## Project Overview  
**FireMovies** is a sleek and responsive React application designed for managing and exploring movies. Users can view, add, and explore movies seamlessly with a polished user interface. The app is powered by **Firebase** for real-time data storage and retrieval, ensuring quick and efficient performance.  

With FireMovies, users can:  
- Explore a curated list of movies.  
- Add new movies using a simple form.  
- View detailed information about each movie.  

The project is ideal for learning or demonstrating skills in **React**, **Firebase integration**, and **modern web development** practices.  

---

## 🔧 Project Structure  

### **Folders and Files**  

#### **src/**  
- **assets/**:  
  Contains static assets such as images, icons, or other visual elements used in the application.  

- **components/**:  
  - **About.jsx**: Component that provides information about the application.  
  - **AddMovie.jsx**: A form component for adding a new movie to the database.  
  - **Footer.jsx**: Displays the footer section of the application with relevant information.  
  - **Movies.jsx**: Main component to list and display all movies fetched from the database.  
  - **Navbar.jsx**: Contains the navigation bar for navigating between pages.  
  - **ViewMovie.jsx**: Component to display detailed information about a specific movie.  

- **ContextApi/**:  
  - **FirebaseConfig.jsx**: Configuration and setup for Firebase integration. Handles communication with the Firebase database.  

- **styles/**:  
  - **About.css**: Styling for the About page.  
  - **AddMovie.css**: Styling for the Add Movie form.  
  - **Footer.css**: Styling for the Footer component.  
  - **Movies.css**: Styling for the Movies list and display.  
  - **Navbar.css**: Styling for the Navbar.  
  - **ViewMovie.css**: Styling for the View Movie details page.  

- **App.css**: Global styles for the application.  
- **App.jsx**: Entry point of the application’s components and routes.  
- **index.css**: Base styles for the project.  
- **main.jsx**: React application’s main entry point. Wraps the app with necessary providers such as Context and BrowserRouter.  

---

## Features  

1. **Home Page**:  
   - Displays a list of movies fetched from Firebase.  
   - Includes options to view individual movie details.  

2. **Add Movie Page**:  
   - A form to add new movies to the Firebase database.  
   - Validates user inputs for proper data entry.  

3. **View Movie Page**:  
   - Displays detailed information about a selected movie.  

4. **About Page**:  
   - Information about the application, its purpose, and usage.  

5. **Navigation Bar**:  
   - Easy navigation between Home, Add Movie, and About pages.  

6. **Footer**:  
   - Provides basic footer information such as copyright.  

---

## How It Works  

1. **Firebase Integration**:  
   - Movies are stored in a Firebase Realtime Database.  
   - Data is fetched, added, or updated in real-time using the Firebase SDK.  

2. **Routing**:  
   - React Router is used for navigation between different pages.  
   - Routes include:  
     - `/`: Displays the list of movies.  
     - `/add`: Opens the Add Movie form.  
     - `/about`: Displays the About page.  
     - `/movie/:id`: Displays details of a specific movie.  

3. **State Management**:  
   - Context API is used to manage the application state and share data across components.  

---

## 📸 Sample Images  

### Home Page  
![Home Page](assets/homepage_sample.png)  

### Add Movie Page  
![Add Movie Page](assets/addmovie_sample.png)  

### View Movie Page  
![View Movie Page](assets/viewmovie_sample.png)  

---

## 🌐 Live Link  
[FireMovies Live Demo](#)  
*(Replace `#` with your deployed link)*  

---

## 🚀 Installation and Setup  

1. Clone the repository:  
   ```bash
   git clone <repository-link>
