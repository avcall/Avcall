import React from 'react'
import {Text} from 'react-native'
// import {GiftedChat} from 'react-native-gifted-chat'
// import Backend from '../Backend'

interface Props {name: string}
interface State {messages: string[]}

export default class Chat extends React.Component<Props, State> {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`
    })
    render() {
        return (
            <Text>
                Hello {this.props.name}
            </Text>
            // <GiftedChat
            //     messages={this.state.messages}
            //     onSend={(message)=>{
            //         Backend.sendMessage(message)
            //     }}
            //     user={{
            //         _id: 1,
            //     }}
            // />
        )
    }
    // componentDidMount() {
    //     Backend.loadMessages((message) => {
    //         this.setState((previousState) => {
    //             return {
    //                 messages: GiftedChat.append(previousState.messages, message)
    //             }
    //         })
    //     })
    // }
    // componentWillUnmount() {
    //     Backend.closeChat()
    // }
}