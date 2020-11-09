import Head from 'next/head'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    Container,
    Progress,
    Jumbotron,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

library.add(fas)

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <div>
                <Head>
                    <title>Ínicio - &#119998;Corp</title>
                    <meta name="description" content="O portfólio é uma coleção de todo o trabalho em andamento na organização relacionado com o alcance dos objetivos do negócio." />
                    <meta name="author" content="Umbrella comporation by Izael silva" />
                </Head>
                <Navbar color="dark" dark expand="md" className="fixed-top">
                    <Container>
                        <NavbarBrand href="/#inicio">Ínicio</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/#portfolio">Portfólio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#servico">Serviços</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#sobre">Sobre</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Jumbotron fluid className="desc-top">

                    <style>
                        {`.desc-top{
                                background: #000 url(/assets/desc-top-bg.jpg);
                                background-attachment: fixed;
                                background-size: cover;
                                color: #fff;
                                padding-top: 150px;
                                padding-bottom: 110px;
                                margin-bottom: 0rem !important;
                                position: relative;
                            }.inicio-link{
                                position: absolute;
                                top: 0px;
                            }`
                        }
                    </style>
                    <Container className="text-center">
                        <a name="inicio" className="inicio-link" />
                        <h1 className="display-4 pb-5">&#119998;Corp</h1>
                        <p className="lead pb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ab doloribus minus, tempora nemo maiores maxime nesciunt praesentium? Harum omnis error at aut maiores neque. Perspiciatis qui corrupti minima voluptatibus!
                        </p>
                        <p className="lead">
                            <Button href="https://gothub.com/Ias4g" target="_blank" outline color="warning" size="lg">Entrar em contato</Button>
                        </p>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid className="servicos">

                    <style>
                        {`.servicos{
                                background: #fff;
                                padding-top: 80px;
                                padding-bottom: 80px;
                                margin-bottom: 0rem !important;
                                position: relative;
                            }.circulo{
                                padding-top: 24px;
                                width: 140px;
                                height: 140px;
                                font-size: 52px;
                                color: #fff;
                                background-color: #fed136;
                            }.centralizar{
                                margin: 0 auto !important;
                                float: none !important;
                            }.servico-link{
                                position: absolute;
                                top: 0px;
                            }`
                        }
                    </style>
                    <Container className="text-center">
                        <div>
                            <h2 className="display-4">Serviços</h2>
                            <a name="servico" className="servico-link" />
                            <p className="lead pb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam enim libero maiores fuga minima inventore asperiores? Quibusdam delectus qui dignissimos, sapiente quisquam asperiores quae porro. Ex atque inventore neque.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="rounded-circle circulo centralizar">
                                    <FontAwesomeIcon icon="code" />
                                </div>
                                <h2 className="mt-4 mb-4">Serviço 01</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sint eligendi labore nulla nemo iure sit laboriosam asperiores. Necessitatibus voluptatem harum alias maxime aliquid ducimus provident odit corrupti suscipit
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <div className="rounded-circle circulo centralizar">
                                    <FontAwesomeIcon icon="laptop-code" />
                                </div>
                                <h2 className="mt-4 mb-4">Serviço 02</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis facere repudiandae similique minima sunt odio dolore voluptatum ea rem, pariatur exercitationem assumenda iure iste harum, cumque quia neque nobis. Nostrum?
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <div className="rounded-circle circulo centralizar">
                                    <FontAwesomeIcon icon="mobile-alt" />
                                </div>
                                <h2 className="mt-4 mb-4">Serviço 03</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reiciendis ratione, ad illo dignissimos sint saepe nihil blanditiis unde temporibus quia voluptas doloribus sapiente accusamus obcaecati eos recusandae ea iste!
                                </p>
                            </div>
                        </div>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid className="portfolio">
                    <style>
                        {
                            `.portfolio{
                                background: #f8f9fa;
                                padding: 80px 0px;
                                margin-bottom: 0rem !important;
                                position: relative;
                            }.portfolio-link{
                                position: absolute;
                                top: 0px;
                            }`
                        }
                    </style>
                    <Container className="text-center">
                        <a name="portfolio" className="portfolio-link" />
                        <div>
                            <h2 className="display-4">Portfolio</h2>
                            <p className="lead pb-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt expedita illo autem soluta in exercitationem perferendis cupiditate, fugiat voluptates repellendus reiciendis ratione, libero dignissimos quae eveniet placeat neque voluptatem saepe?
                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col mb-4">
                                <div className="card">
                                    <img src="/assets/portfolio.jpg" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et, quasi aperiam quisquam totam enim delectus recusandae dolor aliquam id eligendi quas officiis magnam alias earum voluptatem perferendis? Repellat, dolorem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src="/assets/portfolio.jpg" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et, quasi aperiam quisquam totam enim delectus recusandae dolor aliquam id eligendi quas officiis magnam alias earum voluptatem perferendis? Repellat, dolorem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src="/assets/portfolio.jpg" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et, quasi aperiam quisquam totam enim delectus recusandae dolor aliquam id eligendi quas officiis magnam alias earum voluptatem perferendis? Repellat, dolorem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src="/assets/portfolio.jpg" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et, quasi aperiam quisquam totam enim delectus recusandae dolor aliquam id eligendi quas officiis magnam alias earum voluptatem perferendis? Repellat, dolorem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src="/assets/portfolio.jpg" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et, quasi aperiam quisquam totam enim delectus recusandae dolor aliquam id eligendi quas officiis magnam alias earum voluptatem perferendis? Repellat, dolorem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src="/assets/portfolio.jpg" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et, quasi aperiam quisquam totam enim delectus recusandae dolor aliquam id eligendi quas officiis magnam alias earum voluptatem perferendis? Repellat, dolorem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid className="sobre">
                    <style>
                        {
                            `.sobre{
                                background: #fff;
                                padding: 50px 0px;
                                margin-bottom: 0rem !important;
                                position: relative;
                            }.sobre-link{
                                position: absolute;
                                top: -30px;
                            }`
                        }
                    </style>
                    <Container className="text-center">
                        <a name="sobre" className="sobre-link" />
                        <div>
                            <h2 className="display-4">Sobre</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit fugiat eligendi animi, itaque ipsum laudantium nostrum quibusdam, corrupti esse vitae minima architecto inventore alias saepe laboriosam quos sit quo.
                            </p>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">
                                    First featurette heading.
                                        <span className="text-muted">It’ll blow your mind.</span>
                                </h2>
                                <p className="lead">
                                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                                    </p>
                            </div>
                            <div className="col-md-5">
                                <img src="/assets/sobre.jpg" alt="" width="400" />
                            </div>
                        </div>

                        <hr className="pt-4 mb-4" />

                        <div className="row mb-4">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading">
                                    Oh yeah, it’s that good.
                                    <span className="text-muted">See for yourself.</span>
                                </h2>
                                <p className="lead">
                                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                                </p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img src="/assets/sobre.jpg" alt="" width="400" />
                            </div>
                        </div>

                        <hr className="pt-4 mb-4" />

                        <div className="row">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">
                                    And lastly, this one.
                                    <span className="text-muted">Checkmate.</span>
                                </h2>
                                <p className="lead">
                                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img src="/assets/sobre.jpg" alt="" width="400" />
                            </div>
                        </div>

                    </Container>
                </Jumbotron>
                
                <Jumbotron fluid className="rodape">
                    <style>
                        {
                            `.rodape{
                                background: #000;
                                color: #fff;
                                padding: 0px;
                                margin-bottom: 0rem !important;
                            }.icorp-link{
                                text-decoration: none !important;
                                color: #fed136;
                            }.icorp-link:hover{
                                color: #999;
                                text-decoration: underline !important;
                            }`
                        }
                    </style>
                    <Container className="text-center">
                        <div>
                            <footer className="footer mt-auto py-3">
                                <div className="container d-flex justify-content-between">
                                    <small className="text-muted">
                                        <a href="https://github.com/Ias4g" target="_blanc" className="icorp-link">
                                            &#119998;Corp&reg;
                                        </a>&nbsp;&#8259;&nbsp;by&nbsp;Izael&nbsp;Emunah
                                    </small>
                                    <small className="text-muted">&#124;</small>
                                    <small className="text-muted">&copy;&nbsp;1992&nbsp;&#8259;&nbsp;2020&nbsp;Todos os Direitos Reservados</small>
                                </div>
                            </footer>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        </>
    )
}

export default HomePage