---
title: "Home"
---

<p>Hello. Welcome to my site. You can find more about me on the <a href="/about" class="green-link">>About</a> page, read something on the <a href="/blog" class="green-link">>blog</a> or explore some of my <a href="/projects" class="green-link">>projects</a> (or use the buttons below).</p>

<p>To go back to the previous page, all you need to do is click the heading at the top...</p>

<div class="button-grid">
    <a href="/blog" class="big-button">>Blog</a>
    <a href="/about" class="big-button">>About</a>
    <a href="/projects" class="big-button">>Projects</a>
</div>

<p>Random article from <span class="green-link">>blog</span> or <span class="green-link">>projects</span> below:</p>

<div id="random-article-container"></div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  fetch('/feed.json')
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then(posts => {
      const validPosts = posts.filter(p => p.title && p.url !== '/');

      if (validPosts.length === 0) {
        console.warn("No articles found in feed.json");
        return;
      }

      const randomPost = validPosts[Math.floor(Math.random() * validPosts.length)];
      const container = document.getElementById('random-article-container');

      if (container) {
        container.innerHTML = `
          <article class="random-snippet">
              <h2 class="article-title">Title: <a href="${randomPost.url}">${randomPost.title}.</a></h2>
              <p class="article-date">Published: ${randomPost.date}</p>
              <h3 class="article-subheader"><a href="${randomPost.url}">${randomPost.title}?</a></h3>
              <div class="article-excerpt">${randomPost.excerpt}</div>
          </article>
        `;
      }
    })
    .catch(err => console.error("Random article error:", err));
});
</script>
