import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {
    args: {},
};
AuthNavbar.decorators = [StoreDecorator({
    user: { authData: {} },
})];
