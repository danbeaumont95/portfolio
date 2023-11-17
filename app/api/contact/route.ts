import prisma from '../../../lib/prisma';
export async function POST(req: any) {
  try {
    const body = await req.json()
    const result = await prisma.messages.create({
      data: body
    });
    if (result) {
      const response = new Response();
      return response
    }
  } catch (error) {
    console.log(error, 'error1')
    const response = new Response();
    return response
  }
}
