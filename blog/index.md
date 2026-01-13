---
layout: "base.html"
title: "Blog"
---

<h1>My blog<h1>

<ul class="blog-list">
{%- for post in collections.blog -%}
  {# This checks if the post in the loop is NOT the current page #}
  {% if post.url != page.url %} 
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a> — {{ post.date | postDate }}
    </li>
  {% endif %}
{%- endfor -%}
</ul>

