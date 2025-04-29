
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Buttons are used for user actions like submitting forms or triggering events.

Anatomy:
- \u003cbutton\u003e: the native HTML button element
- Supports icon + label, loading state, and variants

Do's:
✅ Use for primary and secondary actions  
✅ Keep labels short  
✅ Use accessible contrast colors

Don'ts:
❌ Don’t use buttons for navigation (use Link)  
❌ Don’t overload buttons with too many icons

Accessibility:
- Uses native \u003cbutton\u003e with disabled state
- Supports aria-disabled and keyboard interaction

Theming:
- Supports light/dark mode via Tailwind \`dark:\` variants
- className allows further customization`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Delete',
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Add Item',
    icon: <Plus className="w-4 h-4" />,
  },
};

export const Loading: Story = {
  args: {
    label: 'Submitting...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};
