import React, { SyntheticEvent, useState } from "react";
import { Button, Icon, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, Label, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/Activity";
import { useStore } from "../../../app/stores/store";

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name)
        deleteActivity(id)
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by me</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date} 
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees
            </Segment>
            <Segment clearing>
                <span>
                    {activity.description}
                    <Button onClick={() => activityStore.selectActivity(activity.id)} color='teal' floated='right' content='Details' />
                </span>
            </Segment>
        </Segment.Group>
    )
}