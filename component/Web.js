import React from 'react';
import{View,Text,StyleSheet,WebView} from 'react-native';


class Web extends React.Component{

    render(){
        return(
            <WebView
                source={{
                    uri:'https://www.konexio.eu/index.html'
                }}
            />
        );
    }
}

export default Web;