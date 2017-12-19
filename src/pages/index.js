import React from 'react'
import Link from 'gatsby-link'

import p1 from '../image/flickr/14361853906_9df07f909f_n.jpg'
import p2 from '../image/flickr/13543664355_f01064fa4a_n.jpg'
import p3 from '../image/flickr/13454067423_04ab2f2f60_n.jpg'
import p4 from '../image/flickr/13842086385_fe5ae0c52a_n.jpg'
import p5 from '../image/flickr/14592209397_87644c58b0_n.jpg'
import p6 from '../image/flickr/13364086264_61b39ac3a6_n.jpg'

import flickr from '../image/logos/flickr.png'
import instagram from '../image/logos/instagram.png'
import linkedin from '../image/logos/linkedin.png'

const IndexPage = () => (
    <div>
        <div className={'title-skeleton'}>
            <div className={'container'}>
                <div className={'title'}>
                    <h1>Welcome to my world!</h1>
                    <p>Here you will find some interesting stuff! Although there are not too many things, you can take a look around.</p>
                </div>
            </div>
        </div>

        <div className={'album-skeleton'}>
            <div className={'container'}>
                <table className={'collapse album'}>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://www.flickr.com/photos/bogolyandras/14361853906" title="Sleeping Kitten"><img src={p1} width="320" height="180" alt="Sleeping Kitten" /></a>
                            </td>
                            <td>
                                <a href="https://www.flickr.com/photos/bogolyandras/13543664355" title="Aranyfa by András Bögöly, on Flickr"><img src={p2} width="320" height="180" alt="Aranyfa" /></a>
                            </td>
                            <td>
                                <a href="https://www.flickr.com/photos/bogolyandras/13454067423" title="Waterfall by András Bögöly, on Flickr"><img src={p3} width="320" height="180" alt="Waterfall" /></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://www.flickr.com/photos/bogolyandras/13842086385" title="Salad"><img src={p4} width="320" height="240" alt="Salad" /></a>
                            </td>
                            <td>
                                <a href="https://www.flickr.com/photos/bogolyandras/14592209397" title="Niederösterreich"><img src={p5} width="320" height="240" alt="Niederösterreich" /></a>
                            </td>
                            <td>
                                <a href="https://www.flickr.com/photos/bogolyandras/13364086264" title="Wagrain Mountains by András Bögöly, on Flickr"><img src={p6} width="320" height="240" alt="Wagrain Mountains" /></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className={'referencelist'}>
            <div className={'container'}>
                <p>Follow me on</p>
                <p>
                    <a href="https://www.linkedin.com/in/bogolyandras"><img src={linkedin} alt="LinkedIn" /></a>
                    <a href="https://instagram.com/bogolyandras"><img src={instagram} alt="Instagram" /></a>
                    <a href="https://www.flickr.com/photos/bogolyandras"><img src={flickr} alt="Flickr" /></a>
                </p>
            </div>
        </div>
    </div>
);

export default IndexPage
