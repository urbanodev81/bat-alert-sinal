import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LogoBatSinal } from '../../componentes/LogoBatSinal/LogoBatSinal';

const App = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [clothesPreference, setClothesPreference] = useState('dark');

  const handleFormSubmit = () => {
    if (name && address && phone && email && issue) {
      setModalVisible(true);
    } else {
      Alert.alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleCancel = () => {
    // Limpa os campos do formulário e oculta o formulário
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setIssue('');
    setClothesPreference('dark');
    setFormVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LogoBatSinal />
        {!formVisible && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFormVisible(true)}
          >
            <Text style={styles.buttonText}>Ativar Bat Sinal</Text>
          </TouchableOpacity>
        )}

        {formVisible && (
          <>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Digite seu nome"
            />

            <Text style={styles.label}>Endereço:</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
              placeholder="Digite seu endereço"
            />

            <Text style={styles.label}>Telefone:</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Digite seu telefone"
              keyboardType="phone-pad"
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              keyboardType="email-address"
            />

            <Text style={styles.label}>O que está acontecendo?</Text>
            <TextInput
              style={styles.textArea}
              value={issue}
              onChangeText={setIssue}
              placeholder="Descreva o problema"
              multiline
            />

            <Text style={styles.label}>Prefere roupas escuras ou coloridas?</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setClothesPreference('dark')}
              >
                <Text style={styles.radioText}>Escuras</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setClothesPreference('colorful')}
              >
                <Text style={styles.radioText}>Coloridas</Text>
              </TouchableOpacity>
            </View>

            <Button title="Enviar" onPress={handleFormSubmit} />
            <TouchableOpacity
              style={[styles.button, { marginTop: 10, backgroundColor: 'red' }]}
              onPress={handleCancel}
            >
              <Text style={styles.buttonText}>Cancelar Envio</Text>
            </TouchableOpacity>
          </>
        )}

        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Ajuda está a caminho!</Text>
              <Button title="OK" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    height: 100,
    marginBottom: 15,
    width: '100%',
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
  },
  radioButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  radioText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default App;
