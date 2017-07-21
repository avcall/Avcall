import {NavigationAction, NavigationScreenProp} from 'react-navigation'
import React from 'react'
import {
    View,
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

interface Props {
    navigation: NavigationScreenProp<any, NavigationAction>
}
interface State {name: string}

export default class Home extends React.Component <Props, State>{
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    Enter your name:
                </Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Lerte Smith'
                    onChangeText={(text)=> {
                        this.setState({
                            name: text
                        });
                    }}
                />
                <TouchableOpacity>
                    <Button title="Next" onPress={() => navigate('Chat',{user: 'Lerte'})}>
                    </Button>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    label: {
        marginTop: 40,
        marginLeft: 20,
        fontSize: 20
    },
    textInput: {
        height: 40,
        marginLeft: 15
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }
})