import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    await Category.findByIdAndDelete(categoryId);

    res.sendStatus(200);
  } catch (error) {
    console.log('createOrder ~ error', error);
    res.sendStatus(500);
  }
}
