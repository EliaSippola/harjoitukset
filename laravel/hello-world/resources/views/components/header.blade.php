<div class="header-carousel">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="{{ asset('images/kuva1.jpg') }}" alt="Kuva 1" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="{{ asset('images/kuva2.jpg') }}" alt="Kuva 2" class="d-block">
            </div>
            <div class="carousel-item">
                <img src="{{ asset('images/kuva3.jpg') }}" alt="Kuva 3" class="d-block">
            </div>
        </div>
        <a href="#carouselExampleIndicators" role="button" class="carousel-control-prev" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Edellinen</span>
        </a>
        <a href="#carouselExampleIndicators" role="button" class="carousel-control-next" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Seuraava</span>
        </a>
    </div>
</div>