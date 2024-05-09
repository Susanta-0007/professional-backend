class ApiResponse{
    constructor(statusCode,data,message="success"){
        this.statusCode=statusCode,
        ths.data=data,
        this.message=message,
        this.success=statusCode<400
    }
}

export {ApiResponse};