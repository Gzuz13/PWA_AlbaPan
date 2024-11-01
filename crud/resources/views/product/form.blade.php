<div class="row padding-1 p-1">
    <div class="col-md-12">
        
        <div class="form-group mb-2 mb20">
            <label for="title" class="form-label">{{ __('Title') }}</label>
            <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title', $product?->title) }}" id="title" placeholder="Title">
            {!! $errors->first('title', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="price" class="form-label">{{ __('Price') }}</label>
            <input type="text" name="price" class="form-control @error('price') is-invalid @enderror" value="{{ old('price', $product?->price) }}" id="price" placeholder="Price">
            {!! $errors->first('price', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="description" class="form-label">{{ __('Description') }}</label>
            <input type="text" name="description" class="form-control @error('description') is-invalid @enderror" value="{{ old('description', $product?->description) }}" id="description" placeholder="Description">
            {!! $errors->first('description', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="imagen_url" class="form-label">{{ __('Imagen Url') }}</label>
            
            <!-- Campo de archivo sin atributo value -->
            <input type="file" name="imagen_url" class="form-control @error('imagen_url') is-invalid @enderror" id="imagen_url" placeholder="Imagen Url">
            {!! $errors->first('imagen_url', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        
            <!-- Mostrar la imagen actual si existe -->
            @if(isset($product) && $product->imagen_url)
                <div class="mt-2">
                    <p>Imagen actual:</p>
                    <img src="{{ Storage::url($product->imagen_url) }}" alt="Imagen del producto" style="max-width: 200px; height: auto;">
                </div>
            @endif
        </div>
        <div class="form-group">
            <label for="category">Category</label>
            <select class="form-control" name="category" id="category" required>
                <option value="Todos">Todos</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Promociones">Promociones</option>
                <option value="Pasteles">Pasteles</option>
                <option value="Panadería">Panadería</option>
            </select>
        </div>
    </div>
    <div class="col-md-12 mt20 mt-2">
        <button type="submit" class="btn btn-primary">{{ __('Submit') }}</button>
    </div>
</div>