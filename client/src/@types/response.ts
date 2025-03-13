
interface ApiResponse<T> {
  resultCode:number;
  message:string;
  data:T;
  timestamp:number;
  error?:ErrorSet;
}

interface ErrorSet {
  errorCode : string;
  errorMessage : string;
  alertMessage? : string;
}