# 🌍 Earthquake Visualizer

A web application that visualizes **real-time global earthquake data** using the **USGS Earthquake API**.  
Users can explore recent earthquakes, view magnitudes, and see seismic activity directly on an interactive map.

---

## 🚀 Live Demo
🔗 [View Deployed App on Vercel](https://vercel.com/rashmi-kumaris-projects-f2a531f8/earthquake-visualizer)  

## 👤 User Persona
**Name:** Casey  
**Occupation:** Geography Student  
**Need:** Wants to visualize recent earthquake activity around the world to understand seismic patterns.

---

## 🧩 Features

✅ Real-time earthquake data from [USGS API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson)  
✅ Interactive map built using **React Leaflet**  
✅ Magnitude-based color-coded markers  
✅ Earthquake list view with details  
✅ Search & filter by region, magnitude, and time  
✅ Magnitude distribution chart (using **Recharts**)  
✅ Marker clustering for high-density regions  
✅ Auto-refresh every 5 minutes  
✅ Optional dark mode toggle  
✅ Fully responsive UI (using **Bootstrap 5**)

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | React (Create React App) |
| Styling | Bootstrap 5 |
| Map Library | React Leaflet + Leaflet |
| Charting | Recharts |
| Marker Clustering | react-leaflet-cluster |
| Data Source | USGS Earthquake GeoJSON Feed |
| Deployment | Vercel |

---

## 🧠 Folder Structure

earthquake-visualizer/
│
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── FilterPanel.js
│ │ ├── MapView.js
│ │ 
│ │ 
│ ├── hooks/
│ │ └── useEarthquakes.js
│ ├── App.js
│ └── index.js
│
├── public/
│ ├── index.html
│
└── package.json

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/earthquake-visualizer.git
cd earthquake-visualizer
2️⃣ Install dependencies

npm install
If you face dependency conflicts:

npm install --legacy-peer-deps
3️⃣ Run the development server

npm start
App will start at http://localhost:3000

🌐 Deployment (Vercel)
Push your code to GitHub

Go to https://vercel.com/rashmi-kumaris-projects-f2a531f8/earthquake-visualizer → Import repo

Build command: npm run build

Output directory: build

Deploy and get your live link 🎉

🧑‍💻 Developer
Developed by: Rashmi Kumari
Tech Stack: React, Bootstrap, Leaflet, Recharts
Submitted for: Aganitha Cognitive Solutions Web App Challenge

✨ "Visualize the Earth’s heartbeat — one quake at a time." 🌏
