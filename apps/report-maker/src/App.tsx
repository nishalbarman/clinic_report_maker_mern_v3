import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./pages/Auth/Login";
import RegistrationForm from "./pages/Auth/Registration";
import Header from "./headers/Header";
import Templates from "./pages/Templates";
import PatientReportsList from "./pages/PatientReportsList";
import ProfileSetting from "./pages/ProfileSetting";
import AuthUserList from "./pages/AuthUserList";
import UploadReportManually from "./modals/UploadReportManually";
import AddUserModal from "./modals/AddUserModal";

import ReportCardRecords from "./pages/ReportCardRecords";
import PrivateRoute from "./components/PrivateRoute";
import { ROLE } from "./roleEnumes";

function App() {
  const jwtToken = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Header token={jwtToken} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              requiredRole={[ROLE.ADMIN, ROLE.USER, ROLE.TECHNICIAN]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/templates"
          element={
            <PrivateRoute
              requiredRole={[ROLE.ADMIN, ROLE.USER, ROLE.TECHNICIAN]}>
              <Templates />
            </PrivateRoute>
          }
        />
        <Route path="/report-card-list" element={<ReportCardRecords />} />
        <Route path="/patient-report-list" element={<PatientReportsList />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route
          path="/user-list"
          element={
            <PrivateRoute requiredRole={[ROLE.ADMIN]}>
              <AuthUserList />
            </PrivateRoute>
          }
        />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/auth/reg" element={<RegistrationForm />} />
      </Routes>
      <UploadReportManually />
      <AddUserModal />
    </BrowserRouter>
  );
}

export default App;
