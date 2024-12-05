import express, { NextFunction, Request, Response } from 'express'
import { UserControllers } from './user.controller'
const router = express.Router()

const army = (req: Request, res: Response, next: NextFunction) => {
  console.log('I am a senabahini')
  next()
}

router.post('/create-student', army, UserControllers.createStudent)

export const UserRoutes = router
