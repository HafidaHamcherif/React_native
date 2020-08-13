import React from 'react';
import{View,Text,StyleSheet,ScrollView,Image,Button,Alert,Vibration,} from 'react-native';
import Box from './component/Box';

class App extends React.Component{
  render(){
    return(
      <ScrollView style={style.container}>
        <View>
          <Text style={style.text}>hello</Text>
          <Text style={style.textcenter}>hello</Text>
          <Text style={style.textbold}>hello</Text>
          <Image source = {require('./assets/konexio-logo_1.png')}/>
          <Image 
            source={{url:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}
            style={{width:100,height:30}}
          />
          <Button
            title='click'
            onPress={()=>Alert.alert('simple ok')}
          />
          <Button
            title='click'
            onPress={()=>Vibration.vibrate(10)}
          />
          <Box/>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container:{
    paddingTop:70,
    backgroundColor:'pink'
  },
  text:{
    fontSize:30,
  },
  textcenter:{
    marginTop:80,
    marginBottom:80,
    textAlign:'center',
  },
  textbold:{
    marginTop:80,
    marginBottom:80,
    fontWeight:'bold'
  },
});

export default App;


