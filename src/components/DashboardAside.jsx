import React, { useState} from "react";
import logo from "../assets/icons/Marlin Logo.png";
// import catalog from "../assets/icons/menu-icons/catalog.png";
// import customer from "../assets/icons/menu-icons/customer.png";
// import invoice from "../assets/icons/menu-icons/invoice.png";
// import paper from "../assets/icons/menu-icons/paper.png";
// import settings from "../assets/icons/menu-icons/settings.png";
// import shoppingbag from "../assets/icons/menu-icons/shopping-bag.png";
// import team from "../assets/icons/menu-icons/team-management.png";
// import terms from "../assets/icons/menu-icons/terms-and-conditions.png";

// News Images
import carPink from "../assets/navbar/car-pink.svg";
import catalog from "../assets/navbar/catalog.svg";
import conditions from "../assets/navbar/conditions.svg";
import contract from "../assets/navbar/contract.svg";
import employees from "../assets/navbar/employees.svg";
import invoices from "../assets/navbar/invoices.svg";
import orders from "../assets/navbar/orders.svg";
import settings from "../assets/navbar/s.svg";
import vendors from "../assets/navbar/vendors.svg";
import togoText from "../assets/navbar/marlin-logo-with-text.svg";



const DashboardAside = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBodyClass = () => {
    if(document.body){
      document.body.classList.toggle("body-sidebar-open")
    }
  }
  
  // useEffect(() => {

  //   const asideSapns = document.querySelectorAll(".dashboard-aside__list a span")

  //   const hideSpan = (span) => {
  //     if(!document.body.classList.contains("body-sidebar-open")){
  //       span.style.display = "none"
  //     }
  //   }
    
  //   asideSapns.forEach(span => {
  //     span.addEventListener("transitionend", () => hideSpan(span))
  //   })
    
    
  //   return () => {
  //     asideSapns.forEach(span => {
  //       span.removeEventListener("transitionend", () => hideSpan(span))
  //     })
  //   }
  // }, [])
  
  return (
    <aside className="dashboard-aside" onClick={toggleBodyClass}>
      <div className="dashboard-aside-container">

      <a href="" className="marlin-logo-container">
        <img className="logo" src={logo} alt="" />
        {/* <span className="aside-label">Marlin</span> */}
      </a>
      <ul className="dashboard-aside__list">
        <li>
          <a href="#">
            <img className="dashboard-aside__list__vendor" src={vendors} alt="" />
            <span className="aside-label">vendors</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={orders} alt="" />
            <span className="aside-label">Orders</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={catalog} alt="" />
            <span className="aside-label">Catalogue</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={employees} alt="" />
            <span className="aside-label">Employees</span>

          </a>
        </li>
        <li>
          <a href="#">
            <img src={invoices} alt="" />
            <span className="aside-label">Invoices</span>

          </a>
        </li>
        <li>
          <a href="#">
            <img src={settings} alt="" />
            <span className="aside-label">Settings</span>
          </a>
        </li>
        {/*  */}
        <li className="aside-terms">
          <a href="#">
            <img src={conditions} alt="" />
            <span className="aside-label">Conditions</span>
          </a>
        </li>
        <li className="aside-paper">
          <a href="#">
            <img src={contract} alt="" />
            <span className="aside-label">Contract</span>
          </a>
        </li>
      </ul>
      </div>
    </aside>
  );
};

export default DashboardAside;
