
import Banner from '@/Components/Carousel/Banner'
import CardProduct from '@/Components/Cards/CardProduct'
import CarouselBanner from '@/Components/Carousel/CarouselBanner'
import SectionList from '@/Components/Sections/SectionList'

import Layout from '@/Layouts/Layout'
import { Head, usePage, Link} from '@inertiajs/react'
import CarouselTop from './CarouselTop'
import GridProduct from '@/Components/Grids/GridProduct'
import CarouselSection from './CarouselSection'


export default function Home({ page, brands, carouselTop, bannersTop, bestSeller, bannersMedium, newProducts, bannersBottom, categoriesProductCount }) {

    return (
        <>
              <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#ffd700"/>
            <meta name="robots" content="index, follow"/>


            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="apple-mobile-web-app-title" content="AlbaPan"/>


            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"/>
            <link rel="icon" sizes="192x192" href="/icons/ALBAPAN-192X192.png"/>


            <meta property="og:title" content="AlbaPan"/>
            <meta property="og:description" content="Panadería, Pan, Pasteles, Pan Fresco, AlbaPan, Productos de Panadería, Panadería en Línea, Pedidos de Pan, PWA panadería"/>
            <meta property="og:image" content="/images/ALBAPAN.png"/>
            <meta property="og:url" content="https://www.facebook.com/profile.php?id=100071772542007&mibextid=JRoKGix"/>

         
        </head>
           
            
            <Layout>
            <link rel="manifest" href="/manifest.json"/>
                <div className="container">
               
                    {(bestSeller.length > 0) && (
                        <SectionList title="Los mas vendidos">

                            <GridProduct>
                                {bestSeller.map((product) => (
                                    <CardProduct key={product.id} product={product} />
                                ))}
                            </GridProduct>
                        </SectionList>
                    )}

                    
                   
                    <SectionList title={"Categorias"}>
                        <CarouselSection items={categoriesProductCount} searchType="categories[]" />
                    </SectionList>

                    <SectionList title={"Los recién llegados"}>
                        <div className=" py-2 relative">
                            <GridProduct>
                                {newProducts.map((item) => (
                                    <CardProduct key={item.id} product={item} productNew={true} />
                                ))}
                            </GridProduct>
                        </div>
                    </SectionList>

                    {bannersBottom.length > 0 && (
                        <div className="py-content">
                           
                        </div>
                    )}

                    <SectionList title={"Top Marcas"}>
                        <CarouselSection items={brands} searchType="brands" />
                    </SectionList>

                </div>


            </Layout>
        </>
    )
}
