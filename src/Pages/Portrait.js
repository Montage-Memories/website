import ContactForm from "../Components/Form/ContactForm";
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import img from "../Images/_SSK2120 (1).jpg";
import React from "react";
import Fashion from "./Fashion";
import Portfolio from "./Portfolio";
import "../App.css"

const cardData = [
    {
        id: 1,
        imageUrl:"https://drive.google.com/uc?id=126Pdu4YtdPTQlTPPBBUr8SSbTOSkSlkt",
        title:'Portrait',
        content: 'In the realm of portraits,' +
            ' the camera becomes a mirror that reflects ' +
            'not only physical features but also the essence of a soul',
        url:'/portrait' },
    {
        id: 2,
        imageUrl:"https://drive.google.com/uc?id=1Zc0a-ec4o-4YLKMvcCovAMHdeCtUaVws",
        title:'Commercial Photography',
        content: 'Through commercial photography, brands come to life, ' +
            'creating visual narratives that leave a lasting impression.',
        url:'/fashion'},
    {
        id: 3,
        imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
        title:'Kids Photography',
        content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
            'and infectious smiles become the stars of the show',
        url:'/wedding'},
    {
        id: 4,
        imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
        title:'Kids Photography',
        content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
            'and infectious smiles become the stars of the show',
        url:'/wedding'},

    {
        id: 5,
        imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
        title:'Kids Photography',
        content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
            'and infectious smiles become the stars of the show',
        url:'/wedding'},
    {
        id: 6,
        imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
        title:'Kids Photography',
        content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
            'and infectious smiles become the stars of the show',
        url:'/wedding'},
    {
        id: 7,
        imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
        title:'Kids Photography',
        content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
            'and infectious smiles become the stars of the show',
        url:'/wedding'},
    {
        id: 8,
        imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
        title:'Kids Photography',
        content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
            'and infectious smiles become the stars of the show',
        url:'/wedding'},
];
const Portrait = () => {
    return(
        <div>
            <div className="Portrait-Container">
                <Fashion />
                <br /><br />
                 <Portfolio />
            </div>
        </div>
    )
}

export default Portrait ;