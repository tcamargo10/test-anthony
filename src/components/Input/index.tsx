import * as S from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const Input = ({ name, label, ...rest }: IInputProps) => {
    return(
        <S.Container>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest} />
        </S.Container>
    );
}