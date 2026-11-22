import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { expect, it, vi } from 'vitest';
import { SearchControls } from './SearchControls';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

it('does not render a platform-specific shortcut in the initial markup', () => {
  const view = ReactDOM.renderToStaticMarkup(<SearchControls />);

  expect(view).not.toContain('⌘');
  expect(view).not.toContain('Ctrl');
  expect(view).toContain('SearchTriggerShortcutModifier"></kbd>');
});
