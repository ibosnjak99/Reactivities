import React from "react";
import { Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, Segment, Button, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity"

interface Props {
    activities: Activity[];
}

export default function ActivityList({activities}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as='a'>{activity.title}</ItemHeader>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.venue}, {activity.city}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button floated='right' content='view' color='blue'/>
                                <Label basic content={activity.category}/>
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))};
            </Item.Group>
        </Segment>
    )
}