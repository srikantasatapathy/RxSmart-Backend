import { Response } from 'express'

/******************************************************************************
 Description - Create the success and fail response
 ******************************************************************************/
export const successResponse = (res: Response,message:string, data: any) => {
  return res.status(200).json({
      status: true,
      message: message,
      data: data
  });
}

export const failResponse = (res: Response, message: string, error: any) => {
  return res.status(500).json({
      status: false,
      message: message,
      error: error,
  });
}