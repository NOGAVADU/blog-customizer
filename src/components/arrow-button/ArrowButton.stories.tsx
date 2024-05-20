import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

const ArrowButtonWithState = () => {
	return <ArrowButton onClick={() => console.log('click')} isActive={true}/>
}

export const ArrowButtonStory: Story = {
	render: () => <ArrowButtonWithState/>
	}
