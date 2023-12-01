import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  outer: {
    marginTop:5,
    height:60,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#ffff',
    borderRadius:15,
    padding:10,
    flex: 1,
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center',

  },
  socialText:{
paddingLeft:20
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
  }
  ,  alignRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
});

export default styles;
