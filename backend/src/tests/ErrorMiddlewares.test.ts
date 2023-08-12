import { NextFunction, Request, Response } from 'express'
import { HTTPExceptions } from '../interfaces/HTTPExceptions'
import { errorMiddleware } from '../middlewares/error.middlewares'

describe('Error Middleware', () => {
  it('should respond with the correct status and message HttpException', () => {
    const httpException: HTTPExceptions = {
      name: 'httpException',
      status: 401,
      message: 'Not found',
    }
    const req: Partial<Request> = {}
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    const next: NextFunction = jest.fn();

    errorMiddleware(httpException, req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      message: 'Not found',
    });
  })
})