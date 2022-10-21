import React from "react";
import { Menu, Container, Button, Image, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer (function NavBar() {
    const {userStore: {user, logout}} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: 10}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities'/>
                <Menu.Item as={NavLink} to='/errors' name='Errors'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image src='/assets/user.png' avatar spaced='right' />
                    <Dropdown pointing='top left'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='My profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' as={NavLink} to='/' /> 
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})