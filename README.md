
# Sales Dashboard 📊

Hey! 👋 Welcome to **Sales Dashboard**.

This is a frontend project I built to demonstrate how modern web applications can be structured cleanly and professionally using **Atomic Design**. Instead of dumping everything into one page, this project focuses on **scalability, readability, and real-world architecture**.

The dashboard visualizes yearly sales performance and shows how data can be presented clearly using interactive charts.

---

## 💡 What Makes This Special?

I didn’t want to build just another chart page. This project focuses on **how** things are built, not just **what** is shown.

* **Atomic Design Architecture:**  
  The entire UI follows Atomic Design principles — from basic buttons (Atoms) to complex charts (Organisms) and full page layouts (Templates).

* **Clean Component Separation:**  
  Each responsibility is separated properly, making the project easy to extend, debug, and scale.

* **Year-wise Sales Visualization:**  
  Sales data for **2022, 2023, and 2024** is visualized using interactive charts so users can quickly understand trends.

* **Modern UI with Tailwind CSS:**  
  The interface is clean, responsive, and works smoothly on both desktop and mobile screens.

---

## 🛠️ How It Works (The Tech)

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **Architecture:** Atomic Design (Atoms → Molecules → Organisms → Templates)

---

## 📊 Sales Data

The sales values used in this project are **mock data inspired by Kaggle datasets**.  
They are used only for demonstration and visualization purposes.

---

## 🚀 How to Run It

Getting this project running locally is very simple.

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/sales-dashboard.git
cd sales-dashboard
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:3000
http://localhost:3000/dashboard
```

---

## 📁 Project Structure

```
sales-dashboard/
├── app/
│   ├── dashboard/
│   │   └── page.tsx       # Main Dashboard View (Aggregates all charts)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── atoms/             # Basic UI elements (Buttons, Cards)
│   ├── molecules/         # Simple combinations (YearSelector)
│   ├── organisms/         # Complex Widgets
│   │   ├── SalesChart.tsx        # Bar Chart
│   │   ├── RevenueLineChart.tsx  # Line Chart (New)
│   │   └── CategoryPieChart.tsx  # Pie Chart (New)
│   └── templates/         # Page Layouts
│
├── data/
│   └── salesData.ts
│
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

---

## 🔮 Future Enhancements

This project is designed to be easily extended. Possible improvements include:

* Custom sales threshold filters
* API integration for real-time sales data
* Advanced dashboard analytics

---

## 👤 Author

Built  by
**Dhanush A**

---

## ⚠️ Disclaimer

This dashboard uses mock sales data and is intended for learning and demonstration purposes only. It does not represent real financial analytics.

