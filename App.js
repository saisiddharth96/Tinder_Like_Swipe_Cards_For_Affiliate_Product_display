import React from 'react';
import { StyleSheet, Text, View,PanResponder,Linking} from 'react-native';
import Deck from './src/Deck';
import {Card,Button} from 'react-native-elements';


const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://images-na.ssl-images-amazon.com/images/I/61DwSviDYzL._SL1101_.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {

  renderCard(item){
    return(
      <Card
          key = {item.id}
          title = {item.text}
          image = {{uri : item.uri}}>
        <Text style = {{marginBottom : 10}}>
          Customized!!!!
        </Text>
        <Button
          onPress = {()=> Linking.openURL(item.uri)}
          backgroundColor = "#03A9F4"
          title = "Buy Now"/>
      </Card>
    );
  }

  renderNoMoreCards(){
    return(
      <Card
          title = "No more deals. Come back after Sometime">
          <Text style = {{marginBottom : 10}}>
            Click to get more deals!
          </Text>
          <Button
            backgroundColor = "#03A9F4"
            title = "Get more deals"/>
      </Card>
    );
  } 

  render() {
    return (
      <View>        
        <Deck
        renderNoMoreCards = {this.renderNoMoreCards}
        data= {DATA}
        renderCard = {this.renderCard}
        />  
      </View>
    );
  }
}