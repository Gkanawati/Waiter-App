import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    await Product.findByIdAndDelete(productId);

    res.sendStatus(200);
  } catch (error) {
    console.log('createOrder ~ error', error);
    res.sendStatus(500);
  }
}
