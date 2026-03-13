import { render } from '@testing-library/react';

import MyWorkspaceButton from './button';

describe('MyWorkspaceButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyWorkspaceButton />);
    expect(baseElement).toBeTruthy();
  });
});
