import React from "react";
import io from "socket.io-client";
import 'react-chat-elements/dist/main.css';
import {MessageList} from 'react-chat-elements';
  import { Input,Button } from 'react-chat-elements';


class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:8080');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">


                                {this.state.messages.map(message => {
                                    return (
                                <MessageList
                                    className='message-list'
                                    lockable={true}
                                    toBottomHeight={'100%'}
                                    dataSource={[
                                        {
                                            position: 'right',
                                            type: 'text',
                                            text: message.message,
                                            date: new Date(),
                                        }
                                    ]} />
                                  );
                                })}

                            </div>
                            <div className="card-footer">

                                <Input
                                    ref='input'
                                    placeholder="Type here..."
                                    value={this.state.message}
                                    onChange={ev => this.setState({message: ev.target.value})}
                                    />
                                <Button
                                    text={'click me!'}
                                    onClick={this.sendMessage}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default Chat;
