
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { StatusCodes } from 'http-status-codes';


const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    // next(err);
  }
};
//This is for testing
export const UserControllers = {
  createStudent,
};