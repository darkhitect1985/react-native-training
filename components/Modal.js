import * as React from 'react';
import { Modal, Portal, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';



const MyModal = props => {
    return (
         <Portal>
           <Modal visible={props.visible} onDismiss={props.hideModal}>
                <Text style={styles.modalCard} >Example Modal</Text>
           </Modal>
         </Portal>
    );
};

export default MyModal;


const styles = StyleSheet.create({
    modalCard: {
      height: 500,
      width:300,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'stretch',
      margin:'auto',
    },
  
  });