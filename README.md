<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## get it up and running.

After you clone this project, do the following:

``` bash
1. go into the project 
    cd lar7-vue-dynamic

2. install composer dependencies 
    composer install
    or
    composer update

3. generate a key for your application 
    php artisan key:generate

4. create a .env file
    cp .env.example .env

5. create a local MySQL database (make sure you have MySQL up and running) 
    mysql -u root -p
    
    > create database db_name;
    > exit;

6. add the database connection config to your .env file
    DB_CONNECTION=mysql
    DB_DATABASE=db_name
    DB_USERNAME=root
    DB_PASSWORD=

7. run the migration files to generate the schema 
   php artisan migrate

8. install npm dependencies 
   npm install && npm run dev

9. php artisan serve 
   Visit http://127.0.0.1:8000 your browser
````   
![Screenshot](doc/1.jpg)   
![Screenshot](doc/2.jpg)   
  