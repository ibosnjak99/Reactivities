import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

export default observer (function HomePage() {
    const {userStore, modalStore} = useStore();
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Homepage</h1>
            {userStore.isLoggedIn ? (
                <>
                    <h2>Welcome</h2>
                    <Button as={Link} to='/activities' size='huge' inverted > Activities </Button>
                </>
            ) : (
                <>
                    <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted > Login </Button>
                    <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted > Register </Button>
                </>
            )}
        </Container>
    )
})