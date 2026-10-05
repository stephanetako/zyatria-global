@echo off
echo.
echo ========================================
echo   Build et Deploiement - ZyatrIA Global
echo ========================================
echo.

echo Etape 1/4 : Arret du serveur...
call npx astro dev stop 2>nul
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo.
echo Etape 2/4 : Nettoyage des caches...
if exist ".astro" rmdir /s /q ".astro" 2>nul
if exist "node_modules\.vite" rmdir /s /q "node_modules\.vite" 2>nul
if exist "dist" rmdir /s /q "dist" 2>nul

echo.
echo Etape 3/4 : Build de production...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ========================================
    echo   ERREUR lors du build !
    echo ========================================
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Build reussi !
echo ========================================
echo.
echo Voulez-vous deployer sur Cloudflare ? (O/N)
set /p DEPLOY="Reponse : "

if /i "%DEPLOY%"=="O" (
    echo.
    echo Etape 4/4 : Deploiement sur Cloudflare...
    call wrangler pages deploy dist
    
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ========================================
        echo   ERREUR lors du deploiement !
        echo ========================================
        echo.
    ) else (
        echo.
        echo ========================================
        echo   Deploiement reussi !
        echo ========================================
        echo.
    )
) else (
    echo.
    echo Deploiement annule.
    echo Pour deployer plus tard :
    echo   wrangler pages deploy dist
    echo.
)

pause
