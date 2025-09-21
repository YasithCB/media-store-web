import React from "react";
import {
  FaRegAddressCard,
  FaPaintBrush,
  FaShoppingCart,
  FaInfoCircle,
  FaMoneyBillAlt,
  FaUserAlt,
} from "react-icons/fa";

import "../assets/css/department-emails.css";

const departments = [
  {
    name: "Sales Department",
    email: "sales@mediastore.ae",
    icon: <FaRegAddressCard />,
  },
  {
    name: "Design Department",
    email: "design@mediastore.ae",
    icon: <FaPaintBrush />,
  },
  {
    name: "Purchasing Department",
    email: "purchasing@mediastore.ae",
    icon: <FaShoppingCart />,
  },
  {
    name: "Info Department",
    email: "purchasing@mediastore.ae",
    icon: <FaInfoCircle />,
  },
  {
    name: "Finance Department",
    email: "accounts@mediastore.ae",
    icon: <FaMoneyBillAlt />,
  },
  {
    name: "HR Department",
    email: "hr@mediastore.ae",
    icon: <FaUserAlt />,
  },
];

const DepartmentList = () => {
  return (
    <div className="department-list container my-5 pb-2">
      {departments.map((department, index) => (
        <div className="department" key={index}>
          <div className="department-icon">{department.icon}</div>
          <a href={`mailto:${department.email}`} className="fs-6">
            {department.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
