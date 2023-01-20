<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
    <!--div id="app2" style="border:solid 1px green">
        <Index1></Index1>
        <hr>
        <router-link to="/">Home</router-link> | <router-link to="/posts">Сообщения</router-link>
        <hr>
        <router-view></router-view>
    </div-->
    <div id="app" class="p-4" style="border:solid 1px magenta">
        <!--router-link to="/">Home</router-link> |
        <router-link to="/tags">Теги</router-link> |
        <router-link to="/posts">Сообщения</router-link>
        <hr>
        <router-view></router-view-->
        @yield('content')
    </div>
</body>
</html>