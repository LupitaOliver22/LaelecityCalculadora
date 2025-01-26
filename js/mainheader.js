// Função para incluir o cabeçalho
function includeHeader() {
    var header = `
    <header>
    <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item dropdown">
                    
                    <div class="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdownSobreNos">
                       <a class="nav-link" href="calculadora-penal-gta-rp.html"><i class="fas fa-calculator"></i> Calculadora </a>
                       <a class="nav-link" href="codigo-penal.html"><i class="fas fa-balance-scale"></i> Código Penal</a>
                       <a class="nav-link" href="atenuantes.html"><i class="fas fa-gavel"></i> Atenuantes</a>
                    </div>

                </li>


                <li class="nav-item">
                    <a class="nav-link " href="cartorio.html"><i class="fas fa-balance-scale" aria-hidden="true"></i> Cartorio</a>
                </li>
                              

            
                <li class="nav-item dropdown">

                    </div>

               </li>

              

            </ul>
        </div>
    </nav>
</header>
                        `;


    document.write(header);
}

{/* <li class="nav-item">
<a class="nav-link" href="calculadora-penal-gta-rp.html"><i class="fas fa-calculator"></i> Calculadora Penal UAI</a>
</li>

<li class="nav-item">
<a class="nav-link" href="codigo-penal.html"><i class="fas fa-balance-scale"></i> Código Penal</a>
</li>

<li class="nav-item">
<a class="nav-link" href="atenuantes.html"><i class="fas fa-gavel"></i> Atenuantes</a>
</li>

<li class="nav-item">
<a class="nav-link" href="calculadora-penal-dashboard.html"><i class="fas fa-chart-line"></i> Dashboard</a>
</li> */}


includeHeader();
