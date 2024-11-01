@extends('layouts.app')

@section('template_title')
    Products
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Products') }}
                            </span>
                            <form action="{{ route('products.index') }}" method="GET" class="d-flex">
                                <select name="category" class="form-select" onchange="this.form.submit()">
                                    <option value="Todos" {{ request('category') == 'Todos' ? 'selected' : '' }}>Todos</option>
                                    <option value="Bebidas" {{ request('category') == 'Bebidas' ? 'selected' : '' }}>Bebidas</option>
                                    <option value="Promociones" {{ request('category') == 'Promociones' ? 'selected' : '' }}>Promociones</option>
                                    <option value="Pasteles" {{ request('category') == 'Pasteles' ? 'selected' : '' }}>Pasteles</option>
                                    <option value="Panadería" {{ request('category') == 'Panadería' ? 'selected' : '' }}>Panadería</option>
                                </select>
                            </form>

                             <div class="float-right">
                                <a href="{{ route('products.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success m-4">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body bg-white">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
									<th >Title</th>
									<th >Price</th>
									<th >Description</th>
                                    <th>Category</th>
									<th >Imagen Url</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($products as $product)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
										<td >{{ $product->title }}</td>
										<td >{{ $product->price }}</td>
										<td >{{ $product->description }}</td>
                                        <td>{{ $product->category }}</td>
										<td > 
                                            @if($product->imagen_url)
                                                <img src="{{ Storage::url($product->imagen_url) }}" alt="Imagen de {{ $product->title }}" style="width: 100px; height: auto;">
                                            @else
                                                Sin imagen
                                            @endif
                                        </td>
                                            

                                            <td>
                                                <form action="{{ route('products.destroy', $product->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('products.show', $product->id) }}"><i class="fa fa-fw fa-eye"></i> {{ __('Show') }}</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('products.edit', $product->id) }}"><i class="fa fa-fw fa-edit"></i> {{ __('Edit') }}</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm" onclick="event.preventDefault(); confirm('Are you sure to delete?') ? this.closest('form').submit() : false;"><i class="fa fa-fw fa-trash"></i> {{ __('Delete') }}</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $products->withQueryString()->links() !!}
            </div>
        </div>
    </div>
@endsection
