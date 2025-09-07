
'use client'
import Navbar from "./components/layout/Navbar";
import RedNavMenu from "./components/layout/RedNavMenu";
import AumAndSip from "./components/Home/AumAndSip";
import FinancialOverview from "./components/Home/FinancialOverview";
import AllCharts from "./components/Home/AllCharts";
import PdfDownloadButton from "./components/reusable/PdfDownloadButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <RedNavMenu />

      {/* Dashboard container */}
      <div id="dashboard-content">
        <AumAndSip />
        <FinancialOverview />
        <AllCharts />
      </div>

      {/* PDF Button */}
      <div className="flex justify-center">
        <PdfDownloadButton targetId="dashboard-content" />
      </div>
    </>
  );
}
