import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import config from '../../config';
import { StatusBarHeight } from '../../modules/utils';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
class appTourSwiper extends Component<any,any> {

    render() {
        return (
            <View style={styles.upperLevelContainer}>
                <View style={styles.safeArea}>
                </View>
                <Swiper 
                loop={false}
                containerStyle={styles.wrapper} 
                onIndexChanged={(index)=>this.props.activeSlide(index)}
                showsPagination={false}>
                    <View style={styles.slideContainer}>
                        <View style={styles.upperSliderHalf}>

                        </View>
                        <View style={styles.secondHalf}>
                            <Text h3 bold style={styles.text}>
                                كروكتك جاهزة ببضع خطوات بسيطة
                            </Text>
                            <Text  h5 style={{...styles.text, ...styles.smallText}}>
                            عند وقوع اي حادث سير بسيط يمكنك البدآ بفتح التطبيق والابلاغ عن الحادث عن طريق ادخال بيانات المركبات٫ التقاط بعض الصور ويتنهى الامر بوصول تقرير الكروكا لكلا الطرفين
                            </Text>
                        </View>

                    </View>
                    <View style={styles.slideContainer}>
                    <View style={styles.upperSliderHalf}>

                    </View>
                    <View style={styles.secondHalf}>
                        <Text h3 bold style={styles.text}>
                        تعبئة البيانات والتقاط صور لبعض الوثائق

                        </Text>
                        <Text  h5 style={{...styles.text, ...styles.smallText}}>
                        لكي تكمل العملية يجب عليك القيام بتعبئة بيانات اساسية عن الحادث واطرافة مع التقاط صور مجموعة من الوثائق مثل رخصة القياده ورحصة السياره وايضا صور للمركبات المتضرره 
                        </Text>
                    </View>
                    </View>
                    <View style={styles.slideContainer}>
                    <View style={styles.upperSliderHalf}>

                    </View>
                    <View style={styles.secondHalf}>
                        <Text h3 bold style={styles.text}>
                            انتظر وصول تقرير الكروكا برسالة
                        </Text>
                        <Text  h5 style={{...styles.text, ...styles.smallText}}>
                            بعد تقديم البيانات والصور المطلوبة يتبقى عليك فقط الانتظار ليتم مراجعتها وبعدها فورا سيتم ارسال تقرير الكوركا برسالة لكل اطراف الحادث
                        </Text>
                        <Button onPress={()=>{
                            this.props.navigate();
                        }} title={"إذهب للتطبيق"} buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle} containerStyle={styles.buttuonContainerStyle}/>
                    </View>                  
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    upperLevelContainer:{
        flex:1
    },
    slideContainer:{
        flex:1
    },
    wrapper: {
        direction:'rtl',
        flexDirection:'row-reverse',
        flex:1
    },
    safeArea:{
        width:'100%',
        height:StatusBarHeight,
        backgroundColor: config.mainColor,
    },
    upperSliderHalf:{
        height:'50%',
        backgroundColor:'rgba(0,0,0,0.1)',
        width:'100%'
    },
    secondHalf:{
        height:'50%',
        width:'100%',
        padding:'3%',
        alignItems:'center'
    },
    text:{
        color:'white',
        textAlign:'center'
    },
    smallText:{
        marginTop:'4%'
    },
    buttonStyle:{
        backgroundColor:'white'
    },
    titleStyle:{
        color:config.mainColor
    },
    buttuonContainerStyle:{
        position:'absolute',
        bottom:'10%',

    }
})
export default appTourSwiper;