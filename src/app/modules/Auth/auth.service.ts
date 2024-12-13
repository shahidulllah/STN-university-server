import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';

const loginUser = async (payload: TLoginUser) => {
  //checking if the user is already exist
  const user = await User.isUserExistsByCustomId(payload.id);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found');
  }

  //check if the use is already deleted
  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is deleted');
  }

   //check if the use is blocked
   const userStatus = user?.status;

   if(userStatus === 'blocked') {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is blocked');
   }
};
