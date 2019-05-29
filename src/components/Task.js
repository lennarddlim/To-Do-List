import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Task extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.task}>
        <Text style={styles.noteTask}>{this.props.val.task}</Text>
        <Text style={styles.noteDate}>{this.props.val.date}</Text>

        <TouchableOpacity
          onPress={this.props.deleteTask}
          style={styles.deleteTask}
        >
          <Text style={styles.noteDeleteTask}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    position: 'relative',
    margin: 10,
    padding: 20,
    paddingRight: 100,
    borderWidth: 2,
    borderColor: '#ededed',
    borderRadius: 20
  },
  noteTask: {
    fontSize: 15,
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#8a6bbe'
  },
  noteDate: {
    fontSize: 12,
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#8a6bbe'
  },
  deleteTask: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 70,
    borderRadius: 20,
    backgroundColor: '#8a6bbe',
    padding: 10,
    top: 20,
    bottom: 10,
    right: 10
  },
  noteDeleteTask: {
    color: '#fff',
    fontWeight: '700'
  }
});
