@echo off
cd /d "%~dp0"

:: Prompt the user
set /p firstTime="Is this your first time launching this website? (y/n): "

if /i "%firstTime%"=="y" (
    echo Installing Python dependencies...
    call .\venv\Scripts\activate && pip install -r requirements.txt

    echo Installing Node.js dependencies...
    call npm install
)

:: Step 1 - Start the backend
start cmd /k ".\venv\Scripts\activate && uvicorn backend.main:app --reload"

:: Step 2 - Start the frontend
start cmd /k "npm run dev"
