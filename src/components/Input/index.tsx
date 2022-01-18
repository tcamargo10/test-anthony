import * as S from './styles';

interface IInputProps {
    name: string;
    label: string;
}

export const Input = ({ name, label }: IInputProps) => {
    return(
        <S.Container>
            <label htmlFor={name}>{label}</label>
            <input id={name} />
        </S.Container>
    );
}