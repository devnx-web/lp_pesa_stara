import css from "./produtos.module.css"
import {Row, Col, Container} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image"
import Link from "next/link"

export default function Produtos(){
    return(
        <div>
            <Container>
                <Row>
                    <div className={css.titleSection}>Produtos relacionados</div>
                    <div className={css.divider}></div>
                </Row>

                <Row className="py-5">
                    <Col className={css.card}>
                    <div className={css.border}>
                        <Image src="/imgs/maquina-blog-1.png" alt="maquina" width={327} height={187}/>
                        </div>

                        <div className={css.nomeMaquina}>
                            Princesa
                        </div>
                        <Link href="/#contato"><a className={css.link}><div className={css.btnSaiba}>
                            saiba mais
                        </div></a></Link>
                    </Col>

                    <Col className={css.card}>
                    <div className={css.border}>
                        <Image className={css.img} src="/imgs/maquina-blog-2.png" alt="maquina" width={327} height={187}/>
                        </div>

                        <div className={css.nomeMaquina}>
                            Imperador 3.000
                        </div>
                        <Link href="/#contato"><a className={css.link}><div className={css.btnSaiba}>
                            saiba mais
                        </div></a></Link>
                    </Col>

                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}