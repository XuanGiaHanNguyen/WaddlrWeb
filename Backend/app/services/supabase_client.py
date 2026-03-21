from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()

print("URL:", os.getenv("SUPABASE_URL"))
print("KEY:", os.getenv("SUPABASE_SERVICE_KEY"))

supabase = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_SERVICE_KEY")
)
