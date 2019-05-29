import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';

import Task from './Task';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: [],
      taskText: '',
      currentDate: new Date(),
      markedDate: moment(new Date()).format('MM-DD')
    };
  }

  render() {
    const today = this.state.currentDate;
    const day = moment(today).format('dddd,');
    const date = moment(today).format('MMMM D');

    let task = this.state.taskArray.map((val, key) => {
      return (
        <Task
          key={key}
          keyval={key}
          val={val}
          deleteTask={() => this.deleteTask(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.headerDay}>{day}</Text>
          <Text style={styles.headerDate}>{date}</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{task}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder='New task...'
            underlineColorAndroid='transparent'
            onChangeText={taskText => this.setState({ taskText })}
            value={this.state.taskText}
          />
        </View>
        <TouchableOpacity
          onPress={this.addTask.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addTask() {
    if (this.state.taskText) {
      var d = new Date();
      this.state.taskArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        task: this.state.taskText
      });
      this.setState({ taskArray: this.state.taskArray });
      this.setState({ taskText: '' });
    }
  }
  deleteTask(key) {
    this.state.taskArray.splice(key, 1);
    this.setState({ taskArray: this.state.taskArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  headerDay: {
    color: '#cb4042',
    fontSize: 25,
    fontWeight: '500',
    paddingRight: 5,
    marginLeft: 20,
    marginTop: 20
  },
  headerDate: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    paddingLeft: 10,
    marginTop: 20
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: 'black',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30
  }
});
