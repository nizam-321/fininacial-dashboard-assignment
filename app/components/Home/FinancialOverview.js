// import React from "react";
// import FinanceInfoCard from "../cards/FinanceInfoCard";
// import ViewReportButton from "../reusable/ViewReportButton";

// const FinancialOverview = () => {
//   return (
//     <>
//       <div className="flex justify-between items-start mt-4 bg-white py-8">
//         <FinanceInfoCard
//           titile={"Purchases"}
//           total={0}
//           amount={`0.00`}
//           icon={"/finance-overview/purchase.png"}
         
//         />
//         <FinanceInfoCard
//           titile={"Redemptions"}
//           total={0}
//           amount={`0.00`}
//           icon={"/finance-overview/redemption.png"}
//         />
//         <FinanceInfoCard
//           titile={`Rej.Transations`}
//           total={0}
//           amount={`0.00`}
//           icon={"/finance-overview/rej-trasections.png"}
//         />
//         <FinanceInfoCard
//           titile={`SIP.Rejections`}
//           total={0}
//           amount={`0.00`}
//           icon={"/finance-overview/sip-rejection.png"}
//         >
//         <ViewReportButton/>
//         </FinanceInfoCard>

//         <FinanceInfoCard
//           className="border-none"
//           titile={`New SIP`}
//           total={0}
//           amount={`0.00`}
//           icon={"/finance-overview/new-sip.png"}
//         >
//         <ViewReportButton/>
//         </FinanceInfoCard>
//       </div>
//     </>
//   );
// };

// export default FinancialOverview;


import React from "react";
import FinanceInfoCard from "../cards/FinanceInfoCard";
import ViewReportButton from "../reusable/ViewReportButton";

const FinancialOverview = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max gap-4 px-4 mt-4 py-6 bg-white">
        <FinanceInfoCard
          titile={"Purchases"}
          total={0}
          amount={`0.00`}
          icon={"/finance-overview/purchase.png"}
        />
        <FinanceInfoCard
          titile={"Redemptions"}
          total={0}
          amount={`0.00`}
          icon={"/finance-overview/redemption.png"}
        />
        <FinanceInfoCard
          titile={`Rej.Transations`}
          total={0}
          amount={`0.00`}
          icon={"/finance-overview/rej-trasections.png"}
        />
        <FinanceInfoCard
          titile={`SIP.Rejections`}
          total={0}
          amount={`0.00`}
          icon={"/finance-overview/sip-rejection.png"}
        >
          <ViewReportButton />
        </FinanceInfoCard>
        <FinanceInfoCard
          className="border-none"
          titile={`New SIP`}
          total={0}
          amount={`0.00`}
          icon={"/finance-overview/new-sip.png"}
        >
          <ViewReportButton />
        </FinanceInfoCard>
      </div>
    </div>
  );
};

export default FinancialOverview;
