import { API_URL } from '@constants/apiUrl';

//! V1 -> data.data / V2 -> data

export const getDataV1 = async (url: string, op?: any) => {
  try {
    const res: any = await fetch(`${API_URL.BASE_URL}${url}`, op ?? { method: 'GET', cache: 'no-store' });
    const data = await res.json();
    if (data?.code !== 1000) {
      throw new Error('fail fetching data :::');
    }
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDataV2 = async (url: string, op?: any) => {
  try {
    const res: any = await fetch(`${API_URL.BASE_URL}${url}`, op ?? { method: 'GET', cache: 'no-store' });
    const data = await res.json();
    if (data?.code !== 1000) {
      throw new Error('fail fetching data :::');
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postDataV1 = async (url: string, body?: any, cacheOp?: any) => {
  try {
    const res: any = await fetch(`${API_URL.BASE_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      ...cacheOp,
    });
    const data = await res.json();
    if (data?.code !== 1000) {
      throw new Error('fail fetching data :::');
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};
