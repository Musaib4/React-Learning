# 📝 Advanced Todo App (React)

A feature-rich **Todo Application built with React** that demonstrates real-world concepts such as **CRUD operations, Context API, API fetching, localStorage persistence, theme switching, and UX improvements**.

This project was built following a **structured React learning roadmap**, progressing from beginner to industry-level practices.

---

##  Features

### ✅ Todo Management
- Add new todos
- Edit existing todos
- Delete individual todos
- Delete all todos
- Mark todos as completed
- Filter todos (All / Completed)
- Search todos dynamically

### 🎨 Theme System
- Light / Dark mode toggle
- Theme persisted using `localStorage`
- Global theme management using Context API

### 🌐 API Integration
- Fetch products from an external API
- Centralized API logic using Context
- Loading and error handling

### ⚡ UX Enhancements
- Auto-focus input field
- Smooth scroll to newly added todo
- Skeleton loading UI
- Graceful error handling with retry option

---

## 🧠 Concepts & Technologies Used

### ⚛️ React Concepts
- `useState`
- `useEffect`
- `useRef`
- `useContext`
- Context Provider / Consumer pattern
- Controlled components
- Derived state
- Conditional rendering

### 🛠️ Tools & Tech Stack
- React (Vite)
- JavaScript (ES6+)
- CSS
- Fetch API
- localStorage

---

## 📁 Folder Structure

| Path | Description |
|------|------------|
| `src/` | Root source directory |
| `src/context/` | Global state management using Context API |
| `src/context/theme.jsx` | Theme (Light/Dark) context provider |
| `src/context/apiContext.jsx` | API & product data context |
| `src/services/` | API service layer |
| `src/services/api.jsx` | API fetch logic |
| `src/todo.jsx` | Main Todo component (CRUD, search, filter) |
| `src/App.jsx` | Root application component |
| `src/main.jsx` | Application entry point |
| `src/index.css` | Global application styles |


## 🧩 Application Flow

- Todos are managed using component state and persisted with `localStorage`
- Theme is handled globally using Context API
- API data is fetched once and shared across components via context
- `useRef` is used for DOM-based behaviors (focus & scroll)
- Filtering and searching use derived state for better performance

---

## 🖥️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/todo-app.git
2. Install Dependencies
bash
Copy code
npm install
3. Run the Application
bash
Copy code
npm run dev
📌 Future Enhancements
Replace index keys with unique IDs

Add React Router for multi-page navigation

Improve UI with reusable components

Add authentication flow

Convert into a full dashboard application

Learning Outcome
This project helped me:

Build real-world React applications

Understand state management and re-render flow

Use Context API effectively

Improve UX and performance

Prepare for React Internship / Junior Frontend roles

👤 Author
Musab
Aspiring Frontend / React Developer
Focused on building production-ready React applications
