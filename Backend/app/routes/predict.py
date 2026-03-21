from fastapi import APIRouter, Depends
from app.services.supabase_client import supabase
from uuid import uuid4
from app.dependencies.auth import get_user

router = APIRouter(prefix="/predict")

@router.post("/")
def predict(image_url: str, user=Depends(get_user)):

    result = "benign"

    data = {
        "user_id": user.user.id,
        "image_url": image_url,
        "result": result
    }

    supabase.table("patients").insert(data).execute()

    return {"result": result}