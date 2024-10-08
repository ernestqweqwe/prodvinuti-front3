import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, buttonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: buttonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: buttonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: buttonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
