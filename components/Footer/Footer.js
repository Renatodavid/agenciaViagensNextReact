import React from 'react'


export default function footer() {
    return (


        <footer id="footerdestino">
            <div className="container-fluid row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
                <div className="col text-center" id="contact-info">
                    <div className="footer-brand mt-1">
                        <a className="navbar-brand" href="#">
                            <img
                                className="img-fluid st teste-img"
                                src="img/logo_branco.png"
                                alt="logo do projeto"
                               
                            />
                        </a>
                        <hr />
                    </div>
                    <p>
                        <i className="bi bi-geo-alt" /> Petropólis Rio de Janeiro RJ{" "}
                    </p>
                    <p>
                        <i className="bi bi-telephone" /> (21)98705-17825
                    </p>
                    <p>
                        <i className="bi bi-envelope" /> renato.david@aluno.recode.org.br
                    </p>
                </div>
                <div className="col mt-5 text center">
                    <h4 className="mt-4 my-5 text-center">Outros serviços</h4>
                    <nav className="text-center">
                        <a href="#">Propriedade intelecutal</a>
                        <hr />
                        <a href="#">LGPD</a>
                        <hr />
                        <a href="#">Direito internacional</a>
                    </nav>
                </div>
                <div className="col mt-5  ">
                    <div className="social-networks">
                        <h4 className="mt-4 text-center">Acompanhe nossas redes Sociais</h4>
                        <div className="networks  my-5 ">
                            <img src="../Img/facebook.png" className="f" alt="facebook" />
                            <img src="../Img/linkendin.png" className="f" alt="" />
                            <img src="../Img/whatsap.png" className="f" alt="" />
                            <img src="../Img/instagram.png" className="f" alt="" />
                        </div>
                    </div>
                </div>
                <p className="container text-center mt-5">
                    <i className="bi bi-c-circle" /> <strong>RR</strong> - Todos os direitos
                    reservados
                </p>
            </div>
        </footer>


    )
}
