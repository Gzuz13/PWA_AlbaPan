<nav class="navbar navbar-expand-lg p-3 bg-light" id="headerNav">
    <div class="container-fluid">
        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link mx-2" href="{{ route('index') }}">Tienda</a>
                </li>
                <li class="nav-item bg-primary rounded">
                    <a class="nav-link mx-2 text-white" href="{{ route('cart.index') }}">Carrito
                        <i class="fa-regular fa-cart-shopping"></i>
                        @if(Auth::check())
                            {{ \Cart::session(Auth::id())->getTotalQuantity() }}
                        @endif
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
