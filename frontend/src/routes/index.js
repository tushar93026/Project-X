import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from '../pages/LandingPage.js'
import StudentLogin from '../pages/StudentLogin.js'
import StudentRegister from '../pages/StudentRegister.js'
import SAGLogin from '../pages/SAGLogin.js'
import FinanceLogin from '../pages/FinanceLogin.js'
import HomePage from "../pages/HomePage.js";
import Register from "../pages/Register.js";
import Profile from "../pages/Profile.js";
import HelpdeskContact from "../pages/HelpdeskContact.js";
import ApplicationDashboard from "../pages/ApplicationDashboard.js";
import Status from "../pages/Status.js";
import UploadForm from "../pages/UploadForm.js";
import EducationForm from "../pages/EducationForm.js";
import ProfileDetails from "../pages/ProfileDetails.js";
import AddressForm from "../pages/AddressForm.js";
import FinanceDashboard from '../pages/FinanceDashboard.js'
import Dashboard from "../pages/Dashboard.js";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <LandingPage />
            },
            {
                path: 'studentlogin',
                element: <StudentLogin />
            },
            {
                path: 'studentregister',
                element:<StudentRegister />
            },
            {
                path: 'sagofficerlogin',
                element: <SAGLogin />
            },
            {
                path: 'financelogin',
                element: <FinanceLogin />
            },
            {
                path: 'homepage',
                element: <HomePage />
            },
            {
                path: 'register',
                element: <Register />
            },

            {
                path: 'profile',
                element: <Profile />
            },
            {
                path:'helpdesk',
                element: <HelpdeskContact />
            },
            {
                path:'dashboard',
                element: <ApplicationDashboard />
            },
            {
                path: 'applicationstatus',
                element: <Status />
            },
            {
                path: 'uploadform',
                element: <UploadForm />
            },
            {
                path: 'educationform',
                element: <EducationForm />
            },
            {
                path: 'profiledetails',
                element:<ProfileDetails />
            },
            {
                path: 'addressform',
                element: <AddressForm />
            },
            {
                path: 'financedashboard',
                element: <FinanceDashboard />
            },
            {
                path: 'sagdashboard',
                element: <Dashboard />
            }
         
          
        ]
    }
])


export default router