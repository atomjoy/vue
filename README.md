# Vue 3 in Laravel 10

Minimal Vue 3 application with router, i18n, pinia store.

## Install package

```sh
composer create-project laravel/laravel:^10.0 vue-app
cd vue-app
composer require atomjoy/vue
```

### Overwrite files
Backup first ***routes*** and ***resources/js*** directory!

```sh
php artisan vendor:publish --tag=vue-config --force
```

### Build and run app

```sh
npm install
npm run build
php artisan serve --host=localhost --port=8000
```

## (DEV) Local repository import

Package directory: packages/atomjoy/vue

### Laravel composer.json

```json
{
    "repositories": [{
        "type": "path",
        "url": "packages/atomjoy/vue"
    }],
    "require": {
        "atomjoy/vue": "dev-main"
    },
}
```

### Vue3 npm packages

```sh
npm install vue@next
npm install vue-router@4
npm install vue-i18n@9
npm install --save-dev @vitejs/plugin-vue
npm install pinia
npm install @googlemaps/js-api-loader
```
