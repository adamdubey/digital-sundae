import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '../server/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '../server/images/vanilla.png' },
      ]),
    );
  }),

  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Cherries', imagePath: '../server/images/cherries.png' },
        { name: 'M&Ms', imagePath: '../server/images/m-and-ms.png' },
        { name: 'Hot fudge', imagePath: '../server/images/hot-fudge.png' },
      ]),
    );
  }),

  rest.post('http://localhost:3030/order', (req, res, ctx) => {
    return res(ctx.json({ orderNumber: 123455676 }));
  }),
];
