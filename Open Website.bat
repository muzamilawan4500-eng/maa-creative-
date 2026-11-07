@echo off
title MAA Creative Website

:: Check if server is already running on port 3000
netstat -ano | findstr /R /C:":3000 .*LISTENING" >nul
if %errorlevel% neq 0 (
    start "" /b "C:\Program Files\nodejs\node.exe" "C:\Users\Awan\.gemini\antigravity\scratch\maa-creative\node_modules\serve\build\main.js" "C:\Users\Awan\.gemini\antigravity\scratch\maa-creative\out" -l 3000
    timeout /t 1 /nobreak >nul
)

:: Open the website in Google Chrome / default browser
start http://localhost:3000
exit
