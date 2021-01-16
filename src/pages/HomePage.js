import React from 'react';
import Article from '../components/Article'


const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas earum tempore expedita quis odio tenetur, voluptatibus, alias recusandae voluptatem sunt harum nemo deserunt placeat iusto, quibusdam perspiciatis ex dolores illum!"
    },

    {
        id: 2,
        title: "Czym jest paradoks Fermiego?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas earum tempore expedita quis odio tenetur, voluptatibus, alias recusandae voluptatem sunt harum nemo deserunt placeat iusto, quibusdam perspiciatis ex dolores illum!"
    },

    {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas earum tempore expedita quis odio tenetur, voluptatibus, alias recusandae voluptatem sunt harum nemo deserunt placeat iusto, quibusdam perspiciatis ex dolores illum!"
    },
]
const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))

    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;