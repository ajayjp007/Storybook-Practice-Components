import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';



export default {
    title: 'My Components/Tables',
    component: Table,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
} as ComponentMeta<typeof Table>;


const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Table1 = Template.bind({});
