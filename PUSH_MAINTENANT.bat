@echo off
echo ========================================
echo PUSH VERS GITHUB
echo ========================================
echo.

git add -A
git commit -m "Nettoyage + corrections page blanche"
git push origin master

echo.
echo ========================================
echo TERMINE !
echo ========================================
echo.
echo Depot: https://github.com/stephanetako/zyatria-global
echo.
pause
