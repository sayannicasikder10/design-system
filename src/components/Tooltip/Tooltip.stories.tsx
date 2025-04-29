import { Tooltip } from './Tooltip';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `Tooltips provide contextual help or labels on hover/focus.

Anatomy:
- Wrapper \u003cdiv\u003e for positioning
- Child element as trigger
- \u003cdiv role="tooltip"\u003e shown on hover/focus

Do's:
✅ Use for brief, helpful messages
✅ Use on icons or unclear actions

Don'ts:
❌ Don’t place interactive elements inside tooltip
❌ Don’t show tooltip on click

Theming:
- Tailwind dark: support
- Customizable via className
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Helpful message">
      <button className="px-3 py-1 bg-blue-500 text-white rounded">Hover me</button>
    </Tooltip>
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <Tooltip content="Dark mode tooltip" className="bg-black text-green-300">
      <span className="underline cursor-help">Hover this text</span>
    </Tooltip>
  ),
};
