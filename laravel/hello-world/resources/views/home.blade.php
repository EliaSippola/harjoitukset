@extends('layouts.app')

@section('content')

<h1>Home page</h1>
<p>Welcome to home</p>

<div class="container mt-4">
    <div class="row">
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="{{ asset('images/kuva1.jpg')}}" alt="Kuva 1">
                <div class="card-body">
                    <h5 class="card-title">Card 1</h5>
                    <p class="card-text">text</p>
                    <a href="#" class="btn btn-primary">More</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="{{ asset('images/kuva2.jpg')}}" alt="Kuva 2">
                <div class="card-body">
                    <h5 class="card-title">Card 2</h5>
                    <p class="card-text">text</p>
                    <a href="#" class="btn btn-primary">More</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="{{ asset('images/kuva3.jpg')}}" alt="Kuva 3">
                <div class="card-body">
                    <h5 class="card-title">Card 3</h5>
                    <p class="card-text">text</p>
                    <a href="#" class="btn btn-primary">More</a>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection