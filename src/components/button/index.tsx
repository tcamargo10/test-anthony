import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest }: ButtonProps): React.ReactElement<ButtonProps> {
    return(
        <S.Button {...rest}>
            {children}
        </S.Button>
    );
}