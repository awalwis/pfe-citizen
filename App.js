import { StatusBar } from 'expo-status-bar';
import React, {userState, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const UserList=({ users})=>(
  <View >
    {users.map(user => <Text key={user.id}>{user.content}</Text>)}
  </View>
)
const CreateNew = (props) => {
  const [content, setContent] = useState('')

  const contentInputHandler = (enteredText)=>{
    setContent(enteredText)
  }
  const handleSubmit = () => {
    
    props.addNew({
      content,
    })
  }
    return (
      <View>
        <TextInput placeholder = "effet"
                  style={styles.input}

                  onChangeText={contentInputHandler}
                  value={content}/>
                  
        <Button title = "+"
    onPress = {handleSubmit}/>
      </View>
    )
    
   
}
export default function App() {
  const [users, setUsers] = useState([
    {
      content : "test",
      id :'1'
    },
    {
      content: "test",
      id:'2'
    }
  ])
  const addNew = (user) => {
    user.id = (Math.random() * 10000).toFixed(0)
    setUsers(users.concat(user))
  }  
  return (
    <View style={styles.container}>
      <CreateNew addNew={addNew}/>
      <UserList users={users}></UserList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor:"black", 
    borderWidth:1 , 
    padding :20,
     
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    bottom:20
  },
});