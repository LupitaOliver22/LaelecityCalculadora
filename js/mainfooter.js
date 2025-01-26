// Função para incluir o rodapé
function includeFooter() {

    var footer = `
        <footer>


            <div class="copyright-section">
                 
              <p>Copyright © 2023, <a href="" target="_blank">Oliver Store Data</a>, All rights reserved</p>
    

            </div>


            <div class="social-media-section">


                <div class="redes-sociais-footer">

                    <a href="https://discord.gg/laelecity" target="_blank"><i class="fab fa-discord"></i></a>
             
                    </div>

            </div>

  
            
        </footer>
    `;

    document.write(footer);
    // document.getElementById("current-year").textContent = new Date().getFullYear();

}

// Incluir o cabeçalho e o rodapé nas páginas
includeFooter();
