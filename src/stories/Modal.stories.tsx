import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';



export default {
    title: 'My Components/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});


Default.args = {
    rows: [
        'Follow',
        'Unfollow',
        'Delete',
        'Block',
        'Report'
    ]
};