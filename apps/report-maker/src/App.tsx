import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./pages/Auth/Login";
import RegistrationForm from "./pages/Auth/Registration";
import Header from "./headers/Header";
import Templates from "./pages/CardTemplatesCards";
import PatientReportsList from "./pages/PatientReportsList";
import ProfileSetting from "./pages/ProfileSetting";
import AuthUserList from "./pages/AuthUserList";
import UploadReportManually from "./modals/UploadReportManually";
import AddUserModal from "./modals/AddUserModal";

import TemplateCardRecords from "./pages/TemplateCardRecords";
import PrivateRoute from "./components/PrivateRoute";
import GenNewTemplate from "./pages/GenNewTemplate";

import { ROLE } from "./roleEnumes";
import { useMemo } from "react";

function App() {
  const dashboardAuthorizedRoles = useMemo(() => {
    return new Set([ROLE.ADMIN, ROLE.TECHNICIAN]);
  }, []);

  const templatesAuthorizedRoles = useMemo(() => {
    return new Set([ROLE.ADMIN, ROLE.TECHNICIAN]);
  }, []);

  const patientReportListAuthorizedRoles = useMemo(() => {
    return new Set([ROLE.ADMIN, ROLE.TECHNICIAN]);
  }, []);

  const onlyAdminAuthorized = useMemo(() => {
    return new Set([ROLE.ADMIN, ROLE.TECHNICIAN]);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute authorizedRoles={dashboardAuthorizedRoles}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/generate-new-template" element={<GenNewTemplate />} />
        <Route
          path="/templates"
          element={
            <PrivateRoute authorizedRoles={templatesAuthorizedRoles}>
              <Templates />
            </PrivateRoute>
          }
        />
        <Route
          path="/report-card-list"
          element={
            <PrivateRoute authorizedRoles={onlyAdminAuthorized}>
              <TemplateCardRecords />
            </PrivateRoute>
          }
        />
        <Route
          path="/patient-report-list"
          element={
            <PrivateRoute authorizedRoles={patientReportListAuthorizedRoles}>
              <PatientReportsList />
            </PrivateRoute>
          }
        />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route
          path="/user-list"
          element={
            <PrivateRoute authorizedRoles={patientReportListAuthorizedRoles}>
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
