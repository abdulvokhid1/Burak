export enum HttpCode {
OK = 200,
CREATE = 201,
NOT_MODIFIED = 304,
BAD_REQUEST = 400,
UNAUTHORIZED = 401,
FORBIDDEN = 403,
NOT_FOUND = 404,
INTERNAL_SERVER_ERROR = 500
}


export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data found!",
    CREATE_FAILED = "Create is failed",
    UPDATE_FAILED = "Update is failed",
    USED_NICK_PHONE = "You are inserting already used phone or nick!",
    BLOCKED_USER = " You have been blocked, contact restaurant!",
    WRONG_PASSWORD= "Please try again",
    NO_MEMBER_NICK = "No member with this name",
    NOT_AUTHENTICATED = "You are not autheticated, login first",
    TOKEN_CREATION_FAILED = "Token creation error!",
}

class Erros extends Error {
public code: HttpCode;
public  message: Message;

static standard = {
    code:HttpCode.INTERNAL_SERVER_ERROR,
    message:Message.SOMETHING_WENT_WRONG,
}

constructor(statusCode:HttpCode, statusMessage: Message){
    super();
    this.code = statusCode;
    this.message  = statusMessage;

}
}

export default Erros;