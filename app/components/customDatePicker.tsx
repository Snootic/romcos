import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { View, TextInput } from 'react-native';

interface CustomDatePickerProps {
    selected: Date | null;
    onChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange }) => {

    return (
    <View style={{ width: '50%', marginBottom: 16 }}>
        <>
            <DatePicker
                selected={selected}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Selecione o dia e o mês"
                isClearable
                // wrapperClassName="date-picker"
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
        </>
    </View>
    );
};

const TimePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange }) => {
    return (
        <View style={{ width: '50%', marginBottom: 16 }}>
            <>
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
            </>
        </View>
    );
}
export { CustomDatePicker, TimePicker };