import { ContainerSub, InputText } from "./StyleInput";

export function Input({
    placeholder,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength,
    editable
}) {
    return (
        <InputText
            editable={editable}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}

export function InputHigh({
    placeholder,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength,
    editable, 
    multiline = true
}) {
    return (
        <ContainerSub
            multiline= {multiline}
            editable={editable}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}