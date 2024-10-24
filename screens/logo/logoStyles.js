import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b7e1f9',
      },
      blackhead: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 375,
        left: 202,
        
      },
      nodule: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 397,
        left: 157,
      },
      pustule: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 349,
        left: 143,

      },
      papule: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 401,
        left: 188,
      },
      whitehead: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 343,
        left: 175,
      },
      name: {
        fontFamily: 'NettoBlack',
        textAlign: 'center',
        top: 106,
        fontSize: 30,
      },
      nameDes: {
        fontFamily: 'NettoBold',
        textAlign: 'center',
        top: 110,
        fontSize: 25,
      }
});

export default styles;
