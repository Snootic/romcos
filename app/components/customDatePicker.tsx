import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Platform, Pressable } from 'react-native';


import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import "react-datepicker/dist/react-datepicker.css"; 
interface CustomDatePickerProps {
    selected: Date | null;
    onChange: (date: Date | null) => void;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange }) => {
    const [DatePicker, setDatePicker] = useState<any>(null);

    React.useEffect(() => {
        if (Platform.OS === 'web') {
            import("react-datepicker").then((module) => {
                setDatePicker(() => module.default);
            });
            import("react-datepicker/dist/react-datepicker.css");
        }
    }, []);

    return (
        <View style={{ width: '48%', marginBottom: 16 }}>
            <>
                {DatePicker && (
                    <DatePicker
                        selected={selected}
                        onChange={onChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecione o dia e o mês"
                        isClearable
                        customInput={
                            <TextInput
                                style={{
                                    width: '100%',
                                    paddingLeft: 10,
                                    borderRadius: 8,
                                    borderColor: '#D1D5DB',
                                    borderWidth: 1,
                                    height: 40,
                                    color: '#4A5568',
                                }}
                                placeholder="Selecione o dia e o mês"
                                placeholderTextColor="#A0AEC0"
                            />
                        }
                    />
                )}
            </>
        </View>
    );
};

export const TimePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange }) => {
    const [DatePicker, setDatePicker] = useState<any>(null);

    React.useEffect(() => {
        if (Platform.OS === 'web') {
            import("react-datepicker").then((module) => {
                setDatePicker(() => module.default);
            });
            import("react-datepicker/dist/react-datepicker.css");
        }
    }, []);
    
    return (
        <View style={{ width: '48%', marginBottom: 16 }}>
            <>
                {DatePicker && (
                    <DatePicker
                    selected={selected}
                    onChange={onChange}
                    dateFormat="HH:mm"
                    showTimeSelect={true}
                    showTimeSelectOnly={true}
                    timeIntervals={15}
                    placeholderText="Selecione o horário"
                    isClearable
                    customInput={
                    <TextInput
                        style={{
                            width: '100%',
                            paddingLeft: 10,
                            borderRadius: 8,
                            borderColor: '#D1D5DB',
                            borderWidth: 1,
                            height: 40,
                            color: '#4A5568',
                        }}
                        placeholder="Selecione o horário"
                        placeholderTextColor="#A0AEC0"
                    />
                    }
                />
                )
            }
            </>
        </View>
    );
}

const NativeDatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
  
    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
      if (selectedDate) {
        const currentDate = selectedDate;
        setDate(currentDate);
      }
      setShow(false);
    };

    const picker = () => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: date,
                onChange: onChange,
                mode: 'date',
                is24Hour: true,
            });
        } else {
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        }
    }
    

    return (
        <Pressable onPress={picker} style={{ width: '48%', marginVertical: 16 }}>
            <TextInput
            style={styles.pickerInput}
            value={date.toLocaleDateString()}
            editable={false} 
            />
        </Pressable>
    );
}

const NativeTimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
  
    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
      if (selectedDate) {
        const currentDate = selectedDate;
        setDate(currentDate);
      }
      setShow(false);
    };

    const picker = () => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: date,
                onChange: onChange,
                mode: 'time',
                is24Hour: true,
                display: 'spinner'
            });
        } else {
            {show && (
                <DateTimePicker
                value={date}
                mode={'time'}
                is24Hour={true}
                onChange={onChange}
                display='spinner'
                />
            )}
        }
    }

    return (
        <Pressable onPress={picker} style={{ width: '48%', marginVertical: 16 }}>
            <TextInput
            style={styles.pickerInput}
            value={`${date.getHours().toString()}:${date.getMinutes().toString()}`}
            editable={false} 
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pickerInput: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        padding: 2,
        paddingHorizontal: 10,
    }

})

export { NativeDatePicker, NativeTimePicker };