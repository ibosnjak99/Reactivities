import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";
import "../styles/HomePage.css";

export default observer (function HomePage() {
    const {userStore, modalStore} = useStore();
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Homepage</h1>
            {userStore.isLoggedIn ? (
                <>
                    <div className="buttons">
                        <Button as={Link} to='/activities' style={{ color: "white", background: "silver", fontSize: 20 }} > Activities </Button>
                    </div>
                </>
            ) : (
                <>
                    <div className="buttons">
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} style={{ color: "white", background: "silver", fontSize: 16 }}> Login </Button>
                        <Button onClick={() => modalStore.openModal(<RegisterForm />)} style={{ color: "white", background: "silver", fontSize: 16, marginLeft: 40 }}> Register </Button>
                    </div>
                </>
            )}
        </Container>
    )
})