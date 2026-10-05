@echo off
chcp 65001 >nul
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║     🔧 TEST PAGE BLANCHE - VERSION ULTRA SIMPLE           ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo ⏳ Arrêt du serveur existant...
call astro dev stop 2>nul
timeout /t 2 /nobreak >nul

echo.
echo 🚀 Lancement du serveur de test...
echo.
echo ╔══════════════════════════════════��═════════════════════════╗
echo ║  ATTENDEZ le message "astro v5.13.5 started"              ║
echo ║  puis ouvrez: http://localhost:4321                       ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

npm run dev

pause
