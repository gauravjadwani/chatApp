import React, { Component } from 'react';
// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import {MessageBox} from 'react-chat-elements';

import { ChatItem } from 'react-chat-elements'
import { SystemMessage } from 'react-chat-elements'

import { SideBar } from 'react-chat-elements'
import { Navbar } from 'react-chat-elements'
import { Avatar } from 'react-chat-elements'




    import { MessageList } from 'react-chat-elements';
            import { Input } from 'react-chat-elements';
            import { Button } from 'react-chat-elements'

            import { Dropdown } from 'react-chat-elements'

class Test extends Component {
  render() {
    return (
<div>
  <ChatItem
      avatar={'https://facebook.github.io/react/img/logo.svg'}
      alt={'Reactjs'}
      title={'Facebook'}
      subtitle={'What are you doing?'}
      date={new Date()}
      unread={0} />

      <MessageBox
    position={'left'}
    type={'photo'}
    text={'react.svg'}
    data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
            click: false,
            loading: 0,
        }
    }}/>


<SystemMessage
    text={'End of conversation'}/>


    <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
            {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            },
            {
                position: 'left',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
            }

        ]} />



<Input
    placeholder="Type here..."
    multiline={true}
    buttons={
        <Button
            color='blue'
            backgroundColor='black'
            text='Send'/>
    }/>

// clear text eg:
<Input
    ref='input'
    placeholder="Type here..."/>


<Button
    text={'click me!'} />

this.refs.input.clear();

<SideBar
    top={
        <div>'TOP' area</div>
    }
    center={
        <div>'CENTER' area</div>
    }
    bottom={
        <div>'BOTTOM' area</div>
    }/>


    <Navbar
    top={
        <div>'TOP' area</div>
    }
    center={
        <div>'CENTER' area</div>
    }
    bottom={
        <div>'BOTTOM' area</div>
    }/>


    <Dropdown
        buttonProps={{
            text: 'Dropdown',
        }}
        items={[
            'merhaba',
            'lorem',
            'ipsum',
            'dolor',
            'sit',
            'amet',
        ]}/>

        <Avatar
    src={'https://facebook.github.io/react/img/logo.svg'}
    alt={'logo'}
    size="large"
    type="circle flexible"/>
    </div>
  );
}
}

export default Test;
