type ServiceResponse<T = any> = {
  data?: T;
  message: string;
  status_code: number | string;
  status: true | false;
};

export class ServiceHandler {
  static SUCCESS(success = true,data: any, message = "Success", status_code = 200) {
    return {
      success: success,
      data,
      message, 
      status_code,
    };
  }

  static FAIL(message = "Error", status_code = 500) {
    return {
      success: false,
      data: null,
      message,
      status_code,
    };
  }
}