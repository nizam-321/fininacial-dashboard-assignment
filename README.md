# Financial Dashboard - Next.js Assignment

A responsive Financial Dashboard built with Next.js 15 (App Router) and Tailwind CSS.
This project replicates the given UI design and supports PDF export and mobile app generation using Capacitor.

---

## Features

* Top Navigation Bar with menu items (CRM, Utilities, Insurance, Assets, Mutual, Research, Transact Online, Goal GPS, Financial Planning, Wealth Report, Other).
* Main Stat Cards:

  * AUM: Value, MoM % change, View Report, View Trend.
  * SIP: Value, MoM % change, View Report, View Trend.
* Time Range Filter Bar (3 Days, 7 Days, 10 Days, 30 Days).
* Financial Overview Cards:

  * Purchases, Redemptions, Rejected Transactions, SIP Rejections, New SIP.
* Charts & Reports:

  * Clients Bubble Chart
  * SIP Business Chart (Bar + Line)
  * Monthly MIS (Multi-line Chart)
* PDF Download button → exports the entire dashboard in the same design.
* Capacitor Integration → run the dashboard as a native Android/iOS app.
* Responsive UI → Works on desktop, tablet, and mobile.

---

## Tech Stack

* Next.js 15 (App Router)
* Tailwind CSS for styling
* React Chart.js 2 (Chart.js)
* html-to-image + jsPDF for PDF export
* Capacitor for Android/iOS app build
* Deployed via: *("https://fininacial-dashboard-assignment.vercel.app/")*

---

## Project Structure

FINANCIAL-DASHBOARD/
├── .next/
├── android/
├── app/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── FinanceInfoCard.js
│   │   │   └── FinancialCard.js
│   │   ├── Charts/
│   │   │   ├── ClientBubbleChart.js
│   │   │   ├── MonthlyMISSChart.js
│   │   │   └── SpBusinessChart.js
│   │   ├── Home/
│   │   │   ├── AllCharts.js
│   │   │   └── AumAndSip.js
│   │   ├── layout/
│   │   │   ├── FinancialOverview.js
│   │   │   ├── MobileSidebar.js
│   │   │   ├── Navbar.js
│   │   │   └── RedNavMenu.js
│   │   └── reusable/
│   │       ├── PdfDownloadButton.jsx
│   │       └── ViewReportButton.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── data/
├── ios/
├── node_modules/
├── out/
├── public/
├── .gitignore
├── capacitor.config.json
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md


---

## Installation & Run (Web)

1. Clone the repo:

   ```bash
   git clone https://github.com/nizam-321/fininacial-dashboard-assignment.git
   cd fininacial-dashboard-assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run in development:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

---

## PDF Export

* A "Download PDF" button is available on the dashboard.
* It uses html-to-image + jsPDF to capture the entire dashboard and generate a styled PDF.
* Works both in web and mobile app (Capacitor).

---

## Run as Android/iOS App (Capacitor)

1. Install Capacitor:

   ```bash
   npm install @capacitor/core @capacitor/cli
   ```

2. Initialize Capacitor:

   ```bash
   npx cap init
   ```

3. Add platforms:

   ```bash
   npm install @capacitor/android @capacitor/ios
   npx cap add android
   npx cap add ios
   ```

4. Build static export:

   ```bash
   npm run build
   ```

   This generates the `out/` folder.

5. Update `capacitor.config.json`:

   ```json
   {
     "appId": "com.financial.dashboard",
     "appName": "Financial Dashboard",
     "webDir": "out",
     "bundledWebRuntime": false
   }
   ```

6. Sync and run:

   ```bash
   npx cap sync
   npx cap open android   # Open in Android Studio
   npx cap open ios       # Open in Xcode
   ```

---

## Screenshots

### Dashboard UI

![Dashboard UI](./public/Screenshot%201.png)



---

## Deliverables

* GitHub Repository (this project)
* README.md with setup & run instructions
* Screenshot of the final UI
* Working Android/iOS build with PDF export

---

## Author

Built by Nizam for Frontend Assignment (Financial Dashboard).

---
