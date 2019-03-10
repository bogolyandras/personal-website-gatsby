import React from 'react'

import Layout from '../components/layout';
import ErsteBesuch from '../images/NeuAnspach/1.jpg'
import Blick from '../images/NeuAnspach/2.jpg'
import Landschaft1 from '../images/NeuAnspach/3.jpg'
import Landschaft2 from '../images/NeuAnspach/4.jpg'
import Landschaft3 from '../images/NeuAnspach/5.jpg'
import StadtCenter from '../images/NeuAnspach/7.jpg'
import SpassMachen from '../images/NeuAnspach/10.jpg'

const Blog = () => (
  <Layout>
    <div className={'title-skeleton'}>
        <div className={'container'}>
            <div className={'title'}>
                <h1>Neu Anspach</h1>
                <p>Mein neuer Standort</p>
            </div>
        </div>
    </div>

    <div className={'album-skeleton'}>
        <div className={'container'}>
            <h1>Erste Besuch</h1>
            <p>Ich bin von kurzem Zeit nach Bad Homburg gezogen. Die Stadt ist schon, aber auch sehr teuer für mich.
                Ich suchte nach der möglichkeit, an einen Billiger Stadt umzuziehen.
                Nach Versuch und Irrtum habe ich meine Erste Besuch nach eine kleines Wohnung habe.
                Alle Wohnungen sehen sehr gut aus hier. Mein Vermieter ist auch ein Jung Mann.</p>
            <p><img src={ErsteBesuch} alt="Erste Besuch" /></p>
            <p>Der Ort und die Wohnung ist sehr sehr ruhig. Niemand ist laut. Der Blick meines Fenster ist okay.</p>
            <p><img src={Blick} alt="Blick von meinem Fenster" /></p>
            <p>Die Jahreszeiten sind hier. Wienter.</p>
            <p><img src={Landschaft1} alt="Winter" /></p>
            <p>Zwischen Winter und Frühling.</p>
            <p><img src={Landschaft2} alt="Zwischen Winter und Frühling" /></p>
            <p>Und der Frühling.</p>
            <p><img src={Landschaft3} alt="Frühling" /></p>
            <p>Für Lebensmittel gibt hier viel Einkaufenmöglichkeit. Es gibt Rewe, Aldi, Lidl, Edeka. Auch ein Rossman für andere Dinge.</p>
            <p><img src={StadtCenter} alt="Stadtcenter" /></p>
            <p>Leider gibt hier nicht so viel zu tun. Die jugend Leute oft macht Spaß mit Alkohol. Music hören laut von der Radio das Auto. Und Müll machen von Flashen.</p>
            <p><img src={SpassMachen} alt="Spaß machen" /></p>
        </div>
    </div>
  </Layout>
)

export default Blog
