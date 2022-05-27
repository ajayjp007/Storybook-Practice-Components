import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './Navbar';



export default {
    title: 'My Components/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;


const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Navbar1 = Template.bind({});

export const Navbar2 = Template.bind({});

Navbar1.argTypes = {
    rows: [
        'Company',
        'About us',
        'Testimonials',
        'Blog'
    ]
}

