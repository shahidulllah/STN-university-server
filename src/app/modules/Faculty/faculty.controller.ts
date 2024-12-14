import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FacultyServices } from './faculty.service';

//Get single faculty
const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.getSingleFacultyFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty is retrieved succesfully',
    data: result,
  });
});

//Get all faculties
const getAllFaculties = catchAsync(async (req, res) => {
  const result = await FacultyServices.getAllFacultiesFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculties are retrieved succesfully',
    data: result,
  });
});

//Update faculty
const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { faculty } = req.body;
  const result = await FacultyServices.updateFacultyIntoDB(id, faculty);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty is updated succesfully',
    data: result,
  });
});

//Delete faculty
const deleteFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.deleteFacultyFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty is deleted succesfully',
    data: result,
  });
});

export const FacultyControllers = {
  getAllFaculties,
  getSingleFaculty,
  deleteFaculty,
  updateFaculty,
};
