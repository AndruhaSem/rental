import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Reservations from "./layouts/reservations";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import Rental from "./layouts/rental";
import Statistics from "./layouts/statistics";
import ProtectedRouteAdmin from "./components/common/protectedRoute/protectedRouteAdmin";
import ProtectedRouteJobs from "./components/common/protectedRoute/protectedRouteJobs";
import AppLoader from "./components/ui/hoc/appLoader";
import { ThemeProvider } from "./hooks/useTheme";
import User from "./layouts/user";

function App() {
    return (
        <div className="containers">
            <AppLoader>
                <ThemeProvider>
                    <NavBar />

                    <Switch>
                        <Route path="/reservations" component={Reservations} />
                        <Route path="/login/:type?" component={Login} />
                        <Route path="/logout" component={LogOut} />
                        <ProtectedRouteJobs path="/rental" component={Rental} />
                        <ProtectedRouteAdmin
                            path="/statistic/:statisticId?"
                            component={Statistics}
                        />
                        <Route path="/:userId?" component={User} />

                        <Redirect to="/" />
                    </Switch>
                </ThemeProvider>
            </AppLoader>
        </div>
    );
}

export default App;
