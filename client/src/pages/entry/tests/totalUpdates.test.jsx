import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />);

  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  const vanillaScoopInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaScoopInput);
  userEvent.type(vanillaScoopInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  const chocolateScoopInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  userEvent.clear(chocolateScoopInput);
  userEvent.type(chocolateScoopInput, '2');
  expect(chocolateScoopInput).toHaveTextContent('6.00');
});
