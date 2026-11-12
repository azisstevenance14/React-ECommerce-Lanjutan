# ⚡ ASSA Digital Shop - E-Commerce Landing Page

A modern, modular, and responsive e-commerce front-end web application built using **React.js**, **Vite**, and **Bootstrap 5**. Designed with a component-driven architecture and real-time interactive cart management.

---

## 🚀 Built With & Technology Stack

* **React.js** (Functional Components, `useState` Hook, Props & State Lifting)
* **Vite** (Next-generation lightning-fast frontend build tool)
* **Bootstrap 5** (Responsive layout, Flexbox, UI Card components & Utilities)
* **React Icons** (Scalable vector icons via `react-icons`)
* **Git & GitHub** (Version control and remote repository deployment)

---

## 📁 Project Architecture (Folder Structure)

```text
src/
├── assets/             # Media assets (images, banners, logos)
├── components/         # Modular UI building blocks
│   ├── Navbar.jsx      # Navigation header & dynamic cart badge counter
│   ├── Hero.jsx        # Promotional header banner & Call-to-Action
│   ├── ProductCard.jsx # Reusable individual product card component
│   ├── ProductGrid.jsx # Product container mapping list data dynamically
│   └── Footer.jsx      # Footer with copyright and system info
├── data/
│   └── products.js     # Mock database / API payload for product items
├── App.jsx             # Main application entry & global state coordinator
├── index.css           # Central styling hub (Bootstrap & custom overrides)
└── main.jsx            # React root DOM renderer