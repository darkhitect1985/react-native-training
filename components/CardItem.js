import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const CardItem = (props) => {
return(
  <Card style={styles.surface} >
    <Card.Title title={props.title} subtitle={props.description} left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: props.image }} />
    <Card.Actions style={styles.buttons} >
      <Button>Cancel</Button>
      <Button onPress={props.onSelectProduct}>Ok</Button>
    </Card.Actions>
  </Card>
)};



export default CardItem;

const styles = StyleSheet.create({
    surface: {
      elevation: 4,
      margin:5
    },
    buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    },
  });