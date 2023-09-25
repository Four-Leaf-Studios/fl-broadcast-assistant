@echo off
set "bakkesmod_folder=%APPDATA%\bakkesmod\bakkesmod"
set "plugins_folder=%bakkesmod_folder%\plugins"
set "plugin_state_buttonmash=0"
set "plugin_state_sos=0"

if exist "%plugins_folder%\ButtonMash.dll" (
    set "plugin_state_buttonmash=1"
)

if exist "%plugins_folder%\SOS.dll" (
    set "plugin_state_sos=1"
)

echo %plugin_state_buttonmash% %plugin_state_sos%