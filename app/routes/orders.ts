import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

export interface GetCommitsRequest {
  commitIds: string[];
}

export const action: ActionFunction = async ({ request }) => {
  console.log('request :>> ', request);
  try {
    const orders = '🍔🍟🍕🍦';

    return json(orders);
  } catch (error) {
    console.log('📛📛📛 error in /orders :>> ', error);
    return json({ error });
  }
};
