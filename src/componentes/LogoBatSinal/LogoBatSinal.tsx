import React from 'react';
import {Text, Image } from 'react-native';

import { styles } from './LogoBatSinalStyle';
// Importe o GIF da pasta local
import batSinalGif from '../../../assets/imagens/batsinal.gif';


interface LogoBatSinalPropos{
  logoWidth:number
}



export function LogoBatSinal(pros : LogoBatSinalPropos) {
  return (
    <>
        <Text style={styles.title  }>
          Bat Sinal Alert
        </Text>
        <Image 
          source={batSinalGif } 
          style={[styles.batLogo, { width: pros.logoWidth, height: pros.logoWidth }]}
          resizeMode='contain'
          />
    </>
  );
}