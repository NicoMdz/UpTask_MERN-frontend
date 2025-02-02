import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import CreateProjectPage from "./pages/projects/CreateProjectPage";
import EditProjectPage from "./components/projects/EditProjectPage";
import ProjectDetailsPage from "./pages/projects/ProjectDetailsPage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ConfirmAccountPage from "./pages/auth/ConfirmAccountPage";
import RequestNewCodePage from "./pages/auth/RequestNewCodePage";
import ForgotPasswordView from "./pages/auth/ForgotPasswordView";
import NewPasswordPage from "./pages/auth/NewPasswordPage";
import ProjectTeamPage from "./pages/projects/ProjectTeamPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ChangePasswordPage from "./pages/profile/ChangePasswordPage";
import ProfileLayout from "./layouts/ProfileLayout";
import NotFound from "./pages/404/NotFound";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardPage />} index/>
                    <Route path="/projects/create" element={<CreateProjectPage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
                    <Route path="/projects/:projectId/edit" element={<EditProjectPage />} />
                    <Route path="/projects/:projectId/team" element={<ProjectTeamPage />} />
                    <Route element={<ProfileLayout />}>
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/profile/password" element={<ChangePasswordPage />} />
                    </Route>
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage/>} />
                    <Route path="/auth/confirm-account" element={<ConfirmAccountPage/>} />
                    <Route path="/auth/request-code" element={<RequestNewCodePage/>} />
                    <Route path="/auth/forgot-password" element={<ForgotPasswordView/>} />
                    <Route path="/auth/new-password" element={<NewPasswordPage/>} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/404" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}