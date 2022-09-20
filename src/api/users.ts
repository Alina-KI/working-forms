import { User } from '../types/user'
import { api } from './api'

export const USERS = 'USERS'
export const getUsers = () => api.get<User[]>('/users').then(res => res.data )