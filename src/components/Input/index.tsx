import * as S from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    error: boolean;
}

export const Input = ({ name, label, error, ...rest }: IInputProps) => {
    return(
        <S.Container>
            <div className="label-area">
                <label htmlFor={name}>{label}</label>
                {error && <span>Required</span>}
            </div>
            <input id={name} {...rest} />
        </S.Container>
    );
}