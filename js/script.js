document.addEventListener("DOMContentLoaded", ()=>{
    let search = document.getElementById("search")
    let google = document.getElementById("google")
    let wikipedia = document.getElementById("wikipedia")

    google.addEventListener('click', (e)=>{
        e.preventDefault()
        const query  = search.value
        let link = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        makeResearch(link)
    })

    wikipedia.addEventListener('click', (e)=>{
        e.preventDefault()
        const query  = search.value
        let link = `https://fr.wikipedia.org/wiki/${encodeURIComponent(query)}`;
        makeResearch(link)
    })

    function makeResearch(link) {
        
    const query  = search.value
        if (query !='') {
            chrome.tabs.create({ url: link });
        }
    }


})