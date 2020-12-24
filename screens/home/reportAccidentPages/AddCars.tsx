import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Image, Dimensions, Platform } from 'react-native';
import Text from '../../../shared/Text';
import AutoHeightImage from 'react-native-auto-height-image';
import SafeArea from '../../../shared/SafeArea';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Icon, Divider } from 'react-native-elements';
import config from '../../../config';

class AddCars extends Component<any, any> {
    render() {
        return (
            <Fragment>
                <View style={{flex:1}} >
                {/* {true && <SafeArea backgroundColor={'transparent'}/>} */}
                <View style={styles.upperContainer}>

                    <AutoHeightImage source={require('../../../assets/addCars.png')} width={Dimensions.get('window').width} />
                    <View style={styles.textContainer}>
                        <Text h5 style={styles.text}>
                            لتقوم بالتبليغ عن الحادث بشكل صحيح يجب عليك ان تقوم بادخال بيانات المركبات واحدة تلو الاخره
                        </Text>
                    </View>
                </View>
                <Divider style={{ backgroundColor: 'blue' }} />
                <ScrollView style={{flex:1}}>

                </ScrollView>
                <View style={styles.iconContainer}>
                <Icon
                    name='plus'
                    type='feather'
                    color={config.mainColor}
                    raised
                    reverse
                    onPress={() =>this.props.navigation.navigate('selectCrashPlaces')} />
                </View>
                </View>
                <StatusBar style="dark"/>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textContainer:{
        paddingLeft:'3%',
        paddingRight:'3%',
    },
    text:{
        textAlign:'left',
    },
    upperContainer:{
        marginTop:'5%',
        height:'40%'
    },
    iconContainer:{
        position:'absolute',
        bottom:'5%',
        left:0,
        justifyContent:'center',
        width:'100%',
        flexDirection:'row'
    }
})

export default AddCars;