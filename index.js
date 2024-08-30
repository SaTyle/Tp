@echo off
rem Run the first command in the first terminal
start cmd /k "ngrok config add-authtoken 2Itaz2ZYiBkGiO2XRTCEo0JAect_3kxzvcFpBToo5RFdZ8Cjo && ngrok http --domain=factual-destined-foxhound.ngrok-free.app 5000"

rem Wait for 1 second before starting the second terminal
timeout /t 5 >nul

rem Run the second command in the second terminal
start cmd /k "ngrok config add-authtoken 2lN8mjCUZrrMNPCyZ2JwUJ1NzjH_6SyzYmPWgANFo8VBACTjw && ngrok http --domain=delicate-happy-cub.ngrok-free.app 8000"
