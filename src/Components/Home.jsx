import NavHome from './NavHome';
import image3 from './Assets/business.png';
import image2 from './Assets/communications.png';
import image4 from './Assets/sad.png';
export default () => {
    return (
        <>
            <NavHome />
            <main id='home'>
                <section>
                    <img src={image2} />
                    <h1>Welcome to PhotoAlbum of Unsplash</h1>
                </section>
                <section>
                    <img src={image3} />
                    <h1>You can find 6,100,000,000,000+ images</h1>
                </section>
                <section>
                    <img src={image4} />
                    <h1>
                        Price tags are only for decoration, all images are free
                        because, I don't know how to work with payment methods..
                    </h1>
                </section>
            </main>
        </>
    );
};
