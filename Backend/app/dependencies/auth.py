from fastapi import Header, HTTPException
from supabase import create_client


def get_user(authorization: str = Header(...)):
    if not authorization:
        raise HTTPException(status_code=401)

    token = authorization.replace("Bearer ", "")

    user = supabase.auth.get_user(token)
    
    if not user:
        raise HTTPException(status_code=401)

    return user