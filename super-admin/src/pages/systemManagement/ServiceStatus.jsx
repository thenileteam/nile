// ./SystemManagement/ServiceStatus.jsx
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const ServiceStatus = () => {
  const services = [
    { name: "API Services", uptime: "100%", status: "Operational", icon: CheckCircle, color: "text-green-600", borderColor: "border-green-600" },
    { name: "Database", uptime: "99.9%", status: "Operational", icon: CheckCircle, color: "text-green-600", borderColor: "border-green-600" },
    { name: "CDN", uptime: "95.2%", status: "Degraded", icon: AlertTriangle, color: "text-orange-500", borderColor: "border-orange-500" },
    { name: "Email Service", uptime: "100%", status: "Operational", icon: CheckCircle, color: "text-green-600", borderColor: "border-green-600" },
    { name: "Storage Service", uptime: "87.5%", status: "Incident", icon: XCircle, color: "text-red-600", borderColor: "border-red-600" },
  ];

  const handleRestartServices = () => {
    console.log("Restarting Services...");
    alert("Attempting to restart services...");
  };

  return (
    <div className="bg-[#f4f4f0] px-5 py-7 rounded-xl space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Services Status
        </h3>
        <button
          onClick={handleRestartServices}
          className="bg-green-700 font-semibold text-white px-4 py-2 rounded-md text-sm"
        >
          Restart Services
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Monitor the operational status of core system services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <service.icon size={24} className={service.color} />
              <div>
                <p className="text-sm font-medium text-gray-700">{service.name}</p>
                <p className="text-xs text-gray-500">{service.uptime} Uptime</p>
              </div>
            </div>
            <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${service.color} ${service.borderColor} border`}>
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStatus;