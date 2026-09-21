@echo off
chcp 65001 >nul
echo ========================================
echo DEPLOIEMENT VERSION SEPTEMBRE 2026
echo ========================================
echo.
echo Lancement du script PowerShell...
echo.
powershell -ExecutionPolicy Bypass -File deploy-fix.ps1
