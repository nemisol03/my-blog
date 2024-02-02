import NewestPostItem from "./NewestPostItem";
import NewestPostLarge from "./NewestPostLarge";
import PostItem from "./PostItem";

function NewestPost() {
    return (
        <div className="newest-section mt-12">
            <h3 className=" relative text-primary text-xl font-medium border-t-heading">Newsest</h3>
               <div className="flex gap-10 mt-6">
                    <NewestPostLarge />
                    <div className="rounded-xl overflow-hidden">
                        <NewestPostItem />
                        <NewestPostItem />
                        <NewestPostItem />
                    </div>
               </div>
                <div className="grid grid-cols-4 gap-x-10 mt-10">
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                </div>

        </div>
    );
}

export default NewestPost;
