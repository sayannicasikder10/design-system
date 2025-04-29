
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge label="Default" color="default" />
      <Badge label="Primary" color="primary" />
      <Badge label="Success" color="success" />
      <Badge label="Danger" color="danger" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge label="Small" size="sm" />
      <Badge label="Medium" size="md" />
      <Badge label="Large" size="lg" />
    </div>
  ),
};

export const DarkModePreview: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 flex gap-2">
      <Badge label="Default" color="default" />
      <Badge label="Primary" color="primary" />
      <Badge label="Success" color="success" />
      <Badge label="Danger" color="danger" />
    </div>
  ),
};
