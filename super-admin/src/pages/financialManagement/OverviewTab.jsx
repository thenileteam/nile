
const OverviewTab = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Breakdown */}
        <div className="bg-white p-6 rounded-md shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Breakdown</h3>
          <div className="space-y-4">
            {[
              { category: "Electronics", percentage: 40, amount: "₦18.1M" },
              { category: "Fashion", percentage: 20, amount: "₦11.3M" },
              { category: "Home", percentage: 20, amount: "₦9.0M" },
              { category: "Others", percentage: 20, amount: "₦6.8M" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
                  <span>{item.category}</span>
                  <span>{item.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white p-6 rounded-md shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Expense Breakdown</h3>
          <div className="space-y-4">
            {[
              { category: "Operations", percentage: 50, amount: "₦18.1M" },
              { category: "Marketing", percentage: 25, amount: "₦11.3M" },
              { category: "Salaries", percentage: 20, amount: "₦9.0M" },
              { category: "Others", percentage: 15, amount: "₦6.8M" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
                  <span>{item.category}</span>
                  <span>{item.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;