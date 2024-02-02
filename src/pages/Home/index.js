import Banner from '~/components/Banner';
import FeaturePost from '~/components/FeaturePost';
import NewestPost from '~/components/NewestPost';
import Pagination from '~/components/pagination';

function Home() {
    return (
        <div className="mt-10 ">
            <Banner />
            <FeaturePost />
            <NewestPost />
            <Pagination />
        </div>
    );
}

export default Home;
