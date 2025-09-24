#!/bin/bash
uvicorn server:app --app-dir backend --host 0.0.0.0 --port 8001 > backend.log 2>&1 &
sleep 5
python3 backend_test.py