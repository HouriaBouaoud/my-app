export interface IMsg {
  msg: string | any;
}
  
export enum E_ERROR {
  LOGIN_FAIL = 'LOGIN_FAIL',
  REGISTER_FAIL = 'REGISTER_FAIL'
}
export interface IError {
  id: E_ERROR;
  msg: IMsg;
}
export interface IAuthReduxProps {
  auth: { isAuthenticated: boolean };
  error: IError;
}