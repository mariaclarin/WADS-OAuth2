from sqlalchemy import Boolean, Column, Integer, String, UniqueConstraint, PrimaryKeyConstraint
from .database import Base

class User(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    disabled = Column(Boolean, default=True)
    
    UniqueConstraint("email", name="uq_user_email")
    PrimaryKeyConstraint("id", name="pk_user_id")