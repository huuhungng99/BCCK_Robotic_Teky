@echo off
title Khoa Hoc Robotics - He Thong Trinh Chieu Slide
echo ============================================================
echo   DANG KHOI DONG HE THONG TRINH CHIEU SLIDE ROBOTICS
echo   Server Localhost giup xem Video YouTube khong bi loi 153
echo ============================================================
echo.
echo Dang mo trinh duyet tai: http://localhost:5500
start "" http://localhost:5500/index.html
python -m http.server 5500
