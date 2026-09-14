class ApiResponse {
    constructor(stausCode, data, message = "Success") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = stausCode < 400
    }
}