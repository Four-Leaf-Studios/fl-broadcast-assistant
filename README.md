## Florida Tech Broadcast Assistant + Overlay      
Note: You must have Rocket League Bakkesmod and the Bakkesmod SOS plugin for rocket league to connect to in game state. However configuring the overlay will still work.    

# Assistant   
Built using Tauri + Next.js. Runs a rust websocket server on a seperate thread for the overlay to connect and receive team configuration.     

# Overlay
Designed in figma and confirmed by Florida Tech for stream useage. Programmed a svelte application to receive team configuration from the broadcast assistant and receive game information from the websocket server in the game. Utilizes css to display the overlays for the stream.      

GitHub URL: https://github.com/MichaelHeinzman/florida-tech-rl-overlay      
Overlay URL: https://florida-tech-rl-overlay-ch7sgx0s1-michaelheinzman.vercel.app/       

VIEW IT IN ACTION (CLICK A ROCKET LEAGUE VOD): https://www.twitch.tv/fltechesports   


# How to use and setup

## Installation Setup
1. Install bakkes mod. [Instructions Here](https://www.bakkesmod.com/download.php)
3. Install Four Leaf Studios RL Overlay Control Panel [Click Here](https://drive.google.com/file/d/13-PUD_8_Qfye1ALc85zgPBA0acGou07n/view?usp=sharing)
4. Download the SOS Plugins folder, unzip and double click the install_plugins batch file. [Click Here](https://drive.google.com/drive/folders/1VYJULJ3TfM7yIq5re9gLWHmovzEEtcP6?usp=sharing)
5. Allow the program to be ran. There should be some type of windows defender warning, it's just because I'm running a batch file to install plugins for you.
6. Enter rocket league, go to bakkesmod plugins, plugin manager, SOS should be in the list of plugins.
7. Enable the SOS plugin by clicking checkbox.

## Stream Setup
1. Start the Four Leaf Studios RL Overlay Control Panel
2. Copy the vercel florida tech overlay link (DO NOT CLICK, I MESSED UP THE LINK WHEN CLICKING TO COPY, but the one showing is correct).
3. Place the link inside a browser source on the stream. You may want to click restart when exiting and entering scene.
4. That should be it, you should go in a private match in rocket league and spectate bots to see if it worked.
