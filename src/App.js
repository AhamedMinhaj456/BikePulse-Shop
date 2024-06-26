import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerManagementWindow from "./components/views/CustomerManagementWindow";
import ReservationRequestListWindow from "./components/views/ServiceManagement/PendingApproval/ReservationRequestListWindow";
import AdminProfileWindow from "./components/views/ShopProfileWindow";
import ShopSettingWindow from "./components/views/ShopSettingWindow";
import ShopFeedbackSettingWindow from "./components/views/ShopFeedbackSettingWindow";
import ShopMainWindow from "./components/views/ShopMainWindow";
import ReservationDetailsWindow from "./components/views/ServiceManagement/PendingApproval/ReservationDetailsWindow";
import PartsCategoryManagementWindow from "./components/views/PartsCategoryManagementWindow";
import PaymentSubscriptionPlanWindow from "./components/views/PaymentSubscriptionPlanWindow";
import PaymentCustomerCharges from "./components/views/PaymentCustomerCharges";
import ProgressUpdateWindow from "./components/views/ProgressUpdateWindow";
import ShopSearch from "./components/views/ShopSearch";
import ShopSearchs from "./components/views/ShopSearchs";
import UpdateUserStatus from "./components/views/UpdateUserStatus";
import CompletedServices from "./components/views/ServiceManagement/CompletedServices/CompletedServices";
import CompletedServicesDetails from "./components/views/ServiceManagement/CompletedServices/CompletedServicesDetails";
import ShopOwnerFlow from "./components/ShopRegister/shopOwnerFlow";
import ShopHome from "./components/ShopRegister/shopHome";
import ShopLogin from "./components/ShopRegister/ShopLogin";
import SetPassword from "./components/ShopRegister/SetPassword";
import RegistrationComplete from "./components/ShopRegister/RegistrationComplete";
import Congratulations from "./components/ShopRegister/Congratulations";
import RegistrationPending from "./components/ShopRegister/RegistrationPending";
import Congratz2 from "./components/ShopRegister/Congratz2";
import ForgetPassword from "./components/ShopRegister/ForgetPassword";
import SecurePayment from "./components/ShopRegister/SecurePayment";
import Verification from "./components/ShopRegister/Verification";
import Subscription from "./components/ShopRegister/Subscription";
import DateTimePicker from "./components/ShopRegister/DateTimePicker";
import ServiceProcessManagement from "./components/views/ServiceManagement/OnProcess/ServiceProcessManagement";
import ServiceProcessManagementDetails from "./components/views/ServiceManagement/OnProcess/ServiceProcessManagementDetails";


import { Provider } from "react-redux";
import store from "./Store/Store";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<AdminHomePage />} /> */}

          {/* <Route path="/" element={<LeftSidebar />} /> */}
          <Route path="/ShopMainWindow" element={<ShopMainWindow />} />
          <Route
            path="/customer-management"
            element={<CustomerManagementWindow />}
          />
          <Route
            path="/reservation-management"
            element={<ReservationRequestListWindow />}
          />
          <Route path="/profile" element={<AdminProfileWindow />} />
          <Route path="/shop-setting-window" element={<ShopSettingWindow />} />
          <Route
            path="/shop-feedback-setting"
            element={<ShopFeedbackSettingWindow />}
          />
          <Route path="/shop-main" element={<ShopMainWindow />} />
          <Route
            path="/Reservation-details-management"
            element={<ReservationDetailsWindow />}
          />
          <Route
            path="/parts-Category-main"
            element={<PartsCategoryManagementWindow />}
          />
          <Route
            path="/payment-subscription-main"
            element={<PaymentSubscriptionPlanWindow />}
          />
          <Route
            path="/payment-charge-main"
            element={<PaymentCustomerCharges />}
          />
          <Route
            path="/progress-update-main"
            element={<ProgressUpdateWindow />}
          />

          <Route path="/ShopSearch" element={<ShopSearch />} />
          <Route path="/ShopSearchs" element={<ShopSearchs />} />
          <Route path="/UpdateUserStatus" element={<UpdateUserStatus />} />
          <Route
            path="/ServiceProcessManagement"
            element={<ServiceProcessManagement />}
          />
          <Route
            path="/ServiceProcessManagementDetails"
            element={<ServiceProcessManagementDetails />}
          />
           <Route
            path="/CompletedServicesDetails"
            element={<CompletedServicesDetails />}
          />
           <Route
            path="/CompletedServices"
            element={<CompletedServices />}
          />

          <Route path="/" element={<ShopHome />} />
          <Route path="/ShopLogin" element={<ShopLogin />} />
          <Route path="/DateTimePicker" element={<DateTimePicker />} />
          <Route path="/SetPassword" element={<SetPassword />} />
          <Route
            path="/RegistrationComplete"
            element={<RegistrationComplete />}
          />
          <Route path="/Congratulations" element={<Congratulations />} />
          <Route
            path="/RegistrationPending"
            element={<RegistrationPending />}
          />
          <Route path="/Congratz2" element={<Congratz2 />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/SecurePayment" element={<SecurePayment />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/shopOwnerFlow" element={<ShopOwnerFlow />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
