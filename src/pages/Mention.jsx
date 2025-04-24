import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import iconSebi from "../assets/img/sebi_logo.png"
import { CursorContext } from "../context/CursorContext";
import { GameContext } from "../context/GameContext";


const breakpoints = {
    mobile: '600px',
    tablet: '900px',
}
const Container = styled.div`
    background-color: #ffffff;
    padding: 72px;
    max-width: 900px;
    margin: auto;
    font-family: Arial, sans-serif;
    color: #000;

    max-height: 100vh;     // Limite la hauteur à 90% de la fenêtre
    overflow-y: auto;     // Active le scroll vertical si nécessaire
    scrollbar-width: thin; // Pour Firefox
    scrollbar-color: #ccc transparent;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    @media (max-width: 768px) {
        padding: 32px 24px;
        max-width: 100%;
        height: 100vh;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        padding: 24px 16px;
    }
`;

const Title = styled.h2`
    font-size: 24pt;
    font-weight: bold;
    text-align: center;
    margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
    font-size: 18pt;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 12px;
`;

const Paragraph = styled.p`
    font-size: 12pt;
    line-height: 1.5;
    text-align: justify;
    margin: 12px 0;
`;

const IndentedParagraph = styled(Paragraph)`
    text-indent: 36px;
`;
const ImageSebi = styled.img`
  width: 48px;
  height: 60px;

  @media (min-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 75px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 72px;
    height: 90px;
  }
`
const ContainerLogoSebi = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0;
`
const Mention = () => {
    const { setCursorType, pointer, cursor } = useContext(CursorContext)
    const { toggleGameModals } = useContext(GameContext);

    const handleMouse = (e, type) => () => setCursorType(type)
    const returnToHome = () => {
        toggleGameModals('closeGame')
    }
    return (
        <Container>
            <ContainerLogoSebi>
                <NavLink onClick={returnToHome} to="/" aria-label="Retour à l'accueil">
                    <ImageSebi
                        onMouseEnter={handleMouse(null, pointer)}
                        onMouseLeave={handleMouse(null, cursor)}
                        onMouseDown={handleMouse(null, pointer)}
                        onMouseUp={handleMouse(null, cursor)}
                        draggable="false"
                        src={iconSebi}
                        alt="Logo Sebi la gazelle"
                    />
                </NavLink>
            </ContainerLogoSebi>
            <Title>MENTIONS LÉGALES</Title>

            <Paragraph>
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
                confiance en l'économie numérique, il est précisé aux utilisateurs du site
                <strong> sebi-la-gazelle-app </strong> l'identité des différents intervenants
                dans le cadre de sa réalisation et de son suivi.
            </Paragraph>

            <SectionTitle>Édition du site</SectionTitle>
            <IndentedParagraph>
                Le présent site, accessible à l’URL <strong>https://sebi-la-gazelle-app.com/</strong>
                (le « Site »), est édité par :
            </IndentedParagraph>
            <Paragraph>
                Paul Ochon, résidant 2 rue de l’échappée 75010 PARIS, de nationalité
                Française (France), né(e) le 11/10/0009.
            </Paragraph>

            <SectionTitle>Hébergement</SectionTitle>
            <Paragraph>
                Le Site est hébergé par la société Hostinger International LTD, disponible via :
                <br />
                <a href="https://www.hostinger.fr/contact" target="_blank" rel="noreferrer">
                    https://www.hostinger.fr/contact
                </a>
            </Paragraph>

            <SectionTitle>Directeur de publication</SectionTitle>
            <Paragraph>Le Directeur de la publication du Site est Paul Ochon.</Paragraph>

            <SectionTitle>Nous contacter</SectionTitle>
            <Paragraph>📞 Téléphone : +33 6 06 06 06 06</Paragraph>
            <Paragraph>📧 Email : intervenantsformateurs@gmail.com</Paragraph>
            <Paragraph>📫 Adresse : 2 rue de l’échappée, 75010 PARIS</Paragraph>

            <SectionTitle>Données personnelles</SectionTitle>
            <Paragraph>
                Le traitement de vos données à caractère personnel est régi par notre Charte du respect
                de la vie privée, disponible depuis la section « Charte de Protection des Données
                Personnelles », conformément au Règlement Général sur la Protection des Données 2016/679
                du 27 avril 2016 (« RGPD »).
            </Paragraph>
        </Container>
    );
}

export default Mention