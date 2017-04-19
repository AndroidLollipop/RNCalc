'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import SettingsList from 'react-native-settings-list';

GLOBAL = require('./Globals');

export default class NewSettings extends Component {
  constructor(props){
    super(props);
    //this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      RCSwitchOn: GLOBAL.RSCP,
      SFSwitchOn: GLOBAL.SFO,
      AMSwitchOn: GLOBAL.STRICT,
      MDSwitchOn: GLOBAL.MDP,
      RSSwitchOn: GLOBAL.RSTOE,
      RISwitchOn: GLOBAL.RSTOI,
      DESwitchOn: GLOBAL.DEDUP
    }
  }
  render() {
    var bgColor = '#DCE3F4';
    return (
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
          <View>
            <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
          </View>
        </View>
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
            {/*<SettingsList.Header headerStyle={{marginTop:15}}/>
            {this.state.toggleAuthView ?
              <SettingsList.Item
                title='Logged In As...'
                hasNavArrow={false}
              />
              :
              <SettingsList.Item
                isAuth={true}
                authPropsUser={{placeholder:'E-mail'}}
                authPropsPW={{placeholder:'Password'}}
                onPress={() => this.toggleAuthView()}
              />
            }*/}
{/*
        <View style={Style.inputButton}>
          <Text style={Style.inputButtonText}>Clear expression on eval</Text>
          <Switch
            onValueChange={(value) => {GLOBAL.RSTOE=value; this.setState({RSSwitchOn: value})}}
            value={this.state.RSSwitchOn} />
        </View>
        <View style={Style.inputButton}>
          <Text style={Style.inputButtonText}>Clear expression on input</Text>
          <Switch
            onValueChange={(value) => {GLOBAL.RSTOI=value; this.setState({RISwitchOn: value})}}
            value={this.state.RISwitchOn} />
        </View>
        <View style={Style.inputButton}>
          <Text style={Style.inputButtonText}>Deduplicate history</Text>
          <Switch
            onValueChange={(value) => {GLOBAL.DEDUP=value; this.setState({DESwitchOn: value})}}
            value={this.state.DESwitchOn} />
        </View>
        <View style={Style.inputButton}>
          <Text style={Style.inputButtonText}>Strict mode</Text>
          <Switch
            onValueChange={(value) => {GLOBAL.STRICT=value; this.setState({AMSwitchOn: value})}}
            value={this.state.AMSwitchOn} />
        </View>
        <View style={Style.inputButton}>
          <Text style={Style.inputButtonText}>Limit dp</Text>
          <Switch
            onValueChange={(value) => {GLOBAL.MDP=value; this.setState({MDSwitchOn: value})}}
            value={this.state.MDSwitchOn} />
        </View>
        <View style={Style.inputButton}>
          <Text style={Style.inputButtonText}>Display all answers to Sf</Text>
          <Switch
            onValueChange={(value) => {GLOBAL.SFO=value; this.setState({SFSwitchOn: value})}}
            value={this.state.SFSwitchOn} />
        </View>
        <View style={Style.inputButton}>
          <Text style={Style.inputButtonText}>Precision</Text>
        </View>
        <View>
          <Slider 
            maximumValue={10}
            minimumValue={2} 
            step={1} 
            value={GLOBAL.SF}
            onSlidingComplete={(value) => {GLOBAL.SF=value}}
            />
        </View>
 */} 
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.RSSwitchOn}
              switchOnValueChange={(value) => {GLOBAL.RSTOE=value; this.setState({RSSwitchOn: value})}}
              hasNavArrow={false}
              title='Clear expression on eval'
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.RISwitchOn}
              switchOnValueChange={(value) => {GLOBAL.RSTOI=value; this.setState({RISwitchOn: value})}}
              hasNavArrow={false}
              title='Clear expression on input'
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.DESwitchOn}
              switchOnValueChange={(value) => {GLOBAL.DEDUP=value; this.setState({DESwitchOn: value})}}
              hasNavArrow={false}
              title='Deduplicate history'
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.AMSwitchOn}
              switchOnValueChange={(value) => {GLOBAL.STRICT=value; this.setState({AMSwitchOn: value})}}
              hasNavArrow={false}
              title='Strict mode'
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.MDSwitchOn}
              switchOnValueChange={(value) => {GLOBAL.MDP=value; this.setState({MDSwitchOn: value})}}
              hasNavArrow={false}
              title='Limit dp'
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.SFSwitchOn}
              switchOnValueChange={(value) => {GLOBAL.SFO=value; this.setState({SFSwitchOn: value})}}
              hasNavArrow={false}
              title='Display all answers to Sf'
            />
            {/*
            <SettingsList.Item
              title='Wi-Fi'
              titleInfo='Bill Wi The Science Fi'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert('Route to Wifi Page')}
            />
            <SettingsList.Item
              title='Blutooth'
              titleInfo='Off'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert('Route to Blutooth Page')}
            />
            <SettingsList.Item
              title='Cellular'
              onPress={() => Alert.alert('Route To Cellular Page')}
            />
            <SettingsList.Item
              title='Personal Hotspot'
              titleInfo='Off'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert('Route To Hotspot Page')}
            />
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item
              title='Notifications'
              onPress={() => Alert.alert('Route To Notifications Page')}
            />
            <SettingsList.Item
              title='Control Center'
              onPress={() => Alert.alert('Route To Control Center Page')}
            />
            <SettingsList.Item
              title='Do Not Disturb'
              onPress={() => Alert.alert('Route To Do Not Disturb Page')}
            />
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item
              title='General'
              onPress={() => Alert.alert('Route To General Page')}
            />
            <SettingsList.Item
              title='Display & Brightness'
              onPress={() => Alert.alert('Route To Display Page')}
            />
            */}
          </SettingsList>
        </View>
      </View>
    );
  }
  /*
  toggleAuthView() {
    this.setState({toggleAuthView: !this.state.toggleAuthView});
  }
  onValueChange(value){
    this.setState({switchValue: value});
  }
  */
}

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    alignSelf:'center',
    height:30,
    width:30
  },
  titleInfoStyle:{
    fontSize:16,
    color: '#8e8e93'
  }
});
