# 🌍 Earthquake Visualizer

An interactive web application that visualizes recent earthquake activities around the world using real-time data from the **USGS Earthquake API**.  
Built with **React**, **Bootstrap**, and **React-Leaflet** for a smooth and responsive user experience.

---

## 🚀 Live Demo
👉 [View Deployed App](https://your-vercel-deployment-link.vercel.app)

---

## 🧠 Project Overview

**Goal:**  
Help users (especially geography students or researchers) visualize global seismic patterns in an interactive way — showing where and when earthquakes have recently occurred.

**Key Features:**
- 🌎 Interactive world map with earthquake markers
- ⚙️ Filter by magnitude and time range (last day, week, or month)
- 🧭 Click any marker to view details (location, magnitude, date & time)
- 🔁 Real-time data fetched from USGS API
- 🧱 Built with React (CRA), Bootstrap for UI, and React-Leaflet for maps
- 📱 Fully responsive on mobile and desktop

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|----------|
| **React (CRA)** | UI framework |
| **Bootstrap** | Styling & responsive layout |
| **React-Leaflet** | Map integration |
| **Leaflet** | Core map rendering engine |
| **USGS Earthquake API** | Live earthquake data feed |

---

## 🌐 API Reference

**Endpoint:**
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson

yaml
Copy code

**Available Time Ranges:**
| Time Range | Endpoint |
|-------------|-----------|
| Last 24 Hours | `all_day.geojson` |
| Last 7 Days | `all_week.geojson` |
| Last 30 Days | `all_month.geojson` |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/earthquake-visualizer.git
cd earthquake-visualizer
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start the Application
bash
Copy code
npm start
Visit: http://localhost:3000

🧩 Folder Structure
pgsql
Copy code
src/
 ├── components/
 │     ├── MapView.js
 │     ├── FilterPanel.js
 │     └── Header.js
 ├── hooks/
 │     └── useEarthquakeData.js
 ├── App.js
 ├── index.js
 ├── index.css
💡 Features Explanation
Feature	Description
Interactive Map	Displays all recent earthquakes as markers
Filter by Magnitude	Show only earthquakes above a selected magnitude
Filter by Time	Choose between 24 hours, 7 days, or 30 days
Detailed Popup	Click on markers to see magnitude, location, and time
Error Handling	Gracefully handles network or API errors
Responsive Design	Looks great on mobile, tablet, and desktop

🧑‍💻 Author
Rashmi Kumari
Full Stack Developer | React | Node.js | MERN Stack
📧 [rashmi8shahi@gmail.com]
🌐 LinkedIn Profile : https://www.linkedin.com/in/rashmi-kumari-4b171726b/

🏁 License
This project is open source and available under the MIT License.


