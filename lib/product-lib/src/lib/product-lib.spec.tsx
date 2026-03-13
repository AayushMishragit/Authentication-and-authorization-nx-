import { render } from '@testing-library/react';

import MyWorkspaceProductLib from './product-lib';

describe('MyWorkspaceProductLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyWorkspaceProductLib />);
    expect(baseElement).toBeTruthy();
  });
});
