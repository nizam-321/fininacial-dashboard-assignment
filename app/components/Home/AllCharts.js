"use client"
import React from 'react'
import ClientsBubbleChart from '../Charts/ClientsBubbleChart'
import MonthlyMISChart from '../Charts/MonthlyMISSChart'
import SipBusinessChart from '../Charts/SipBusinessChart'

const AllCharts = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-4 mt-4 ">
      <div className="w-full lg:w-1/3">
        <ClientsBubbleChart />
      </div>
      <div className="w-full lg:w-1/3">
        <SipBusinessChart />
      </div>
      <div className="w-full lg:w-1/3">
        <MonthlyMISChart />
      </div>
    </div>
  )
}

export default AllCharts
