<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// All non protected routes can be defined here
// Route::apiResource('products', \App\Http\Controllers\ProductController::class)->only(['index', 'show']);
Route::apiResource('categories', \App\Http\Controllers\CategoryController::class)->only(['index', 'show']);
Route::apiResource('subcategories', \App\Http\Controllers\SubcategoryController::class)->only(['index', 'show']);
Route::apiResource('brands', \App\Http\Controllers\BrandController::class)->only(['index', 'show']);
Route::apiResource('families', \App\Http\Controllers\FamilyController::class)->only(['index', 'show']);
Route::apiResource('subfamilies', \App\Http\Controllers\SubfamilyController::class)->only(['index', 'show']);

Route::get('on-sale', [\App\Http\Controllers\Catalog\ProductController::class, 'getOnSaleProducts']);
Route::get('latest', [\App\Http\Controllers\Catalog\ProductController::class, 'getLatestProducts']);
Route::get('products/{slug}', [\App\Http\Controllers\Catalog\ProductController::class, 'show']);

Route::get('catalog/{slug}', [\App\Http\Controllers\Catalog\CatalogController::class, 'index']);
Route::get('search', [\App\Http\Controllers\Catalog\CatalogController::class, 'search']);
Route::get('banners', [\App\Http\Controllers\Catalog\CatalogController::class, 'banners']);
Route::get('menu', [\App\Http\Controllers\Catalog\CatalogController::class, 'menu']);
Route::get('filters', [\App\Http\Controllers\Catalog\CatalogController::class, 'getFilters']);

