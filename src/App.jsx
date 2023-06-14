import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/scrollbars.css";
import "./styles/aside.css";
import "./styles/modal.css";
import "./styles/react-select.css";
import "./styles/page-geo.css";
import "./styles/column-toggle-popup.css";
import "./styles/date-menu.css";
import "./styles/catalogue-menu.css";
import "./styles/tippy.css";
import "./styles/components.css";
import "./styles/report-child-table.css";
import "./styles/date-range-picker-one.css";
import "./styles/date-picker.css";
import "./styles/floating-filter.css";

import Error from "./pages/Error";
import Employees from "./pages/Employees";
import Profile from "./pages/Profile";
import Vendors from "./pages/vendors/Vendors";
import Invoices1 from "./pages/Invoices1";
import Invoices2 from "./pages/Invoices2";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Prices from "./pages/Prices";
import MainDashboard from "./pages/MainDashboard";
import ProfileForm from "./components/ProfileForm";
import PasswordForm from "./components/PasswordForm";
import Test from "./pages/Test";
import OrderDetails from "./pages/OrderDetails";
import InvoicesTable from "./pages/InvoicesTable";
import Terms from "./pages/Terms";
import AllOrdersParent from "./pages/AllOrdersParent";
import LogsTable from "./pages/LogsTable";
import ReportsTable from "./pages/ReportsTable";
import CatalogueTable from "./pages/CatalogueTable";

//  lazy
// import NewCatalogueTable from "./pages/NewCatalogueTable";
// import CatalogueTableGeo from "./pages/CatalogueTableGeo";
// import CatalogueTablegeoResize from "./pages/CatalogueTableGeoResize";
import StableTable from "./pages/StableTable";
// import CatalogueTable5Level from "./pages/CatalogueTable5Level";
// import AgTable from "./pages/AgTable";

// const NewCatalogueTable = React.lazy(() => import("./pages/NewCatalogueTable"));
// const CatalogueTableGeo = React.lazy(() => import("./pages/CatalogueTableGeo"));
// const CatalogueTablegeoResize = React.lazy(() => import("./pages/CatalogueTablegeoResize"));
// const StableTable = React.lazy(() => import("./pages/StableTable"));
// const CatalogueTable5Level = React.lazy(() => import("./pages/CatalogueTable5Level"));
// const AgTable = React.lazy(() => import("./pages/AgTable"));


import Contract from "./pages/Contract";
import VendorAllOrdersTable from "./pages/VendorAllOrdersTable";
import SlaByVendorsTable from "./pages/SlaByVendorsTable";
import SlaGraphics from "./pages/SlaGraphics";
import DiscountsTable from "./pages/DiscountsTable";
import DiscountsCards from "./pages/DiscountsCards";
import MainHome from "./pages/MainHome";
import VendorsCalendarTable from "./pages/VendorsCalendarTable";
import InvoiceDetailsTable from "./pages/InvoiceDetailsTable";
import SlaCategory from "./pages/SlaCategory";
import DashboardLayout from "./layout/DashboardLayout";
import Dash from "./pages/Dash";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import SlaByShops from "./pages/SlaByShops";
import SlaByItem from "./pages/SlaByItem";
import SlaByOrders from "./pages/SlaByOrders";
import SlaByVendor from "./pages/SlaByVendor";
import SlaByCategory from "./pages/SlaByCategory";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dash />} />
            <Route path="/dash" element={<Dash />} />
            <Route path="/invoice-details" element={<InvoiceDetailsTable />} />
            <Route path="/sla-category" element={<SlaCategory />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileForm />} />
              <Route path="change-password" element={<PasswordForm />} />
            </Route>
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/invoices1" element={<Invoices1 />} />
            <Route path="/invoices2" element={<Invoices2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stable-table" element={<StableTable />} />
            <Route path="/register" element={<Register />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/main-dashboard" element={<MainDashboard />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/invoices-table" element={<InvoicesTable />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/all-orders-parent" element={<AllOrdersParent />} />
            <Route path="/logs" element={<LogsTable />} />
            <Route path="/catalogue" element={<CatalogueTable />} />
            <Route path="/reports" element={<ReportsTable />} />
            <Route path="/contract" element={<Contract />} />
            {/* -------------------- */}
            <Route path="/sla-by-vendors" element={<SlaByVendorsTable />} />
            <Route path="/sla-by-vendor" element={<SlaByVendor />} />
            <Route path="/sla-by-shops" element={<SlaByShops />} />
            <Route path="/sla-by-item" element={<SlaByItem />} />
            <Route path="/sla-by-category" element={<SlaByCategory />} />
            <Route path="/sla-by-orders" element={<SlaByOrders />} />
            <Route path="/sla-graphics" element={<SlaGraphics />} />
            <Route path="/discounts-table" element={<DiscountsTable />} />
            <Route path="/discounts-cards" element={<DiscountsCards />} />
            <Route
              path="/vendors-calendar"
              element={<VendorsCalendarTable />}
            />
            <Route
              path="/vendor-all-orders"
              element={<VendorAllOrdersTable />}
            />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
