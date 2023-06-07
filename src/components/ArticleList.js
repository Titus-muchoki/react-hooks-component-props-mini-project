import React from "react";

function ArticleList({posts}){
    return(
        <main>
            <article key={posts.id}>{posts}</article>
        </main>
    )
}
ex