import React from 'react';
import { Text } from 'react-native-elements';
export default ((props:any) => <Text raised {...props} style={{fontFamily:props.bold?'custom-bold':'custom-regular', ...(props.style || {})}}/>)
