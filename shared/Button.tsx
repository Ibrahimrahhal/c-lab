import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { Component } from 'react';
import { Button as ButtonC} from 'react-native-elements';
class Button extends Component<any,any> {
    render() {
        return (
            <ButtonC  {...this.props} />
        );
    }
}

export default Button;

