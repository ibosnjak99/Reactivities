import React from "react";
import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size='large' style={{width: '100%', marginTop: 27}}>
                <Header icon='filter' attached color='teal' content='Filter'/>
                <Menu.Item content='All activities' />
                <Menu.Item content='Going' />
                <Menu.Item content='Hosting' />
            </Menu>
            <Header/>
            <Calendar />
        </>    
    )
}