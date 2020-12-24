import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import config from '../../../config';
import {View as A_View} from 'react-native-animatable';
export default class carSelectComponent extends Component<any,any> {
    state={
        points:[]
    }
    render() {
        return (
            <View style={styles.conatainer}>
                <TouchableWithoutFeedback  style={styles.conatainer} onPress={(event)=>{
                    let x = event.nativeEvent.locationX;
                    let y = event.nativeEvent.locationY;
                    if(!event.isTrusted)
                    console.log(x,y)
                    let cancel:any = this.state.points.find((point:any)=>{
                        return point.inRange(true, x-(getPointDim()), x+(getPointDim()) ) && point.inRange(false, y-(getPointDim()), y+(getPointDim()) )
                    });
                    console.log(cancel);
                    cancel = cancel || (x <50 && y <50);
                    if(cancel){ console.log(cancel);
                        return;}
                    
                    (this.state.points as any).push({
                        locationX:x,
                        locationY:y,
                        ID:Date.now(),
                        inRange:function(isX:boolean, first:number, last:number){
                            return (first < (isX?this.locationX:this.locationY)) && ((isX?this.locationX:this.locationY) < last);
                        }
                    });

                    this.setState({...this.state});
                }}>
                    <View  style={styles.conatainer}>
                    <Image 
                        source={require('../../../assets/carTopView.png')} 
                        style={styles.carImage}   
                        resizeMode={"contain"}
                    />
                    <View style={styles.pointsContainer}>
                       {this.state.points.map((point:any)=>{
                           return ( <A_View animation={'bounceIn'} key={point.ID} style={{...styles.point,top:point.locationY-(getPointDim()/2), right:point.locationX-(getPointDim()/2)}}>
                                        <TouchableOpacity style={styles.btnInnterContainer} onPress={(event)=>{
                                            event.stopPropagation();
                                            event.preventDefault()
                                            this.state.points = this.state.points.filter((p:any)=>p.ID!=point.ID);
                                            this.setState({...this.state})
                                        }}>
                                        <Icon
                                        name='x'
                                        type='feather'
                                        color={'#fff'}/>
                                        </TouchableOpacity>
                                    </A_View>)
                       })}
                    </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const getPointDim=()=>{
    return Dimensions.get('window').width*0.12;
}
const styles = StyleSheet.create({

    conatainer:{
        height: Dimensions.get('window').height * 0.65,
        width: Dimensions.get('window').width,
        marginBottom: 30
    },
    carImage:{
        height:'100%',
        width:'100%'
    },
    pointsContainer:{
        position:'absolute',
        height:'100%',
        width:'100%'
    },
    point:{
        height: getPointDim(),
        width: getPointDim(),
        backgroundColor:config.mainColorDarken,
        position:'absolute',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',

    },
    btnInnterContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
