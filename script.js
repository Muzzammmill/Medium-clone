const articles = document.querySelectorAll(".article")
const articleCont = document.querySelector(".article-wrapper")
const nav = document.querySelector("nav")
const navBtn = document.querySelector(".navBtn")
const banner = document.querySelector(".banner")

function loadNewArticle() {
  for (let article of articles) {
    const newArticle = article.cloneNode(true)
    articleCont.appendChild(newArticle)
  }
}

const lastArticleObserver = new IntersectionObserver(entries => {
  const lastArticle = entries[0]
  if (lastArticle.isIntersecting)
    return loadNewArticle()
  lastArticleObserver.unobserve(lastArticle.target)
  lastArticleObserver.observe(document.querySelector(".article:last-child"))
})

lastArticleObserver.observe(document.querySelector(".article-flex:last-child"))


console.log(articles);

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.style.backgroundColor = "white"
      navBtn.style.backgroundColor = "green"
    } else {
      nav.style.backgroundColor = null
      navBtn.style.backgroundColor = null
    }
  })
})

navObserver.observe(banner)