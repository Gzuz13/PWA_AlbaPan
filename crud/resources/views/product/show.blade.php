@extends('layouts.app')

@section('template_title')
    {{ $product->name ?? __('Show') . " " . __('Product') }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Product</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary btn-sm" href="{{ route('products.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body bg-white">
                        
                                <div class="form-group mb-2 mb20">
                                    <strong>Title:</strong>
                                    {{ $product->title }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Price:</strong>
                                    {{ $product->price }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Description:</strong>
                                    {{ $product->description }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Imagen Url:</strong>
                                    @if($product->imagen_url)
                                    <div class="mb-4 text-center">
                                        <img src="{{ Storage::url($product->imagen_url) }}" alt="Imagen de {{ $product->title }}" style="width: 100px; height: auto;">
                                    </div>
                                @else
                                    <p>Sin imagen disponible</p>
                                @endif
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Categoria:</strong>
                                    {{ $product->category }}
                                </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
