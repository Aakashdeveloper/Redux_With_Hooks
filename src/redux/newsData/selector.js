export const getLatestNews = (state) => {
    // console.log(">>>getLatestNews",state.data)
    return state.newsData.latestNews
};
  
export const getArticleNews = (state) => {
     console.log(">>>getArticleNews",state)
    return state.newsData.articleNews
};

export const getGalleryNews = (state) => {
     console.log(">>>getGalleryNews",state)
    return state.newsData.galleryNews
};