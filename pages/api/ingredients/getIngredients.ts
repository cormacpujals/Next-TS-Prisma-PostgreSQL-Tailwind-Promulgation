import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // get prisma to fetch the ingredients
      const data = await prisma.ingredients.findMany();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500);
    }
  }
}
