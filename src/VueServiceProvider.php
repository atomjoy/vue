<?php

namespace Vue;

use Illuminate\Support\ServiceProvider;

class VueServiceProvider extends ServiceProvider
{
	/**
	 * Register services.
	 *
	 * @return void
	 */
	public function register()
	{
	}

	/**
	 * Bootstrap services.
	 *
	 * @return void
	 */
	public function boot()
	{
		if ($this->app->runningInConsole()) {
			$this->publishes([
				__DIR__ . '/../app/resources' => base_path('resources'),
				__DIR__ . '/../app/routes' => base_path('routes'),
				__DIR__ . '/../app/package.json' => base_path('package.json'),
				__DIR__ . '/../app/vite.config.js' => base_path('vite.config.js'),
				__DIR__ . '/../app/jsconfig.json' => base_path('jsconfig.json'),
			], 'vue-config');
		}
	}
}
