import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Types(props) {
  let textoAMostrar = '';
  let estiloTexto = {}; // Declarar un objeto de estilo vacío por defecto

  switch (props.type1) {
    case 'dragon':
      textoAMostrar = 'DRAGON';
      estiloTexto = styles.dragonText;
      break;
    case 'ghost':
      textoAMostrar = 'GHOST';
      estiloTexto = styles.ghostText;
      break;
    case 'ground':
      textoAMostrar = 'GROUND';
      estiloTexto = styles.groundText;
      break;
    case 'psychic':
      textoAMostrar = 'PSYCHIC';
      estiloTexto = styles.psychicText;
      break;
    case 'poison':
      textoAMostrar = 'POISON';
      estiloTexto = styles.poisonText;
      break;
    case 'electric':
      textoAMostrar = 'ELECTRIC';
      estiloTexto = styles.electricText;
      break;
    case 'water':
      textoAMostrar = 'WATER';
      estiloTexto = styles.waterText;
      break;
    case 'fire':
      textoAMostrar = 'FIRE';
      estiloTexto = styles.fireText;
      break;
    case 'normal':
      textoAMostrar = 'NORMAL';
      estiloTexto = styles.normalText;
      break;
    case 'flying':
      textoAMostrar = 'FLYING';
      estiloTexto = styles.flyingText;
      break;
    case 'ice':
      textoAMostrar = 'ICE';
      estiloTexto = styles.iceText;
      break;
    case 'rock':
      textoAMostrar = 'ROCK';
      estiloTexto = styles.rockText;
      break;
    case 'steel':
      textoAMostrar = 'STEEL';
      estiloTexto = styles.steelText;
      break;
    case 'fighting':
      textoAMostrar = 'FIGHTING';
      estiloTexto = styles.fightingText;
      break;
    case 'fairy':
      textoAMostrar = 'FAIRY';
      estiloTexto = styles.fairyText;
      break;
    case 'grass':
      textoAMostrar = 'GRASS';
      estiloTexto = styles.plantText;
      break;
    case 'bug':
      textoAMostrar = 'BUG';
      estiloTexto = styles.bugText;
      break;
    case 'dark':
      textoAMostrar = 'DARK';
      estiloTexto = styles.darkText;
      break;
    default:
      textoAMostrar = '';
  }

  return (
    <View >
      <Text style={estiloTexto}>{textoAMostrar}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dragonText: {
    color: 'white', 
    backgroundColor: '#470EB3',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  ghostText: {
    color: 'white', 
    backgroundColor: '#B413FF',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  groundText: {
    color: 'white', 
    backgroundColor: '#EAD02E',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  psychicText: {
    color: 'white', 
    backgroundColor: '#FF56FA',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  poisonText: {
    color: 'white', 
    backgroundColor: '#7B20BB',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  electricText: {
    color: 'black', 
    backgroundColor: '#FFFF51',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  waterText: {
    color: 'white', 
    backgroundColor: '#35B2FF',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  fireText: {
    color: 'white', 
    backgroundColor: '#FE221A',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  normalText: {
    color: 'black', 
    backgroundColor: '#F7F6C9',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  flyingText: {
    color: 'black', 
    backgroundColor: '#59FFFF',
    paddingHorizontal: 50,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  iceText: {
    color: 'black', 
    backgroundColor: '#B0FFFF',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  rockText: {
    color: 'white', 
    backgroundColor: '#846334',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  steelText: {
    color: 'white', 
    backgroundColor: '#C7C7C7',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  fightingText: {
    color: 'white', 
    backgroundColor: '#EB704F',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  fairyText: {
    color: 'white', 
    backgroundColor: '#FFAEF2',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  plantText: {
    color: 'white', 
    backgroundColor: '#79FF64',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  bugText: {
    color: 'white', 
    backgroundColor: '#5EC83C',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  darkText: {
    color: 'white', 
    backgroundColor: '#323232',
    paddingHorizontal: 55,
    paddingVertical: 3,
    fontWeight: 'bold'
  }
});

export default Types;