---
layout: "base.html"
title: "Projects"
---

<h1>My projects</h1>

<ul class="projects-list">
{%- for post in collections.project -%}
  <!-- {% if post.url != page.url %}  -->
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a> — {{ post.date | postDate }}
    </li>
   <!-- {% endif %} -->
{%- endfor -%}
</ul>

