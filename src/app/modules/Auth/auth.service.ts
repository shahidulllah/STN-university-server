import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";

const loginUser = async (payload: TLoginUser) =>{
    //checking if the user is already exist
    const user = await User.isUserExi
}