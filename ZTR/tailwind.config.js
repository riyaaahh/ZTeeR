module.exports = {
  content: ['./**/*.html'],
    theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'], 
        gothic: ['"Gothic A1"', 'sans-serif'], // Add Gothic A1 here

      },
       
      colors:{
        'java': {
    '50': '#F0FCFC', 
    '100': '#DFF7F7', 
    '200': '#B4EDEB', 
    '300': '#8AE3E0', 
    '400': '#42CFC8', 
    '500': '#06BAB2', 
    '600': '#05A898', 
    '700': '#038C75', 
    '800': '#027057', 
    '900': '#01543A', 
    '950': '#013621'
},
'cararra': {
    '50': '#FFFFFF', 
    '100': '#FCFCFC', 
    '200': '#FAFAF7', 
    '300': '#F7F7F5', 
    '400': '#F2F2ED', 
    '500': '#EEEDE6', 
    '600': '#D6D2BA', 
    '700': '#B3A782', 
    '800': '#8F7D53', 
    '900': '#6B552F', 
    '950': '#452F13'
},

'gunsmoke': {
    '50': '#FAFAFA', 
    '100': '#F2F2F2', 
    '200': '#E0E0E0', 
    '300': '#CFCFCF', 
    '400': '#ABABAB', 
    '500': '#868686', 
    '600': '#7A6E6E', 
    '700': '#664D4D', 
    '800': '#523131', 
    '900': '#3D1C1C', 
    '950': '#260B0B'
}
      }
    },
  },
  plugins: [],
}

