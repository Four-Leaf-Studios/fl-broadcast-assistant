// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod server;

#[tokio::main]
async fn main() {
    // Spawn a new task to run the WebSocket server
    tokio::spawn(server::start_server());

    // Run the Tauri application
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
