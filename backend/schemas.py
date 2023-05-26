from pydantic import BaseModel, EmailStr, Field

class Users(BaseModel):
    email: EmailStr

class CreateUserSchema(Users):
    hashed_password: str = Field(alias="password")
    
class UserInDB(Users):
    hashed_password: str

class UserSchema(Users):
    id: int
    disabled: bool = Field(default=False)

    class Config:
        orm_mode = True

class UserLoginSchema(BaseModel):
    email: EmailStr = Field(alias="username")
    password: str 
    
class Token(BaseModel):
    access_token: str
    token_type: str
    
class TokenData(BaseModel):
    username: str | None = None