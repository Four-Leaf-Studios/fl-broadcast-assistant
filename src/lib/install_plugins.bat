@echo off

:: Define the paths
set "bakkesmod_folder=%APPDATA%\bakkesmod\bakkesmod"
set "bakkesmod_plugins_folder=%bakkesmod_folder%\plugins"
set "cfg_file=%bakkesmod_folder%\cfg\plugins.cfg"
set "plugin_dll_folder=%~dp0plugins"  rem Use the current batch script's directory

:: Resolve the absolute path to the settings folder
set "settings_folder=%bakkesmod_plugins_folder%\settings"
set "sos_set_file=%settings_folder%\sos.set"

:: Check if DLL files are already in the plugins folder
if not exist "%bakkesmod_plugins_folder%\ButtonMash.dll" (
    copy "%plugin_dll_folder%\ButtonMash.dll" "%bakkesmod_plugins_folder%"
    echo DLL files copied to plugins folder.
) else (
    echo DLL files are already in the plugins folder.
)

:: Check if DLL files are already in the plugins folder
if not exist "%bakkesmod_plugins_folder%\SOS.dll" (
    echo Copying SOS.dll to %bakkesmod_plugins_folder%
    copy "%plugin_dll_folder%\SOS.dll" "%bakkesmod_plugins_folder%"
    if errorlevel 1 (
        echo Error copying SOS.dll to plugins folder.
    ) else (
        echo SOS.dll copied to plugins folder.
    )
) else (
    echo SOS.dll is already in the plugins folder.
)

:: Check if lines are already present in plugins.cfg
findstr /C:"plugin load sos" "%cfg_file%" > nul
if errorlevel 1 (
    echo plugin load sos>> "%cfg_file%"
    echo Added line to load SOS plugin.
) else (
    echo SOS plugin line is already in plugins.cfg.
)

findstr /C:"plugin load buttonmash" "%cfg_file%" > nul
if errorlevel 1 (
    echo plugin load buttonmash>> "%cfg_file%"
    echo Added line to load ButtonMash plugin.
) else (
    echo ButtonMash plugin line is already in plugins.cfg.
)

:: Check if sos.set file is already in the settings folder
if not exist "%sos_set_file%" (
    copy "%plugin_dll_folder%\sos.set" "%settings_folder%"
    echo sos.set file copied to settings folder.
) else (
    echo sos.set file is already in settings folder.
)

echo Plugins installation complete.