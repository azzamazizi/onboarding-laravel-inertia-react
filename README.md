# Panduan Instalasi Task DOT Onboarding [Inertia + React + Laravel]

by : M. Azzam Azizi <azzamazizi09@gmail.com>


## Langkah 1 : Konfigurasi
atur `.env`, nama database : ```onboarding_movie```
```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=onboarding_movie
DB_USERNAME=root
DB_PASSWORD=
```
kemudian jalankan `composer update` untuk unduh resource vendor dan jalankan `npm install` untuk unduh node_modules
## Langkah 2 : Migrate Database
jalankan perintah
```sh
php artisan migrate
```
maka proses import database akan dijalankan
## Langkah 3 : Jalankan service laravel
jalankan serve laravel
```sh
php artisan serve --port 8080
```
port ```8080``` yang saya gunakan.
## Langkah 4 : Jalankan Database Seeder
pertama jalankan seeder Studio dengan perintah :
```sh
php artisan db:seed StudiosSeeder
```
kemudian jalankan seeder Tag dengan perintah :
```sh
php artisan db:seed TagsSeeder
```
## Langkah 5 : Jalankan Scheduler
scheduler digunakan untuk import data movies, jalankan perintah :
```sh
php artisan schedule:work
```
proses import data setiap 1 menit, untuk log data bisa dilihat di directory ```/storage/logs/laravel.log```
## Langkah 6 : Jalankan NPM
```sh
npm run dev
```
## Langkah 7 : Buka Aplikasi
buka di browser url `localhost:8080` kemudian klik Register untuk membuat akun baru.
setelah berhasil buat akun, silahkan Login untuk mengelola data

# - - - Selesai- - -

# Tambahan
## Issue Error
perlu ubah setting di `app/Providers/AppServiceProvider.php`, tambahkan didalam function boot :
```sh
Schema::defaultStringLength(191);
```


ubah tipe data di import database 
- enum menjadi char/varchar
- json menjadi char/varchar
