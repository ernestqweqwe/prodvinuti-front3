import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

import cls from './Button.module.scss';

export enum buttonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: buttonTheme;
    square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
    };

    return (
        <button type="button" className={classNames(cls.Button, mods, [className])} {...otherProps}>
            {children}
        </button>
    );
};
