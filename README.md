# React + Tailwind CSS Cookie Consent Banner

A lightweight, modern, and animated Cookie Consent Banner component built using **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. This component manages UI visibility states seamlessly and persists user configuration directly in the browser's local storage.

## ✨ Features
* **Smooth Entry Animation:** Uses custom keyframe utilities (`animate-swipe-up`) to glide into view from the viewport floor.
* **Persistent State Management:** Utilizes React's `useState` hook with lazy state initialization to safely check `localStorage` on initial mount, preventing layout flashes for returning users.
* **Dual Closure Handlers:** * Clicking **"I like Cookies"** saves preference rules persistently to client memory and closes the card.
  * Clicking the close cross **(X)** suppresses layout rendering strictly for the current active browsing window session.
* **Fully Responsive UI:** Dark mode styling (`bg-gray-950`) optimized with fluid sizing and reactive click animations via Tailwind CSS.

