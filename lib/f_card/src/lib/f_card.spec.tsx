import { render } from '@testing-library/react';

import MyWorkspaceFCard from './f_card';

describe('MyWorkspaceFCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyWorkspaceFCard />);
    expect(baseElement).toBeTruthy();
  });
});
