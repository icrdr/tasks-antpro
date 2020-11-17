import { Request, Response } from 'express';

const login = async (req: Request, res: Response) => {
  const { password, username } = req.body;
  if (password === 'admin' && username === 'admin') {
    res.send({
      status: 'ok',
      currentAuthority: 'admin',
    });
  } else if (password === '12345' && username === 'user') {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
  } else {
    res.status(402).send({
      message: 'not aus',
    });
  }
};

export default {
  'POST /api/login': login,
};
