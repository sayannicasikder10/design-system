
import { Tabs, TabsProps } from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Tabs allow users to switch between different views or panels within the same context.

Anatomy:
- \u003cdiv\u003e: Wrapper for tablist and panels
- \u003cbutton role="tab"\u003e: Each clickable tab
- \u003cdiv role="tabpanel"\u003e: Content associated with each tab

Do's:
- ✅ Use for parallel content areas
- ✅ Support keyboard navigation
- ✅ Use aria roles and labels for accessibility

Don'ts:
- ❌ Don’t overload with too many tabs
- ❌ Don’t use tabs for step-by-step workflows

Accessibility:
- role="tablist", "tab", and "tabpanel"
- arrow key navigation supported
- active tab has aria-selected=true

Theming:
- Uses Tailwind dark: variant support
- className prop allows overrides`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabsData: TabsProps['tabs'] = [
  { label: 'Home', content: 'Welcome to the homepage!' },
  { label: 'Profile', content: 'This is your profile info.' },
  { label: 'Settings', content: 'Adjust your settings here.' },
];

export const Default: Story = {
  args: {
    tabs: tabsData,
  },
};

export const WithCustomClass: Story = {
  args: {
    tabs: tabsData,
    className: 'bg-white dark:bg-gray-900 p-4 rounded',
  },
};
