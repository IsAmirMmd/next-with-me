//TODO : download colorful comments extensions //

//?------------------ NOTE -------------------?//

//! 1. diffrence between SSR & SSG :           //
//* to be completed ......................... *//

//! 2. fallBack in getStaticPaths :            //
//~ fallback has three option : 1. false , 2. true , 3. "blocking"

//^     false :
//&            1. it will be rendered at build time
//&            2. it will return 404 if we dont set that path in this function
//&            3. when => we have small number of pages
//&            4. when => new pages are not adden often
//^     true :
//&            1. when => we have large number of pages
//&            2. when => pre-rendering took long time
//&            3. it will show loading until getting right data (router.isFallback && "loading...")
//&            3. Link also would pre-render pages !
//^     "blocking" :
//&            1. it won't show any loading from router but in-browser,yes!
//&            2. it will show the right return after loading completed
//&            3. when => we wanna pass the all the tests from google bots(SEO)
