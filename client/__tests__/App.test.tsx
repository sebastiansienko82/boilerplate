import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
    beforeEach(async () => {
        render(<App />);
    });

    it('Page should display Hello World', async () => {
        await waitFor(() => screen.getByText('Hello world'));
    });
});
