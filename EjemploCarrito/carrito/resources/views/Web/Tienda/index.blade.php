@extends('welcome')
@section('titulo', 'Obed Sánchez | Tienda')
@section ('imagen' , ('storage/img/uploads/blog-tecnologia-informatica-redes.jpg'))
@section('url' , '')
@section('estracto' , 'Bienvenido a mi blog oficial, sitio dedicado a la tienda')
@section('contenido')
<div class="container-fluid p-0">
    {{-- @include('Web.Home.portada') --}}
</div>
<div id="tienda" class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-12 text-center">
            <h4 class="">Productos</h4>
                <hr>
            <div class="row">
                @foreach($products as $pro)
                <div class="col-lg-3">
                    <div class="card" >
                        <img src="{{URL::asset('storage/img/carrito/'.$pro->image_path) }}"
                        class="card-img-top mx-auto"
                         alt="{{ $pro->image_path }}">
                        <div class="card-body text-center">
                            <a href="#">
                                <h6 class="card-title">{{ $pro->name }}</h6>
                            </a>
                            <p>${{ $pro->price }}</p>
                            <form action="{{ route('cart.store') }}" method="POST">
                                {{ csrf_field() }}
                                <input type="hidden" value="{{ $pro->id }}" id="id" name="id">
                                <input type="hidden" value="{{ $pro->name }}" id="name" name="name">
                                <input type="hidden" value="{{ $pro->price }}" id="price" name="price">
                                <input type="hidden" value="{{ $pro->description }}" id="description" name="description">
                                <input type="hidden" value="{{ $pro->image_path }}" id="img" name="img">
                                <input type="hidden" value="{{ $pro->slug }}" id="slug" name="slug">
                                <input type="hidden" value="1" id="quantity" name="quantity">
                                <div class="card-footer" style="background-color: white;">
                                    <div class="row">
                                        <button class="btn btn-success btn-sm" class="tooltip-test" title="add to cart">
                                            <i class="fa fa-shopping-cart"></i> agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
@push('estilos')
<link rel="stylesheet" href="{{URL::asset('FrontEnd/css/tienda.css')}}">
@endpush