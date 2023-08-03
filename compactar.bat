@echo off
"C:\Program Files\7-Zip\7z.exe" a -tzip addon-zappull.zip .\src .\manifest.json

@REM Compress-Archive -Force -Path ".\src", ".\manifest.json" -DestinationPath ".\addon-zappull.zip"