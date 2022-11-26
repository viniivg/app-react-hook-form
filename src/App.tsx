import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useForm, FieldValues} from 'react-hook-form';

import Input from './TextInput';

export default function App() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  useEffect(() => {
    watch((value, {name, type}) => console.log(value, name, type));
  }, []);

  return (
    <View style={style.container}>
      <Input
        name="name"
        control={control}
        rules={{
          required: true,
          validate: {
            validate: text => parseInt(text) > 0,
          },
        }}
        error={errors.name}
        placeholder="Seu nome"
      />

      <Input
        name="password"
        control={control}
        rules={{
          minLength: 3,
        }}
        error={errors.password}
        placeholder="Sua senha"
      />

      <TouchableOpacity style={style.button} onPress={handleSubmit(onSubmit)}>
        <Text>onSubmit</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0277BD',
    marginTop: 20,
    borderRadius: 20,
  },
});
