import React, { useContext } from "react";
import styled from "styled-components";
import iconSebi from "../assets/img/sebi_logo.webp"
import { CursorContext } from "../context/CursorContext";
import { GameContext } from "../context/GameContext";
import { NavLink } from "react-router-dom";
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

const Title = styled.h3`
    font-size: 20pt;
    font-weight: bold;
    margin-bottom: 16px;
`;

const Subtitle = styled.h4`
    font-size: 16pt;
    font-weight: bold;
    margin-top: 32px;
    margin-bottom: 12px;
`;

const Paragraph = styled.p`
    font-size: 11pt;
    line-height: 1.5;
    margin: 12px 0;
`;

const BulletList = styled.ul`
    margin-left: 36px;
    padding-left: 0;
`;

const ListItem = styled.li`
    font-size: 11pt;
    margin-bottom: 8px;
`;

const Strong = styled.span`
    font-weight: bold;
`;

const Mail = styled.span`
    font-weight: bold;
    color: #000;
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
const Politique = () => {
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
            <Title>Politique de confidentialité – Sebi-la-gazelle-app</Title>
            <Paragraph><Strong>Dernière mise à jour :</Strong> 24 avril 2025</Paragraph>
            <Paragraph>
                La présente politique de confidentialité explique comment l’application <Strong>Sebi-la-gazelle-app</Strong> collecte, utilise et protège les données personnelles de ses utilisateurs, notamment des enfants âgés de 4 à 8 ans, dans le respect des lois en vigueur.
            </Paragraph>

            <Subtitle>1. Qui sommes-nous ?</Subtitle>
            <Paragraph>Sebi-la-gazelle-app est une application de jeu éducatif destinée aux enfants de 4 à 8 ans.</Paragraph>
            <Paragraph><Strong>Éditeur :</Strong> Sebi-la-gazelle-app</Paragraph>
            <Paragraph><Strong>Adresse :</Strong> 2 rue de l’échappée, 75010 PARIS</Paragraph>
            <Paragraph><Strong>Email de contact :</Strong> intervenantsformateurs@gmail.com</Paragraph>
            <Paragraph><Strong>Téléphone :</Strong> 06 06 06 06 06</Paragraph>

            <Subtitle>2. Quelles données personnelles collectons-nous ?</Subtitle>
            <Paragraph>Nous collectons uniquement les informations suivantes lors de la création d’un compte utilisateur :</Paragraph>
            <BulletList>
                <ListItem>Nom</ListItem>
                <ListItem>Prénom</ListItem>
                <ListItem>Adresse e-mail</ListItem>
            </BulletList>
            <Paragraph>Aucune donnée sensible (adresse postale, numéro de carte bancaire, etc.) n’est collectée.</Paragraph>

            <Subtitle>3. Pourquoi collectons-nous ces données ?</Subtitle>
            <Paragraph>
                Les données sont collectées dans le seul but de permettre aux utilisateurs de se connecter à l’application et d’enregistrer leur progression dans le jeu. Elles ne sont pas utilisées à des fins commerciales, publicitaires ou statistiques.
            </Paragraph>

            <Subtitle>4. À qui sont destinées ces données ?</Subtitle>
            <Paragraph>
                Nous ne partageons <Strong>aucune donnée personnelle</Strong> avec des tiers. Aucune donnée n’est transférée en dehors de l’Union européenne.
            </Paragraph>

            <Subtitle>5. Consentement parental</Subtitle>
            <Paragraph>
                Conformément au <Strong>Règlement Général sur la Protection des Données (RGPD)</Strong> et aux législations sur la protection des mineurs, nous demandons le <Strong>consentement des parents ou du tuteur légal</Strong> avant la collecte de toute donnée personnelle d’un enfant de moins de 15 ans.
                L’inscription à l’application par un mineur nécessite la validation d’un adulte.
            </Paragraph>

            <Subtitle>6. Durée de conservation des données</Subtitle>
            <Paragraph>
                Les données sont conservées aussi longtemps que le compte de l’utilisateur est actif.
                Vous pouvez demander la suppression de vos données à tout moment (voir section 8).
            </Paragraph>

            <Subtitle>7. Sécurité des données</Subtitle>
            <Paragraph>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger les données contre la perte, le vol, ou l’accès non autorisé.
            </Paragraph>

            <Subtitle>8. Vos droits</Subtitle>
            <Paragraph>Conformément à la réglementation, vous disposez des droits suivants :</Paragraph>
            <BulletList>
                <ListItem>Droit d’accès, de rectification et d’effacement de vos données</ListItem>
                <ListItem>Droit d’opposition et de limitation du traitement</ListItem>
                <ListItem>Droit à la portabilité</ListItem>
                <ListItem>Droit de retrait de votre consentement</ListItem>
            </BulletList>
            <Paragraph>
                Pour exercer ces droits, contactez-nous à l’adresse suivante : 📧 <Mail>intervenantsformateurs@gmail.com</Mail>
            </Paragraph>

            <Subtitle>9. Modifications de cette politique</Subtitle>
            <Paragraph>
                Nous pouvons être amenés à modifier la présente politique. Toute modification sera indiquée sur cette page, avec la date de mise à jour.
            </Paragraph>
        </Container>
    );
}

export default Politique