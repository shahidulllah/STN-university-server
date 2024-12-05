import { NextFunction, Request, RequestHandler, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
