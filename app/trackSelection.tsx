import React from 'react';

import Menu from './components/menu';
import DefaultStyles from './components/styles/default';
import ImageStyles from './components/styles/images';

import EntityView from './components/entities';

import { Autodromo } from '../models/Autodromo';

import { View, Text } from 'react-native';

const TrackSelection = () => {
    return (
        <View style={DefaultStyles.container}>
            <View style={DefaultStyles.header}>
                <Text style={DefaultStyles.titulo}>Selecione o Autódromo</Text>
            </View>
        </View>
    )
}

export default TrackSelection;