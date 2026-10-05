@echo off
echo.
echo ========================================
echo   Arret du serveur Astro
echo ========================================
echo.

echo Arret du serveur Astro...
call npx astro dev stop

echo.
echo Arret des processus Node...
taskkill /F /IM node.exe 2>nul

echo.
echo Attente de 2 secondes...
timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   Serveur arrete !
echo ========================================
echo.
echo Pour redemarrer :
echo   npm run dev
echo.
echo Pour build :
echo   npm run build
echo.
pause
