return [
    'name' => 'Tu Nombre de PWA',
    'short_name' => 'PWA',
    'start_url' => '/',
    'manifest' => [
        'background_color' => '#ffffff',
        'theme_color' => '#317EFB',
        'display' => 'standalone',
        'orientation' => 'portrait',
        'icons' => [
            [
                'src' => '/images/icon-192x192.png',
                'sizes' => '192x192',
                'type' => 'image/png',
            ],
            [
                'src' => '/images/icon-512x512.png',
                'sizes' => '512x512',
                'type' => 'image/png',
            ],
        ],
    ],
];
