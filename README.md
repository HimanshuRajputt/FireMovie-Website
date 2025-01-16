
# 🎥 FireMovies

A **dynamic and interactive Movie Management Application** built with **React**, **Firebase**, and a touch of modern design. FireMovies allows users to explore, add, and view movies effortlessly while maintaining a clean and responsive interface. 🚀

---

## 🌟 Features

- **🏠 Home Page**:
  - Displays a list of all movies fetched from Firebase.
  - Each movie includes basic details like title and description.

- **➕ Add Movie Page**:
  - Form to add a new movie to the Firebase database.
  - Validates user inputs for proper data entry.

- **📄 View Movie Page**:
  - Detailed view of a selected movie, including all relevant information.

- **ℹ️ About Page**:
  - Provides information about the application, its purpose, and how to use it.

- **🧭 Navigation Bar**:
  - Seamless navigation between pages like Home, Add Movie, and About.

- **⚡ Real-Time Updates**:
  - Firebase ensures real-time data synchronization.

---

## 🔧 Technologies Used

- **React**: To build a dynamic and responsive UI.
- **Firebase**: For database management and real-time data updates.
- **React Router**: For managing routes and navigation.
- **CSS Modules**: For clean and modular styling.

---

## 🚀 How to Get Started

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd firemovies
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Add your Firebase configuration**:
   - Replace the Firebase configuration in `FirebaseConfig.jsx` with your own.

5. **Run the development server**:
   ```bash
   npm start
   ```

6. **Open in your browser**:
   - Navigate to `http://localhost:3000/`.

---

## 📂 File Structure

```
firemovies/
├── public/
├── src/
│   ├── assets/          # Static assets like images and icons
│   ├── components/      # Reusable components for the app
│   │   ├── About.jsx       # About page component
│   │   ├── AddMovie.jsx    # Add movie form component
│   │   ├── Footer.jsx      # Footer section
│   │   ├── Movies.jsx      # Displays list of movies
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── ViewMovie.jsx   # Detailed view of a movie
│   ├── ContextApi/
│   │   ├── FirebaseConfig.jsx # Firebase configuration and API logic
│   ├── styles/           # CSS files for styling components
│   │   ├── About.css
│   │   ├── AddMovie.css
│   │   ├── Footer.css
│   │   ├── Movies.css
│   │   ├── Navbar.css
│   │   ├── ViewMovie.css
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styling
│   ├── index.css         # Base styles
│   ├── main.jsx          # React entry point
├── package.json
└── README.md
```

---

## 🌐 Live Demo

Check out the live application here: [FireMovies Live Link](https://spectacular-fox-7f3aaa.netlify.app/)  
*(Replace `#` with your deployed link)*

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home Page](assets/homepage_sample.png)

### ➕ Add Movie Page
![Add Movie Page](assets/addmovie_sample.png)

### 📄 View Movie Page
![View Movie Page](assets/viewmovie_sample.png)

---

## 🗺️ Routes

1. **Home Page**: `/`
   - Displays the list of movies.

2. **Add Movie**: `/add`
   - Form to add new movies.

3. **View Movie**: `/movie/:id`
   - Displays details of a specific movie.

4. **About Page**: `/about`
   - Displays information about the application.

---

## 📝 Commit Guidelines

- Commit your code **every 30 minutes** to ensure consistent progress.
- Use meaningful commit messages, such as:
  - "✨ Add movie addition functionality"
  - "🐛 Fix movie fetch logic"
  - "💄 Improve UI styling for the home page"

---

## 🔮 Future Enhancements

- Add user authentication for secure access to movie management features.
- Implement advanced search and filter functionality.
- Enhance the UI with animations and better responsiveness.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgments

- **Firebase** for providing the backend services.
- **React Router** for seamless navigation between pages.

---

🎉 Thank you for exploring FireMovies! Enjoy managing and discovering movies. 🍿
