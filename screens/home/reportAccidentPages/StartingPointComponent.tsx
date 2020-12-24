import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddCars from './AddCars';
import { Accident } from '../../../models/accident';
import SelectCrashPlaces from './SelectCrashPlaces';
import { Car } from '../../../models/car';
import TakePicturesOfCar from './takePicturesOfCar';
import ScanDocs from './scanDocs/ScanDocs';
const Stack = createStackNavigator();

class StartingPointComponent extends Component {
    state:{
        accident?:Accident,
        activeCar?:Car
    } = {};

    componentDidMount(){
        this.state.accident = new Accident();
        this.setState(this.state);
    }

    render() {
        return (
            <Stack.Navigator initialRouteName={"scanDocs"} mode={'modal'} screenOptions={{
                gestureDirection: 'vertical'
            }} >
                <Stack.Screen name={'addCars'} options={{
                    // headerShown:false,
                    headerTitle:"المركبات المتضمنة بالحادث",
                    title:"المركبات المتضمنة بالحادث",
                    headerTitleStyle:{
                        fontFamily:'custom-bold',
                        textAlign:'left'
                    },
                    headerTitleAlign:'center'

                }}>
                    {(props)=>{
                       return ( <AddCars {...props} cars={this.state && this.state.accident && this.state.accident.getCars()}/> )
                    }}
                </Stack.Screen>
                <Stack.Screen name={'selectCrashPlaces'} options={{
                    // headerShown:false,
                    headerTitle:"اختيار مكان اصابة مكان المركبة",
                    title:"اختيار مكان اصابة مكان المركبة",
                    headerTitleStyle:{
                        fontFamily:'custom-bold',
                        textAlign:'left'
                    },
                    headerStyle:{
                        direction:'rtl'
                    }

                }}>
                    {(props)=>{
                        return <SelectCrashPlaces {...props} activeCar={this.state && this.state.activeCar}/>
                    }}
                </Stack.Screen>
                <Stack.Screen name={'takePicturesOfCar'} options={{
                    // headerShown:false,
                    headerTitle:"اختيار مكان اصابة مكان المركبة",
                    title:"اختيار مكان اصابة مكان المركبة",
                    headerTitleStyle:{
                        fontFamily:'custom-bold',
                        textAlign:'left'
                    },
                    headerStyle:{
                        direction:'rtl'
                    }

                }}>
                    {(props)=>{
                        return <TakePicturesOfCar {...props} activeCar={this.state && this.state.activeCar}/>
                    }}
                </Stack.Screen>
                <Stack.Screen name={'scanDocs'} options={{
                    // headerShown:false,
                    headerTitle:"مسح الوثائق المطلوبة",
                    title:"مسح الوثائق المطلوبة",
                    headerTitleStyle:{
                        fontFamily:'custom-bold',
                        textAlign:'left'
                    },
                    headerStyle:{
                        direction:'rtl'
                    }

                }}>
                    {(props)=>{
                        return <ScanDocs {...props} activeCar={this.state && this.state.activeCar}/>
                    }}
                </Stack.Screen>
            </Stack.Navigator>
        );
    }
}

export default StartingPointComponent;