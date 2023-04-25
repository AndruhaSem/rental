import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Reservations from "./layouts/reservations";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import Rental from "./layouts/rental";
import Statistics from "./layouts/statistics";
import ProtectedRouteAdmin from "./components/common/protectedRoute/protectedRouteAdmin";
import AppLoader from "./components/ui/hoc/appLoader";
import { ThemeProvider } from "./hooks/useTheme";
import User from "./layouts/user";
import NotFound from "./layouts/notFound";
import Home from "./layouts/home";
import NavMobile from "./components/ui/navMobele";
import Money from "./layouts/money";
import PersonalArea from "./layouts/personalArea";

function App() {
    return (
        <div className="containers">
            <AppLoader>
                <ThemeProvider>
                    <NavBar />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <ProtectedRouteAdmin
                            path="/lk/statistic/:statisticId?"
                            component={Statistics}
                        />
                        <Route path="/login/:type?" component={Login} />
                        <Route path="/reservations" component={Reservations} />

                        <Route path="/logout" component={LogOut} />
                        <ProtectedRouteAdmin
                            path="/lk/rental"
                            component={Rental}
                        />
                        <ProtectedRouteAdmin
                            path="/lk/money"
                            component={Money}
                        />
                        <Route path="/lk/details" component={PersonalArea} />
                        <Route path="/:userId?" component={User} />
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                    <NavMobile />
                </ThemeProvider>
            </AppLoader>
        </div>
    );
}

export default App;
