@echo off
echo ========================================
echo   TEST PAGE BLANCHE - VERSION DIRECTE
echo ========================================
echo.
echo 1. Arret du serveur existant...
call astro dev stop
timeout /t 2 /nobreak >nul

echo.
echo 2. Lancement du serveur de test...
echo.
start cmd /k "npm run dev"

echo.
echo ========================================
echo   INSTRUCTIONS
echo ========================================
echo.
echo 1. Attendez que le serveur demarre
echo 2. Ouvrez http://localhost:4321 dans votre navigateur
echo 3. Vous devriez voir un message "ZyatrIA Global Fonctionne !"
echo.
echo SI VOUS VOYEZ LE MESSAGE:
echo   - React fonctionne correctement
echo   - Le probleme vient d'un composant specifique
echo.
echo SI LA PAGE EST TOUJOURS BLANCHE:
echo   - Appuyez sur F12 dans le navigateur
echo   - Allez dans l'onglet "Console"
echo   - Copiez-collez TOUTES les erreurs rouges ici
echo.
echo ========================================
pause
