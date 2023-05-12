# Vue 3 in Laravel 10

Minimal Vue 3 application with router, i18n, pinia store.

## Install package

```sh
composer create-project laravel/laravel vue-app
cd vue-app
composer require atomjoy/vue
```

### Overwrite files

```sh
php artisan vendor:publish --tag=vue-config --force
```

### Build and run app

```sh
npm install
npm run build
php artisan serve --host=localhost --port=8000
```

## (DEV) Local import

packages/atomjoy/vue

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
