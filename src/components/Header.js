import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';

export default class Header extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" className="mb-3">
                    <NavbarBrand tag={RRNavLink} to="/dashboard" activeClassName={'active'}>SGAMM</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/dashboard"
                                         activeClassName="active">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/filiados"
                                         activeClassName="active">Filiados</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/encontros"
                                         activeClassName="active">Encontros</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/patrimonios"
                                         activeClassName="active">Patrimônios</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/aniversariantes"
                                         activeClassName="active">Aniversariantes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/mensalidades"
                                         activeClassName="active">Mensalidades</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/caixa"
                                         activeClassName="active">Caixa</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/usuarios"
                                         activeClassName="active">Usuários do Sistema</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/meuacesso"
                                         activeClassName="active">Alterar Meu Acesso</NavLink>
                            </NavItem>
                            {/*<UncontrolledDropdown nav inNavbar>*/}
                            {/*<DropdownToggle nav caret>*/}
                            {/*Options*/}
                            {/*</DropdownToggle>*/}
                            {/*<DropdownMenu right>*/}
                            {/*<DropdownItem>*/}
                            {/*Option 1*/}
                            {/*</DropdownItem>*/}
                            {/*<DropdownItem>*/}
                            {/*Option 2*/}
                            {/*</DropdownItem>*/}
                            {/*<DropdownItem divider/>*/}
                            {/*<DropdownItem>*/}
                            {/*Reset*/}
                            {/*</DropdownItem>*/}
                            {/*</DropdownMenu>*/}
                            {/*</UncontrolledDropdown>*/}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}