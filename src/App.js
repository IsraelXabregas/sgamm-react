import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Patrimonios from "./pages/Patrimonios";
import Aniversariantes from "./pages/Aniversariantes";
import Encontros from "./pages/encontros/Encontros";
import EncontrosNovo from "./pages/encontros/Novo";
import Filiados from "./pages/Filiados";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/patrimonios" component={Patrimonios} />
                        <Route path="/aniversariantes" component={Aniversariantes} />
                        <Route path="/encontros" exact component={Encontros} />
                        <Route path="/encontros/novo" component={EncontrosNovo} />
                        <Route path="/filiados" component={Filiados} />
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
